import {
  HTTP
} from '../util/http.js'
class LikeModel extends HTTP {
  like(bhlike, artID, category) {
    let url = bhlike == 'like' ? 'like' : 'like/cancel'
    this.request({
      url: url,
      method: "POST",
      data: {
        art_id: artID,
        type: category
      }

    })
  }
  getClassicLikeStatus(artID,category,sCallback){
    this.request({
      url:'classic/'+category+'/'+artID,
      success:sCallback
    })
  }
}
export {
  LikeModel
}