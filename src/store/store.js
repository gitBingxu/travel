import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityList: [], // 所有的城市列表
    headLocation: '北京', // 首页header的地点
    hotCityList: [], // 国内热门城市列表
    hotList: [] // 国外，港澳台热门城市列表
  },
  mutations: {
    addToCityList (state, item) {
      state.cityList.push(item)
    },
    changeLocate (state, locate) {
      state.headLocation = locate
    },
    addTohotCityList (state, arry) {
      state.hotCityList = arry
    },
    toHotList (state, arry) {
      state.hotList = arry
    }
  },
  actions: {

  }
})
