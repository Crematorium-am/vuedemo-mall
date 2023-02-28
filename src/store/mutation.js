import { ADD_COUNT, ADD_NEWS, SUB_COUNT } from "./mutation-types"

export default {
  [SUB_COUNT](state, payload){
    payload.count -= 1
  },
  [ADD_COUNT](state, payload){
    payload.count += 1
  },
  [ADD_NEWS](state, payload){
    payload.isChecked = true
    state.cartList.push(payload)
  },


  cartChecked(state, payload){
    state.cartList.forEach(item => {
      if(item.gid === payload.gid){
        item.isChecked = !payload.isChecked
      }
    });
  },
  cartCheckedAll(state, payload){
    state.cartList.forEach(item => {
      item.isChecked = payload
    })
  }
}