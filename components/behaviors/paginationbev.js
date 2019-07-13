const paginationBev =Behavior({
  data:{
    searchBooks:[],
    total:null,
    noneResult:false
  },
  methods:{
    setMoreData(searchBooks){
      const newArrayBooks = this.data.searchBooks.concat(searchBooks)
      this.setData({
        searchBooks: newArrayBooks
      })
    },
    getCurrentStart(){
      return this.data.searchBooks.length
    },
    setTotal(total){
      this.data.total=total
      if(total==0){
        this.setData({
          noneResult:true
        })
      }
    },
    hasMore(){
      if(this.data.searchBooks.length>=this.data.total){
        return wx.showToast({
          title: '已经到底了',
        })
      }
      else{
        return true
      }
    },
    cleanSearchBooks(){
      this.setData({
       searchBooks:[],
      noneResult:false
      })
      this.data.total = null


    },
    // 判断锁的状态
    islocked() {
      return this.data.loading ? true : false
    },
    // 上锁函数
    locked() {
      this.setData({
        loading: true
      })
      // this.data.loading = true // this.data.loading --不进行WXML页面更新
    },
    //  解锁函数
    unLocked() {
      this.setData({
        loading: false
      })
      // this.data.loading = false // this.data.loading --不进行WXML页面更新
    },

  }
})
// 行为组建 ，即复用组建，允许被COMPONENTS组件复用  需在使用处
//                                                 behaviors:[(export里的函数名)]
export{
  paginationBev
}