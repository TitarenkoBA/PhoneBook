import Vue from 'vue'
import Vuex from 'vuex'
// import { db } from '../main'
import PhoneNumbers from './numbers'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Numbers: [],
    FilteredNumbers: [],
    LinesInPage: 5,
    CurrentPage: 1,
    EditingNumber: null,
    LoadingPhones: null,
  },
  mutations: {
    GET_NUMBERS(state, numbers) {
      state.Numbers = [...numbers]
    },
    LOAD_PHONES(state) {
      state.LoadingPhones = null
      const currentPage = state.CurrentPage
      const linesInPage = state.LinesInPage
      const numbers = [...state.Numbers]
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
        const newPhone = { phone: +number, id: +(number.toString() + Math.floor(Math.random()*1000)) }
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
    GET_NUMBERS({ commit }) {
      commit('GET_NUMBERS', PhoneNumbers)
    },
    LOAD_PHONES({ commit }) {
      // const numbers = []
      // db.collection('Numbers').get()
      //   .then(
      //     data => {
      //       data.forEach((i) => numbers.push({ id: i.get('id'), phone: i.get('phone') }))
      //       state.LoadingPhones = [...numbers.slice((currentPage - 1) * (linesInPage), linesInPage * currentPage)]
      //       state.FilteredNumbers = [...state.LoadingPhones]
      //   })  
      commit('LOAD_PHONES')
    },
    SEARCH({ commit }, searchPhone) {
      commit('SEARCH', searchPhone)
    },
    ADD_NUMBER({ commit }, number) {
      // if (number) {
      //   const newPhone = { phone: +number, id: +(number.toString() + Math.floor(Math.random() * 1000)) }
      // }
      // db.collection('Numbers').add(newPhone)
      commit('ADD_NUMBER', number)
    },
    DELETE_NUMBER({ commit }, id) {
      // db.collection('Numbers').doc(id).delete()
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
