// app.js
App({
  //微信小程序中,在App，Page，Component 都有生命周期
  onLaunch(options){
    console.log('on-launch',options);
    //展示本地存储能力
    // 同步拿结果通过返回值，异步拿结果通过回调函数
    const logs = wx.getStorageSync('test') || []
    console.log(logs);
    // wx.setStorageSync('test', logs)
  },
  onShow(options){
    console.log('on-show',options);
  },
  onHide(){
    console.log('on hide');
  },
  global
})
