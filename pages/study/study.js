// pages/study/study.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    progresses:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getProgressData()
  },
  async getProgressData(){
    const {status,message} = await wx.$request({
      url:'study/progress'
    })
    if(status===0){
      this.setData({
        progresses:message
      })
    }
  }
})