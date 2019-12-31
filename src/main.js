import Vue from 'vue'
import "lib-flexible/flexible"
import router from "./router";
import store from "./vuex/store";
import App from './App.vue'
import ProdectList from "./components/ProdectList/ProdectList.vue";


Vue.config.productionTip = false
Vue.component('ProdectList', ProdectList)
new Vue({
  render: h => h(App),
  router, //所有组件都能看到$router和$route
  store
}).$mount('#app')
