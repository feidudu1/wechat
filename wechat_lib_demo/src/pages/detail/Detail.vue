<template>
  <div class="detail">
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
      <button class="btn" @click="addComment">评论</button>
    </div>

  </div>
</template>

<script>
import {get, post, showModel} from '@/util'
import BookInfo from '@/components/BookInfo'
import {BMapWX as bmap} from '@/libs/bmap-wx.js'
export default {
  data () {
    return {
      userinfo: {},
      bookid: '',
      info: {},
      comment: '',
      phone: '',
      location: ''
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
    getGeo (e) {
      const ak = '9q9lOKpbhLBzVII2YXk3kEGnppvL1IHu'
      let BMap = new bmap({
        ak: ak
      })
      let that = this
      if (e.target.value) {
        wx.getLocation({
          success: geo => {
            BMap.regeocoding({
              fail: data => {
                this.location = '未知地点'
              },
              success: res => {
                that.location = res.wxMarkerData && res.wxMarkerData[0] && res.wxMarkerData[0].address || '未知地点'
              }
            })
          }
        })
      } else {
        this.location = ''
      }
    },
    getPhone (e) {
      if (e.target.value) {
        const phoneInfo = wx.getSystemInfoSync()
        this.phone = phoneInfo.model
      } else {
        this.phone = ''
      }
    },
    async addComment () {
      // 评论内容 手机型号 地理位置 图书id 用户open_id
      let {comment, phone, location, userinfo} = this
      if (!comment) {
        return
      }
      const data = {
        openid: userinfo.openId,
        bookid: this.bookid,
        comment: comment,
        phone: phone,
        location: location
      }
      try {
        await post('/weapp/addcomment', data)
        this.comment = ''
      } catch (e) {
        showModel('失败', e)
      }
    }
  },

  mounted () {
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
    const userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userinfo = userinfo
    }
  }
}
</script>

<style scoped lang="scss">
  .comment{
    margin-top:10px;
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
