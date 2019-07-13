// pages/book-detail/book-detail.js
import{BookModel} from '../../models/book.js'
const bookModel =new BookModel()
import{LikeModel}from '../../models/like.js'
const likeModel=new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
    comments:[],
    book:String,
    likeStatus:false,
    likeCount:0,
    posting:false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading()
    const bid= options.bid
    const detail= bookModel.getDetail(bid);
    const likeStatus= bookModel.getLikeStatus(bid);
    const comments= bookModel.getComments(bid);
    Promise.all([detail, comments, likeStatus])
    .then(res=>{
      wx.hideLoading()
      this.setData({
        book: res[0],
        comments: res[1].comments,
        likeStatus: res[2].like_status,
        likeCount: res[2].fav_nums,
      })
    })
    // detail.then(res=>{
    //   // console.log(res)
    //   this.setData({
    //     book:res
    //   })
    // })
    // comments.then(res=>{
    //   // console.log(res)
    //   this.setData({
    //     comments:res.comments
    //   })
    // })
    // likeStatus.then(res=>{
    //   // console.log(res)
    //   this.setData({
    //     likeStatus:res.like_status,
    //     likeCount:res.fav_nums
    //   })
    //   // console.log(this.data.likeStatus)
    // })
  },

  onLike: function (event) {
    // console.log(event)
    let bhlike = event.detail.bhlike;
    likeModel.like(bhlike, this.data.book.id, 400)
  },
  onFakePost:function(event){
    this.setData({
      posting:true
    })
  },
  //上下两种函数都可以  下方为ES6写法
  onCancel(event) {
    this.setData({
      posting: false
    })
  },

  onPosting:function(event){
    const comment = event.detail.text || event.detail.value
    // const commentInput =event.detail.value
    if(!comment){
      return
    }
    if(comment.length>12){
      wx.showToast({
        title: '短评最多十二个字',
        icon: 'none',
      })

      return 
    }
    // console.log(this.data.book.id)
    // console.log(comment)
    bookModel.postCommnet(this.data.book.id,comment)
    .then(res=>{
      wx.showToast({
        title:'+1',
        icon:"none",
      })

      this.data.comments.unshift({
        content:comment,
        nums:1
      })
      this.setData({
        comments:this.data.comments,
        posting:false
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})