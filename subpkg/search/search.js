// subpkg/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses:[]//搜索到的课程列表
  },
  /**
   * 生命周期函数--监听页面加载
   */

  async onSearch(e) {
    if(e.detail.trim().length === 0) return
    const {status,message} = await wx.$request({
      url:'course/search',
      data:{
        name:e.detail
      }
    })
    if(status===0){
      this.setData({
        courses:message
      })
    }
  },

  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})