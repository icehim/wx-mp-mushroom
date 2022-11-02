// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getCoursesData()
  },
  async getCoursesData(){
    const {status,message} = await wx.$request({
      url:'course/list'
    })
    if(status === 0){
      this.setData({
        courses:message
      })
    }
  }
})