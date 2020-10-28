import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'http://localhost:3000'
const productsUrl = `${baseUrl}/products`


export default new Vuex.Store({
  state: {
    products: [],
    productsTotal: 0,
    categories: [],
    pageSize: 4,
    currentCategory: 'All'
  },
  mutations: {
    setData(state, data) {
      state.products = data
    }
  },
  actions: {
    async getData({commit}) {
      let pdata = await axios.get(productsUrl)
      commit('setData', pdata.data)
    }
  },
  getters: {
    categories(state) {
      const arr = []
      const r = state.products.filter(i => {
        arr.push(...i.category)
      })
      return arr
    },
    products(state) {
      return state.products
    }
  }
})
