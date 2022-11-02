// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getuserInfoData()
  },

  
  async getuserInfoData(){
    const {status,message} = await wx.$request({
      url:'my/info'
    })
    if(status === 0){
      this.setData({
        userInfo:message
      })
    }
  },
  contact(){
    wx.makePhoneCall({
      phoneNumber: '404',
    })
  }
})