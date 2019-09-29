import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brandDataList: [],
    brandDataDeatil: String
  },
  getters: {
    getBrandData: state => state.brandDataList,
    getBrandDataByID: state => state.brandDataDeatil
  },
  mutations: {
    getBrandData (state, payload) {
      state.brandDataList = payload
    },
    getBrandDataByID (state, payload) {
      state.brandDataDeatil = payload
    }
  },
  actions: {
    getBrandData: async ({ commit }) => {
      let { data } = await axios.get(process.env.VUE_APP_DATA)
      commit('getBrandData', data)
    },
    getBrandDataByID: async ({ commit }, entityID) => {
      let { data } = await axios.get(process.env.VUE_APP_DATA + '/' + entityID)
      commit('getBrandDataByID', data)
    }
  }
})
