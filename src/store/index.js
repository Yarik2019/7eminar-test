import { createStore } from "vuex";
import ContextDataServices from "@/api/services/ContextDataServices";
export default createStore({
  state: {
    menuBurger: false,
    contents: [],
    page: 1,
  },
  mutations: {
    menuBurgerActive(state) {
      state.menuBurger = !state.menuBurger;
    },
    updateContent(state, content) {
      state.contents = content;
    },
  },
  actions: {
    getContent(ctx) {
      ContextDataServices.getData().then((response) => {
        console.log(response.data);
        ctx.commit("updateContent", response.data);
      });
    },
  },

  getters: {
    allContent(state) {
      return state.contents;
    },
    allContentLength(state) {
      return state.contents.length;
    },
  },
});
