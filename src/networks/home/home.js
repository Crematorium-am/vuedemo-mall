import { request } from "../request";

export function getswiperdata(){
  return request({
    url: '/home/swiperdata'
  })
}

export function getcatitems(){
  return request({
    url: '/home/catitems'
  })
}