import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Numbers: [ 
      { phone: 11111111111111, id: 1 },
      { phone: 22222222222222, id: 2 },
      { phone: 33333333333333, id: 3 },
      { phone: 44444444444444, id: 4 },
      { phone: 55555555555555, id: 5 },
      { phone: 66666666666666, id: 6 },
      { phone: 77777777777777, id: 7 },
      { phone: 88888888888888, id: 8 },
      { phone: 99999999999999, id: 9 },
      { phone: 101010101010110, id: 10 },
      { phone: 121212121212121, id: 11 },
    ],
    FilteredNumbers: [],
    LinesInPage: 5,
    CurrentPage: 1,
    EditingNumber: null,
    LoadingPhones: null,
  },
  mutations: {
    LOAD_PHONES(state) {
      state.LoadingPhones = null
      const numbers = [...state.Numbers]
      const currentPage = state.CurrentPage
      const linesInPage = state.LinesInPage
      setTimeout(() => {
        state.LoadingPhones = [...numbers.slice((currentPage - 1) * (linesInPage), linesInPage * currentPage)]
        state.FilteredNumbers = [...state.LoadingPhones]
      }, 1000)
    },
    SEARCH(state, searchPhone) {
      const allNumbers = [...state.LoadingPhones]
      const filteredNumbers = allNumbers.filter((item) => item.phone.toString().includes(searchPhone))
      if (searchPhone) {
          state.FilteredNumbers = [...filteredNumbers]
      } else {
          state.FilteredNumbers = [...allNumbers]
      }
    },
    ADD_NUMBER(state, number) {
      if (number) {
        const updatedNumbers = [...state.Numbers]
        const newPhone = { phone: number, id: updatedNumbers.length }
        updatedNumbers.unshift(newPhone)
        state.Numbers = [...updatedNumbers]
        state.CurrentPage = 1
      }
    },
    DELETE_NUMBER(state, id) {
      const numbers = [...state.Numbers]
      const index = numbers.findIndex((item) => item.id === id)
      numbers.splice(index, 1)
      state.Numbers = [...numbers]
    },
    EDIT_NUMBER(state, id) {
      const number = state.Numbers.find((item) => item.id === id)
      state.EditingNumber = {...number}
    },
    CHANGE_NUMBER(state, editingNumber) {
      if (editingNumber.phone) {
        state.EditingNumber = null
        const numbers = [...state.Numbers]
        const index = numbers.findIndex((item) => item.id === editingNumber.id)
        numbers[index].phone = editingNumber.phone
        state.Numbers = [...numbers]
      }
    }, 
    CHANGE_LINES_PER_PAGE(state, lines) {
      state.LinesInPage = lines
      state.CurrentPage = 1
    },
    PAGE_UP(state, pages) {
      let page = state.CurrentPage
      page < pages ? page++ : page = pages
      state.CurrentPage = page
    },
    PAGE_DOWN(state) {
      let page = state.CurrentPage
      page > 1 ? page-- : page = 1
      state.CurrentPage = page
    }
  },
  actions: {
    LOAD_PHONES({ commit }) {
      commit('LOAD_PHONES')
    },
    SEARCH({ commit }, searchPhone) {
      commit('SEARCH', searchPhone)
    },
    ADD_NUMBER({ commit }, number) {
      commit('ADD_NUMBER', number)
    },
    DELETE_NUMBER({ commit }, id) {
      commit('DELETE_NUMBER', id)
    },
    EDIT_NUMBER({ commit }, id) {
      commit('EDIT_NUMBER', id)
    },
    CHANGE_NUMBER({ commit }, editingNumber) {
      commit('CHANGE_NUMBER', editingNumber)
    },
    CHANGE_LINES_PER_PAGE({ commit }, lines) {
      commit('CHANGE_LINES_PER_PAGE', lines)
    },
    PAGE_UP({ commit }, pages) {
      commit('PAGE_UP', pages)
    },
    PAGE_DOWN({ commit }) {
      commit('PAGE_DOWN')
    }
  },
  modules: {

  },
});
