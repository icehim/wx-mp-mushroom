// index.js
Page({
  goToOther(){
    wx.navigateTo({
      //不要加任何后缀
      url: '/pages/other/other',
    })
  }
})
