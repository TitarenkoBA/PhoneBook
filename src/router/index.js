import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from "../views/Main"
import StopListContainer from "../views/StopListContainer"
import AddNumber from "../views/AddNumber"
import EditNumber from "../views/EditNumber"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Главная",
    component: Main
  },
  {
    path: "/Stop-list",
    name: "Стоп-лист",
    component: StopListContainer
  },
  {
    path: "/AddNumber",
    name: "Добавить номер",
    component: AddNumber
  },
  {
    path: "/EditNumber",
    name: "Редактировать номер",
    component: EditNumber
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;