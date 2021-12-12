import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    WeatherLists:[],
    LastLists:[],
  },
  mutations: {
    setWeatherList(state,value){
      state.WeatherLists = value
      state.LastLists = value.yesterday
    },
  },
  actions: {
    async getweather(content,WeatherCity){
      let result = await api.getWeather(WeatherCity)
      content.commit('setWeatherList',result.data.data)
    },
  },
  modules: {
  }
})
