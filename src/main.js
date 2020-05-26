import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)
firebase.initializeApp({
  projectId: 'phonebook-8baf4',
  databaseURL: 'https://phonebook-8baf4.firebaseio.com'
})
export const db = firebase.firestore()


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
