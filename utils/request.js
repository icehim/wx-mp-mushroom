const BASEURL = 'http://localhost:3000/api/'

const request = ({
    url,
    method = 'GET',
    data = {},
    header = {},
    tip = '拼命加载中...'
}) => {
    return new Promise((resolve, reject) => {
        wx.showLoading({
            title: tip
        })

        wx.request({
            url: `${BASEURL}${url}`,
            method,
            data,
            header,
            success: res => {
                resolve(res.data)
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


wx.$request = request
export default request