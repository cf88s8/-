// components/book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: Object,
    like:Boolean

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached(){
    // console.log(this.properties.like)
    // this.setData({
    //   like:this.properties.like
    // })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap:function(){
      const bid=this.properties.book.id;
      wx.navigateTo({
        // url:"../../pages/book-detail/book-detail?bid="+bid,
        //绝对路径和相对路径都可以 ，ES6写法↓↓↓(*Φ皿Φ*)
        url: `/pages/book-detail/book-detail?bid=${bid}`
      })
    }
  }
})