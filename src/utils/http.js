import Vue from 'vue'
import axios from 'axios'
let instance = axios.create({
    //服务器的路径
  baseURL: 'http://localhost:9999',
  headers: {
      'plantform': 'PC'
    }
});


// 请求拦截
instance.interceptors.request.use(function (config) {
  
  //成功 每次请求的时候带上token字段
   config.headers.token=localStorage.getItem('token')||''
    return config;
  }, function (error) {
   //失败
    return Promise.reject(error);
});
 

// 响应拦截
instance.interceptors.response.use(function (response) {
  //响应成功
  if(response.status===200){
         return response.data
  }else{
      return Promise.reject({
          status:response.data
      })
  }
    return response;
  }, function (error) {
    // 响应失败
    return Promise.reject(error);
});

Object.defineProperty(Vue.prototype,'$http',{
    value:instance
})
export default instance

//封装的登录对应接口返回的数据
const login=(nameInput,keyInput)=>{
  return new Promise((resolve,reject)=>{
      instance.post('/dsp-admin.user/login',{
          nameInput,keyInput
      }).then((res)=>{
          
          resolve(res)
      })
  })
}
export {
    login
}