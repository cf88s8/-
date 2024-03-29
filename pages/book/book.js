// pages/book/book.js
import {
  BookModel
}from '../../models/book.js'

import{random}from '../../util/commen.js'

const bookModel=new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[],
    searching:false,
    more:'',
    like:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const hotList=bookModel.getHostList()
    hotList.then(
      res=>this.setData({
        books:res
      })
    )
    //可以直接简写成这样
    //bookModel.getHostList()
    //.then(
    //   res => this.setData({
    //     books: res
    //   })
    // )
  },
  onSearch(event){
    this.setData({
      searching:true
    })
  },
  onCancel(event){
    this.setData({
      searching: false
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
    this.setData({
      more:random(15)
      // random  是一个函数(随机字符串生成函数)--定义在头部。
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})