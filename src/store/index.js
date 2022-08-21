import { createStore } from "vuex";

export default createStore({
  state: {
    menuBurger: false,
  },
  getters: {},
  mutations: {
    menuBurgerActive(state) {
      state.menuBurger = !state.menuBurger;
    },
  },
  actions: {},
  modules: {},
});
