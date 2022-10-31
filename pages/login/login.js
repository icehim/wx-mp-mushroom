import { request } from "../../utils/request";

// pages/login/login.js
Page({
  async wxLogin() {
    // 1.获取微信授权登录所需要的三个参数
    // 下面的写法容易形成回调地狱，所以采用async await写法
    // 只要调用了该方法就会弹出请求授权登录的界面
    // wx.getUserProfile({
    //   desc: '为了更好的为您服务~',
    //   success: res => {
    //     console.log(res);
    //     // 获取另外一个参数
    //     wx.login({
    //       success: res2 =>{
    //         console.log(res2);
    //         //发请求
    //         wx.request({
    //           url: 'url',
    //         })
    //       }
    //     })
    //   },
    //   fail: err => {
    //     console.log(err);
    //   }
    // })

    // 1.获取三个参数
    const res = await wx.getUserProfile({
      desc: '为了更好的为您服务~',
    }).catch(e => console.log('error:', e))
    if(!res) return
    // 获取nickname和avatar
    const {nickName:nickname,avatarUrl:avatar} = res.userInfo
    console.log(nickname,avatar);

    // 获取code
    const {code} = await wx.login({})
    console.log(code);
    // 2.发请求(调用后台接口),实现微信登录
    const res2 = await request({
      url: 'user/wxlogin',
      method:'POST',
      data:{
        nickname,
        avatar,
        code
      },
      tip:'微信登录中···'
    })
    console.log(res2);
  }
})