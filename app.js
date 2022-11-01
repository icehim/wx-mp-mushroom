// app.js
//引入request.js 实现wx.$request 的挂载
import './utils/request'

App({
  //微信小程序中,在App，Page，Component 都有生命周期
  onLaunch(options){
    // 在这个钩子中，先获取token，如果有则跳转到首页
    const token = wx.getStorageSync('token')
    if(token) {
      wx.reLaunch({
        url: '/pages/home/home',
      })
    }
  },
  onShow(options){
  },
  onHide(){
  },
  global
})
