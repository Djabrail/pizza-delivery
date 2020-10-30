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
    currentCategory: 'Все',
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
    },
    setCurrentCategory(state, category) {
      state.currentCategory = category
      console.log(category);
      state.currentPage = 1
    }
  },
  actions: {
    async getData({commit}) {
      let pdata = await axios.get(productsUrl)
      commit('setData', pdata.data)
    }
  },
  getters: {
    productsFilteredByCategory: state => state.products.filter(p => state.currentCategory == 'Все' || p.category == state.currentCategory),
    processedProducts: (state, getters) => {
      let index = (state.currentPage-1) * state.pageSize
      
      return getters.productsFilteredByCategory.slice(index, index + state.pageSize)
    },
    pageCount: (state, getters) => Math.ceil(getters.productsFilteredByCategory.length / state.pageSize),
    productsTotal: state => state.products.length,
    categories: state => ['Все', ...new Set(state.products.map(p => p.category).sort())]
  }
})
