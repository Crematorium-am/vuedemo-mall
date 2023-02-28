import { request } from "./request"

export function getDetail(goods_id){
  return new request({
    url: '/goods/detail',
    params: {
      goods_id
    }
  })
}

//当请求到的是一个庞大的数据，但组件使用的数据只是其中的几个，可以通过定义一个类来对数据先进行筛选再传进组件
//这里只是进行一个模拟
export class BaseInfo{
  constructor(msg){
    this.name = msg.goods_name,
    this.price = msg.goods_price
  }
}