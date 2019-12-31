import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import list from "./modules/list";


Vue.use(Vuex)

export default new Vuex.Store({
  mutations,    //总的mutations,内部看到的是总的state
  actions,   //总的actions,内部看到的是总的state
  getters,
  modules:{
    list,

  }
})


/* 
总的state
{
  msite:{},
  user:{},
  shop:{}
}
*/