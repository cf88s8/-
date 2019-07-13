// pages/my/my.js
import{BookModel}from '../../models/book.js'
import{ClassicModel}from '../../models/classic.js'

const bookModel= new BookModel()
const classicModel= new ClassicModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:'../../images/my/my.png',
    nickName:'',
    authorized:false,
    bookCount:0,
    classics:null,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.userAuthorized()
    this.likeBookCount()
  },

  getMyFavor:function(){
    classicModel.getMyfavor((res)=>{
      this.setData({
        classics: res
      })
    })
  },
  
  likeBookCount(){
    bookModel.getMyBookCount().then(res=>{
      this.setData({
        bookCount: res.count
      })

    })
  },
  userAuthorized(){
    var that = this;
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success(res) {
              that.setData({
                avatarUrl: res.userInfo.avatarUrl,
                nickName: res.userInfo.nickName,
                authorized: true,
              })
            }
          })
        } else {
          that.setData({
            authorized: false,
          })
        }
      }
    })
  },

  // onGetUserInfo  来源 父级（getuserinfo）由image-button  traiggerEvent抛出
  onGetUserInfo(event) {
    const userInfo = event.detail.userInfo
    if (userInfo) {
      console.log(userInfo)
      this.setData({
        avatarUrl: userInfo.avatarUrl,
        nickName: userInfo.nickName,
        authorized: true,
      })
    }
  },
  onStudy:function(){
    wx.navigateTo({
      url: "/pages/about/about",
    })
  },
  aboutWe:function(){
    wx.navigateTo({
      url: '/pages/course/course',
    })
  },
  onPreviewTap:function(event){
    const cid = event.detail.cid
    const type = event.detail.type
    console.log(cid+"sdsadasd"+type)
    wx.navigateTo({
      url: '/pages/classic-detail/classic-detail?cid=' + cid + '&type=' + type

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
    this.getMyFavor()
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