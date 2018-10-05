<template>
  <div class="">
    <CommentList :comments="comments" type="user" v-if="userinfo.openId"/>
    <div class="" v-if="userinfo.openId">
      <div class="page-title">
        我的图书
      </div>
      <Card v-for="book in books" :key="book.id" :book="book" />
      <div class="" v-if="!books.length">
        暂时还没有添加过图书，快去添加吧！
      </div>
    </div>
  </div>
</template>

<script>
import {get} from '@/util'
import CommentList from '@/components/CommentList'
import Card from '@/components/Card'
export default {
  data () {
    return {
      comments: [],
      userinfo: {},
      books: []
    }
  },
  components: {
    CommentList,
    Card
  },
  methods: {
    init () {
      wx.showNavigationBarLoading()
      this.getComments()
      this.getBooks()
      wx.hideNavigationBarLoading()
    },
    async getComments () {
      const comments = await get('/weapp/commentlist', {openid: this.userinfo.openId})
      this.comments = comments.list
    },
    async getBooks () {
      const books = await get('/weapp/booklist', {
        openid: this.userinfo.openId
      })
      this.books = books.list
    }
  },
  onPullDownRefresh () {
    this.init()
    wx.stopPullDownRefresh()
  },
  onShow () {
    if (!this.userinfo.openId) {
      let userinfo = wx.getStorageSync('userinfo')
      if (userinfo) {
        this.userinfo = userinfo
        this.init()
      }
    }
  }
}
</script>

<style scoped>
  .page-title {
    font-size: 18px;
    font-weight: bold;
    color: #EA5149;
    background: #fff;
    padding: 20px 12px 10px;
  }
</style>
