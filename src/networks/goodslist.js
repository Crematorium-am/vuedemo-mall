import { request } from "./request"

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

