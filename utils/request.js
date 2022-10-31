const BASEURL = 'http://localhost:3000/api/'

// 对象参数结构的时候，赋默认值用“=”
function request({
  url,
  method = 'GET',
  data = {},
  header = {},
  tip = '拼命加载中...'
}) {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: tip,
    })
    wx.request({
      url: `${BASEURL}${url}`,
      method,
      header,
      data,
      success(res) {
        //成功之后返回所需的数据
        resolve(res.data);
      },
      fail: err => {
        reject(err)
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}
export {
  request
}