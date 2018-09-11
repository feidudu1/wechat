const https = require('https')
const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
  const book = await mysql('books').select('*').orderBy('id', 'desc')
  ctx.state.data = {
    list: book
  }
}
