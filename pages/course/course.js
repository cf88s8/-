// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShareAppMessage: function() {

  },
  onLoad: function (options){

    let rpx = 1;

    wx.getSystemInfo({
      success(res) {
        rpx = res.windowWidth / 375;
      },
    })
    // wx.getSystemInfo({
    //   //获取系统信息成功，将系统窗口的宽高赋给页面的宽高  
    //   success: function (res) {
    //     that.width = res.windowWidth
    //     that.height = res.windowHeight
    //     that.radius = 105 / 602 * that.height
    //     console.log(that.width)
    //   }
    // })
                // wx.getSystemInfo({

                //   　　success: function (res) {

                //     　　console.log(res.model)

                //     　　console.log(res.pixelRatio)

                //     　　console.log(res.windowWidth)

                //     　　console.log(res.windowHeight)

                //     　　console.log(res.language)

                //     　　console.log(res.version)

                //     　　console.log(res.platform)

                //   　　}

                // 　　})
    const ctx = wx.createCanvasContext('miCanvas')
    // //1、先绘制一个完整的白色实体圆
    // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    // ctx.setFillStyle('#FFFFFF');
    // ctx.fill();
    // ctx.beginPath();
    // //arc(x,y,r,sAngle,eAngle,counterclockwise);
    // //x  圆的中心的 x 坐标。
    // //y  圆的中心的 y 坐标。
    // //r  圆的半径。
    // //sAngle  起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。
    // //eAngle  结束角，以弧度计。
    // //counterclockwise  可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。
    // ctx.arc(100, 75, 50, Math.PI * 1.5, Math.PI * 0.5, false);
    // ctx.setFillStyle('#000000')
    // ctx.fill();
    // //3、绘制一黑一白两个半圆
    // ctx.fillStyle = "white";
    // ctx.beginPath();
    // ctx.arc(100, 50, 25, 0, Math.PI * 2);
    // ctx.fill();
    // ctx.fillStyle = "black";
    // ctx.beginPath();
    // ctx.arc(100, 100, 25, 0, Math.PI * 2);
    // ctx.fill();
    // //4、绘制两个小圆
    // ctx.fillStyle = "black";
    // ctx.beginPath();
    // ctx.arc(100, 50, 10, 0, Math.PI * 2);
    // ctx.fill();
    // ctx.fillStyle = "white";
    // ctx.beginPath();
    // ctx.arc(100, 100, 10, 0, Math.PI * 2);
    // ctx.fill();
    // 设置文字
    // ctx.fillStyle = "black";
    // ctx.font = "20px Arial";
    // ctx.fillText("离", 90, 20);
    // ctx.fillText("坎", 90, 150);
    // ctx.fillText("震", 25, 85);
    // ctx.fillText("兑", 155, 85);
    // ctx.draw();



    ctx.beginPath();
    ctx.arc(200, 100, 100 , -0.5 * Math.PI, 0.5 * Math.PI, false);
    ctx.arc(200, 300, 100, 1.5 * Math.PI, 0.5 * Math.PI, true);
    ctx.arc(200, 200, 200, 0.5 * Math.PI, 1.5 * Math.PI, false);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(200, 100, 25, 0 * Math.PI, 2 * Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(200, 300, 25, 0 * Math.PI, 2 * Math.PI, false);
    ctx.fillStyle = "black";
    ctx.fill();



    ctx.draw();

    //  代码来源于       https://code.w3ctech.com/detail/2500
    //  代码来源于       http://idodo.xin/archives/1621.html
    
  },
  onShow: function () {

  },

})