import config from './config'

export function get(url, data) {
  return request(url, 'GET', data)
}
export function post(url, data) {
  return request(url, 'POST', data)
}

export function request(url, method, data) {
  return new Promise((reslove, reject) => {
    wx.request({
      data,
      method,
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          reslove(res.data.data)
        } else {
          showModel('失败', res.data.data.msg)
          reject(res.data)
        }
      }
    })
  })
}

export function showModel (title, content) {
  wx.showModel({
    title,
    content,
    showCancel: false
  })
}

export function showSuccess(text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}
