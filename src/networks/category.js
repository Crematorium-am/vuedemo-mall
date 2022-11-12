import {request} from './request'

export function getcategories(){
  return new request({
    url: '/categories'
  })
}

export function getGoodsList(cid, pagenum, pagesize){
  return new request({
    url: '/goods/search',
    params: {
      cid, 
      pagenum,
      pagesize
    }
  })
}