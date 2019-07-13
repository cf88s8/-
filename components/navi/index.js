// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    first: Boolean,
    latest: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
    disleftUrl:'images/triangle.dis@left.png',
    disrightUrl:"images/triangle.dis@right.png",
    leftUrl:"images/triangle@left.png",
    rightUrl:"images/triangle@right.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    OnLeft:function(event){
      if(!this.properties.latest){
      this.triggerEvent('left', {}, {})
      }

    },
    OnRight:function(event){
      if(!this.properties.first){
      this.triggerEvent('right',{},{})
      }
    }
  }
})
