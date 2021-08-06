import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityCode: localStorage.getItem("cityCode") || "",
    cityList: [],
  },
  getters: {
    cityName: (state) => {
      let cityName = state.cityList.filter((item) => {
        return item.code === state.cityCode
      })
      return cityName[0].name || ""
    },
  },
  mutations: {
    setCityCode(state, code) {
      state.cityCode = code
      localStorage.setItem("cityCode", code)
    },
    setCityList(state, cityList) {
      state.cityList = cityList
    },
  },
  actions: {},
  modules: {},
})
