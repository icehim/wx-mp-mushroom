// pages/study/study.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    progresses: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getProgressData()
  },
  async getProgressData() {
    const {
      status,
      message
    } = await wx.$request({
      url: 'study/progress'
    })
    if (status === 0) {
      // 遍历数组，给遍历出来的每一个对象，设置相应的color
      message.forEach(item => {
          if (item.study_progress <= 30) {
            item.color = '#ff0000'
          } else if (item.study_progress > 30 && item.study_progress <= 80) {
            item.color = '#ff9b2d'
          } else {
            item.color = '#b4d66e'
          }
        }),
        this.setData({
          progresses: message
        })
    }
  }
})