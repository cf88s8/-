// pages/classic/classic.js
import{ClassicModel} from '../../models/classic.js';
import{LikeModel} from '/../..//models/like.js';
let classicModel=new ClassicModel(); 
let likeModel=new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:1,
    classic:null,
    first:false,
    latest:true,
    likeCount:0,
    likeStatus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res)=>{
      // console.log(res)
      this.setData({
        classic:res,
        likeCount:res.fav_nums,
        likeStatus:res.like_status
      })
      //storage
      // latestClassic  latestIndex  currentClassic currentIndex
    })

  },
  
  onLike: function (event) {
    // console.log(event)
   let bhlike=event.detail.bhlike;
   likeModel.like(bhlike,this.data.classic.id,this.data.classic.type)

  },
  OnNext:function(){
   this._updateClassic("next")
  },
  OnPrevious: function () {
    this._updateClassic("previous")
  },

  _updateClassic:function(nextOrPrevious){
    let index = this.data.classic.index
    classicModel.getClassic(index, nextOrPrevious, (res) => {
      this._getLikeStatus(res.id,res.type)
      // console.log(res)
      this.setData({
        classic: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  },
  _getLikeStatus:function(artID,category){
    likeModel.getClassicLikeStatus(artID,category,(res)=>{
      this.setData({
        likeCount: res.fav_nums,
        likeStatus:res.like_status
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


    // console.log(this.data.test);
    // let that=this;
    //   wx.request({
    //     url: 'http://bl.7yue.pro/v1/classic/latest',
    //     header: {
    //       // appkey: 'AbhC31IG7ruCDp57'
    //     },
    //      success:(res)=>{
    //      console.log(this.data.test);
    //   }
    //   })