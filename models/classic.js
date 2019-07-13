import {
  HTTP
} from '../util/http.js'
class ClassicModel extends HTTP {
  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
        this._setlatestIndex(res.index)
        let key=this._getKey(res.index)
        wx.setStorageSync(key,res)
      }
    })
  }

getClassic(index,nextOrPrevious,sCallback){
  //缓存中寻找or API 写入到缓存中
  // key 确定key
  let key= nextOrPrevious=='next'?this._getKey(index+1):this._getKey(index-1)
  let classic=wx.getStorageSync(key)
  if (!classic) {
    this.request({
      url: `classic/${index}/${nextOrPrevious}`,
      success: (res) => {
        wx.setStorageSync(key,res)
        sCallback(res)
      }
    })
    }else{
      sCallback(classic)
    }
 
}
  getMyfavor(success){
    const params ={
      url:'classic/favor',
      success:success
    }
    this.request(params)
  }


  isFirst(index){
    return index==1?true:false
  }
  isLatest(index){
    let latestIndex=this._getlatestIndex()
    return latestIndex==index?true:false 
  }
  _setlatestIndex(index){
    wx.setStorageSync("latest", index)
  }
  _getlatestIndex(){
   let index= wx.getStorageSync("latest")
   return index
  }
  _getKey(index){
    let key='classic-'+index
    return key
  }

  getById(cid, type, success) {
    let params = {
      url: 'classic/' + type + '/' + cid,
      success: success
    }
    this.request(params)
  }

  getPrevious(index, sCallback) {
    this._getClassic(index, 'previous', sCallback)
  }

  getNext(index, sCallback) {
    this._getClassic(index, 'next', sCallback)
  }

}



export {
  ClassicModel
}