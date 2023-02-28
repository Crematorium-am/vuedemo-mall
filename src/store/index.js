import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutation'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },

  getters,
  //mutations的唯一目的是修改state的状态
  //mutations中的方法尽量单一
  mutations,
  actions,
  modules: {
  }
})
