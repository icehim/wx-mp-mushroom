// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSwipersData()
  },
  async getSwipersData(){
    const {status,message} = await wx.$request({
      url:'home/swipers'
    })
    if(status === 0) {
      this.setData({
        swipers:message
      })
    }
  }
})