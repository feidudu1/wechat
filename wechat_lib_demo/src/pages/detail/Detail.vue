<template>
  <div class="">
    <BookInfo :info="info"></BookInfo>
    <div class="comment">
      <textarea v-model="comment" class="textarea" maxlength="100" placeholder="请输入图书短评"></textarea>
      <div class="location">
        地理位置：
        <switch color="#EA5A49" @change="getGeo" :checked="location"></switch>
        <span class="text-primary">{{location}}</span>
      </div>
      <div class="phone">
        手机型号：
        <switch color="#EA5A49" @change="getPhone" :checked="phone"></switch>
        <span class="text-primary">{{phone}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import {get} from '@/util'
import BookInfo from '@/components/BookInfo'
export default {
  data () {
    return {
      bookid: '',
      info: {},
      comment: '',
      phone: ''
    }
  },

  components: {
    BookInfo
  },

  methods: {
    async getDetail () {
      const info = await get('/weapp/bookdetail', {id: this.bookid})
      wx.setNavigationBarTitle({
        title: info.title
      })
      this.info = info
    },
    getGeo () {

    },
    getPhone (e) {
      if (e.target.value) {
        const phoneInfo = wx.getSystemInfoSync()
        this.phone = phoneInfo.model
      } else {
        this.phone = ''
      }
    },
  },

  mounted () {
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
  }
}
</script>

<style scoped lang="scss">
  .comment{
    margin-top:10px;
    margin-bottom: 20px;
    .textarea{
      width:730rpx;
      height:200rpx;
      background:#eee;
      padding:10rpx;
    }
    .location{
      margin-top:10px;
      padding:5px 10px;
    }
    .phone{
      margin-top:10px;
      padding:5px 10px;
    }
  }
</style>
