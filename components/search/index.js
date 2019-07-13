// components/search/index.js

import {
  KeywordModel
} from '../../models/keyword.js'
const keywordModel = new KeywordModel()

import {
  BookModel
} from '../../models/book.js'
const bookModel = new BookModel()

import {
  paginationBev
} from '../behaviors/paginationbev.js'
Component({
  /**
   * 组件的属性列表
   */



  behaviors: [paginationBev],






  properties: {
    more: {
      type: String,
      observer: "loadMore" 
      // loadMore  是一个私有函数 定义在下面.为触底函数
    },


  },

  /**
   * 组件的初始数据
   */
  data: {

    historyWords: [],
    hostWords: [],
    // searchBooks: [],  被重构在了Behaviors里 
    q: '',
    searching: false,
    loading: false,
    loadingCenter:false,
    like:false
    // 历史搜素数组 historyWords
    // hostWords 热门搜索数组
    // searchBooks 为书籍数组
    // searching 为 搜索页面(历史搜索和热门搜索   与书籍数组  的状态切换)
    // q 为 input 搜索内容
    // loading 锁，防止连续触发搜索函数
    // loadingCenter  loading加载图标
  },

  attached() {
    // const historyWords = keywordModel.getHistory()
    // const hostWords=keywordModel.getHost()
    this.setData({
      historyWords: keywordModel.getHistory()
    })
    keywordModel.getHost().then(res => {
      this.setData({
        hostwords: res.hot
      })
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 取消按钮处理函数
    onCancel(event) {
      this.triggerEvent('onCanceling', {}, {})  //抛出点击事件 名称==onCanceling  由BOOK(Page)页面处理
    },
    // xx.img 点击处理函数
    onTap: function(event) {
      this._closeResult()
    },
    //input 聚焦处理函数
    onConfirm: function(event) {
      this._showResult() // 打开搜索 结果
      this._showLoadingCenter() // 搜索开始 出现Loading 图标
      this.cleanSearchBooks() //首次调用时 清空书籍数组
      const q = event.detail.value || event.detail.text   //获取input返回的值 ||获取点击Tag组件跑出来的TEXT值
      bookModel.search(0, q).then(res => {
        this.setMoreData(res.books) //setData 绑定数据函数
        this.setTotal(res.total) //获取服务器Total字段==数组length
        this.setData({
          q: q 
        })
        keywordModel.addToHistory(q)
        this._hideLoadingCenter()
      })
    },
     //判断锁的状态 ，TURE 时表示正在发送请求，应跳出 this.指代行为Behavior里的函数，由头部引入
     //判断锁的状态 ，TURE 时表示正在发送请求，应跳出 this.指代行为Behavior里的函数，由头部引入
    loadMore: function() {
      if (!(this.data.q)) {
        return
      }
      //判断锁的状态 ，TURE 时表示正在发送请求，应跳出 this.指代行为Behavior里的函数，由头部引入
      if (this.islocked()) {
        return
      }
      if (this.hasMore()) {
        this.locked() // 上锁函数 this.指代行为Behavior里的函数，由头部引入
        bookModel.search(this.getCurrentStart(), this.data.q).then(res => {
          this.setMoreData(res.books)
          this.unLocked() //  解锁函数  this.指代行为Behavior里的函数，由头部引入

        }, () => {
          this.unLocked() //  解锁函数  this.指代行为Behavior里的函数，由头部引入
        })
      }


    },

    _showResult() {
      // 打开搜索 结果
      this.setData({
        searching: true
      })
    },
    // 关闭搜索 结果
    _closeResult() {
      this.setData({
        searching: false,
        q: ""
      })
    },

    _showLoadingCenter(){
      this.setData({
       loadingCenter:true
      })
    },
    _hideLoadingCenter(){
      this.setData({
        loadingCenter: false
      })
    }
    
  }
})