import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'http://localhost:3000'
const productsUrl = `${baseUrl}/products`


export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    currentCategory: 'All',
    currentPage: 1,
    pageSize: 6,
  },
  mutations: {
    setData(state, data) {
      state.products = data
    },
    setCurrentPage(state, page) {
      state.currentPage = page
    },
    setPageSize(state, size) {
      state.pageSize = size,
      state,currentPage = 1
    }
  },
  actions: {
    async getData({commit}) {
      let pdata = await axios.get(productsUrl)
      commit('setData', pdata.data)
    }
  },
  getters: {
    productsTotal: state => state.products.length,
    categories(state) {
      const arr = []
      const r = state.products.filter(i => {
        arr.push(...i.category)
      })
      return arr.slice(0,3)
    },
    processedProducts: state => {
      let index = (state.currentPage-1) * state.pageSize
      console.log(index);
      return state.products.slice(index, index+state.pageSize)
    },
    pageCount: (state, getters) => Math.ceil(getters.productsTotal / state.pageSize)
  }
})
