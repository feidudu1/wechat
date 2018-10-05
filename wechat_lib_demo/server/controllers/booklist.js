const https = require('https')
const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
  const {page, openid} = ctx.request.query
  const size = 10
  const mysqlSelect = mysql('books')
    .select('books.*', 'cSessionInfo.user_info')
    .join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id')
    .orderBy('books.id', 'desc')
  let book
  if (openid) {
    book = await mysqlSelect.where('books.openid', openid)
  } else {
    book = await mysqlSelect.limit(size).offset(Number(page) * size)
  }
  ctx.state.data = {
    list: book.map(v => {
      const info = JSON.parse(v.user_info)
      return Object.assign({}, v, {
        user_info: {
          nickName: info.nickName
        }
      })
    })
  }
}
