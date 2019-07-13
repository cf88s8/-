import {
  HTTP
} from '../util/http-p.js'

class BookModel extends HTTP{
  getHostList(){
  return this.request('book/hot_list')
  }

  search(start,q){
    return this.request('/book/search',{
      start: start,
      q: q
    },)
  }

  getMyBookCount() {
    return this.request('/book/favor/count')
  }

  getDetail(bid){
    return this.request(`book/${bid}/detail`)
  }
  
  getLikeStatus(bid){
    return this.request(`/book/${bid}/favor`)
  }

  getComments(bid){
    return this.request(`book/${bid}/short_comment`)
  }


  postCommnet(bid,comment){
    return this.request('book/add/short_comment',{
        book_id:bid,
        content:comment
    }, "POST"
    )
  }


}



export{BookModel}