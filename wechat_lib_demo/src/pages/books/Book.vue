<template>
  <div>
    <Card v-for="book in books" :key="book.id" :book="book" />
    <p class="text-footer" v-if="!more">没有更多数据</p>
  </div>
</template>

<script>
import {get} from '@/util'
import Card from '@/components/Card'
export default {
  data () {
    return {
      books: [],
      page: 0,
      more: true
    }
  },

  components: {
    Card
  },

  methods: {
    async getList (init) {
      wx.showNavigationBarLoading()
      if (init) {
        this.page = 0
        this.more = true
      }
      const book = await get('/weapp/booklist', {page: this.page})
      if (book.list && book.list.length < 10 && this.page > 0) {
        this.more = false
      }
      if (init) {
        this.books = book.list
      } else {
        this.books = this.books.concat(book.list)
      }
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }
  },
  onPullDownRefresh () {
    this.getList(true)
  },
  onReachBottom () {
    if (!this.more) {
      return
    }
    this.page = this.page + 1
    this.getList()
  },
  mounted () {
    this.getList(true)
  },

}
</script>

<style scoped>

</style>
