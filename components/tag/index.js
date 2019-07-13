// components/tag/index.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots:true
  },


  // externalClasses: ['tag-class'],



  properties: {
    text: String,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached:function(){
    // console.log(this.properties.text)
  }
,
  /**
   * 组件的方法列表
   */
  
  methods: {
    onTap:function(event){
      this.triggerEvent('onPost', {
        text:this.properties.text
        })
    }
 

  }
})
