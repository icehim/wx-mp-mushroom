// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers:[], // 轮播图
    courses:[], // 推荐课程
    videos:[] //热门视频
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSwipersData()
    this.getCoursesData()
    this.getVideosData()
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
  },
  async getCoursesData(){
    const {status,message} = await wx.$request({
      url:'home/course'
    })
    if(status === 0) {
      this.setData({
        courses:message
      })
    }
  },
  async getVideosData(){
    const {status,message} = await wx.$request({
      url:'home/video'
    })
    if(status === 0) {
      this.setData({
        videos:message
      })
    }
  },
  // tab切换到课程也买你
  switchToCourse(){
    // switchTab=>不会销毁当前页面栈，只会打开新的页面栈
    wx.switchTab({
      url: '/pages/course/course',
    })
  },
  goToDetail(e){
    // e.target.dataset 代表拿到的是事件触发源那个节点上的自定义属性
    // e.currentTarget.dataset 代表拿到的是事件处理源节点上的自定义属性
    const id = e.currentTarget.dataset.id
    // 编程式跳转
    wx.navigateTo({
      url: '/subpkg/course-detail/course-detail?id='+id,
    })
  },
  getValue(val){
    // console.log('home:',val.detail);
    wx.navigateTo({
      url: '/subpkg/search/search',
    })
  }

})