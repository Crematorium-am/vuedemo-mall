import {request} from './request'

export function getcategories(){
  return new request({
    url: '/categories'
  })
}
