import { login } from '@/utils/http.js'
const actions ={
  saveToken({commit},payload){    
          login(payload.name,payload.pass).then((res) => {  
                console.log(res)
                if(res.success===1){
                     localStorage.setItem('token',JSON.stringify(res.token))
                     localStorage.setItem('userName',JSON.stringify(res.user.name))                 
                     commit('changeUsername',res.user.name)
                     payload.router.push('/index/home')
                }
        })
  },

  saveName({commit},payload){
      commit('changeUsername',payload.userName)
  }
}
export default actions