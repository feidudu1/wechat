const https = require('https')
const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
  const book = await mysql('books')
    .select('books.*', 'cSessionInfo.user_info')
    .join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id')
    .orderBy('books.id', 'desc')
  // .orderBy('id', 'desc')
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
