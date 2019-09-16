import Vue from "vue";
import App from "./App.vue";

// Vendors
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueAnime from "vue-animejs";

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(VueAnime);

new Vue({
  render: h => h(App)
}).$mount("#app");
