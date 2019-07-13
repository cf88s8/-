  // components/classic/music/index.js
  import {
    classicBeh
  } from '../../classic-beh.js'

  const backgroundAudioManager = wx.getBackgroundAudioManager()

  Component({
    /**
     * 组件的属性列表
     */
    behaviors: [classicBeh],
    properties: {
      src: String,
      title: String
    },

    /**
     * 组件的初始数据
     */
    data: {
      playing: false,
      pauseSrc: 'images/player@waitting.png',
      playSrc: 'images/player@playing.png'
    },
    attached: function(event) {
      this._recoverStatus()
      this._monitorSwitch()
    },
    /**
     * 组件的方法列表
     */
    methods: {
      onPlay: function(event) {
        if (!this.data.playing) {
          this.setData({
            playing: true
          })
          backgroundAudioManager.title = this.properties.title
          backgroundAudioManager.src = this.properties.src
          console.log(backgroundAudioManager.src)
          console.log(this.properties.src)
          console.log(this.properties.title)
        } else {
          this.setData({
            playing: false
          })
          backgroundAudioManager.pause()
        }
      },
      _recoverStatus: function() {
        if (backgroundAudioManager.paused) {
          this.setData({
            playing: false
          })
          return
        }
        if (backgroundAudioManager.src == this.properties.src) {
          this.setData({
            playing: true
          })
        }
      },
      _monitorSwitch: function() {
        backgroundAudioManager.onPlay(() => {
          this._recoverStatus()
        })
        backgroundAudioManager.onPause(() => {
          this._recoverStatus()
        })
        backgroundAudioManager.onStop(() => {
          this._recoverStatus()
        })
        backgroundAudioManager.onEnded(() => {
          this._recoverStatus()
        })
      }
    }
  })