import Vue from 'vue' 
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

//创建store
const store=new Vuex.Store({
     state:{
          token:'',
          userName:"请登录"
      },
     mutations,  
     actions,
     getters:{
       
       
     }
      
})
export default store