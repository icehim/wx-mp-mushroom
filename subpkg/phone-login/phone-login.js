// subpkg/phone-login/phone-login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '17704051019',
    vcode: '',
    time: 10, //倒计时总秒数
    tip: '获取验证码', //显示文本
    isCountDown: false, //是否正在倒计时(决定显示我文字的颜色,判断是否禁用)
    timer: -1 //定时器
  },
  // changePhone(e){
  //   this.setData({
  //     phone:e.detail.value
  //   })
  // },
  // changeVcode(e){
  //   this.setData({
  //     vcode:e.detail.value
  //   })
  // },
  changeValue(e) {
    this.setData({
      //属性名表达式
      [e.target.dataset.name]: e.detail.value
    })
  },
  //获取验证码
  async getVcode() {
    const {
      phone
    } = this.data
    // 1.正则校验
    const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
    if (!reg.test(phone)) {
      wx.showToast({
        title: '手机号不合法',
        icon: 'error'
      })
      return
    }
    // 2.倒计时
    // 2.1  先定义我们所需的模型
    // 2.2  在wxml中把模型的值进行渲染
    // 2.3  在js代码中实现倒计时功能

    // 判断:如果正在倒计时则return
    if (this.data.isCountDown) return

    this.setData({
      tip: this.data.time,
      isCountDown: true
    })

    // 开启定时器进行倒计时
    this.data.timer = setInterval(() => {
      // 判断越界的情况
      if (this.data.time <= 1) {
        // 倒计时结束，重置工作
        clearInterval(this.data.timer)
        this.data.time = 10
        this.setData({
          tip: '获取验证码',
          isCountDown: false
        })
        return
      }
      //正常的--
      this.data.time--
      this.setData({
        tip: this.data.time
      })
    }, 1000);

    // 3.发请求,获取校验码
    const {
      status,
      vcode
    } = await wx.$request({
      url: 'user/vcode',
      data: {
        phone
      }
    })
    if (status === 0) {
      this.setData({
        vcode
      })
    }
  },
  // 手机号登录
  async phoneLogin() {
    const {
      phone,
      vcode
    } = this.data
    if (`${phone}`.trim().length === 0) {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none'
      })
      return
    }
    if (`${vcode}`.trim().length === 0) {
      wx.showToast({
        title: '验证码不能为空',
        icon: 'none'
      })
      return
    }

    const {
      status,
      message,
      token
    } = await wx.$request({
      url: 'user/login',
      method: 'POST',
      data: {
        phone,
        vcode
      }
    })
    if (status === 0) {
      // 保存token
      wx.setStorageSync('token', token)
      // 提示，并且提示完毕之后，跳转到首页
      wx.showToast({
        title: message,
        duration: 1000, //持续时间
        success: () => {
          setTimeout(() => {
            wx.reLaunch({
              url: '/pages/home/home',
            })
          },1000)
        }
      })
    } else {
      wx.showToast({
        title: message,
        icon: 'error'
      })
    }
  },
  onUnload(){
    // 页面销毁清除定时器
    clearInterval(this.data.timer)
  }
})