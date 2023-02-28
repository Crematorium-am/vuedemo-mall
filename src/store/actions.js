import { ADD_COUNT, ADD_NEWS, SUB_COUNT } from "./mutation-types"

//actions返回的是Promise对象

export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduce = null
      for (let item of context.state.cartList) {
        if (item.gid == payload.gid) {
          oldProduce = item
        }
      }
      if (oldProduce) {
        context.commit(ADD_COUNT, oldProduce)
        resolve('已在购物车当中')
      } else {
        payload.count = 1
        context.commit(ADD_NEWS, payload)
        resolve('添加购物车成功')
      }
    })
  },

  addCount(context, payload){
    context.commit(ADD_COUNT, payload)
  },
  subCount(context, payload){
    context.commit(SUB_COUNT, payload)
  }
}