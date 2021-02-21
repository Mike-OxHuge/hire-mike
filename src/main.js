import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import vuetify from "./plugins/vuetify";
import { store } from "./store/store";
import i18n from "./i18n";
import FlagIcon from "vue-flag-icon";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = "en";
  }
  i18n.locale = language;
  next();
});

Vue.use(FlagIcon);

new Vue({
  Vuex,
  store,
  router,
  vuetify,
  i18n,
  FlagIcon,
  render: (h) => h(App),
}).$mount("#app");
