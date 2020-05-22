import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from "../views/Main"
import StopListContainer from "../views/StopListContainer"
import AddNumber from "../views/AddNumber"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/Stop-list",
    name: "Stop-list",
    component: StopListContainer
  },
  {
    path: "/AddNumber",
    name: "AddNumber",
    component: AddNumber
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;