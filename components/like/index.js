// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,
      value: false,
      observer: function() {
      }
    },
    count: {
      type: Number,
    },
    readOnly: { 
      type: Boolean
    } 
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: 'image/icon@2x.png',
    noSrc: 'image/like@dis.png'

  },

  /**
   * 组件的方法列表
   */

  methods: {

    onLike: function(event) {
      if (this.properties.readOnly){
        return 
      }
      let like = this.properties.like
      let count = this.properties.count
      // console.log(like)
      count = like ? count - 1 : count + 1

      this.setData({
        count: count,
        like: !like
      })
      let bhlike = this.properties.like ? 'like' : 'cancel'
      this.triggerEvent('myevent', {
        bhlike: bhlike
      }, {})


    }
  }
})