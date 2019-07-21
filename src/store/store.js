import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityList: [], // 所有的城市列表
    headLocation: '北京' // 首页header的地点
  },
  mutations: {
    addToCityList (state, item) {
      state.cityList.push(item)
    },
    changeLocate (state, locate) {
      state.headLocation = locate
    }
  },
  actions: {

  }
})
