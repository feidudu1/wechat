<template>
  <div class="container">
    <div class="userinfo" @click="login">
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.nickName}}</p>
    </div>
    <YearProgress/>
    <button v-if="userinfo.openId" class="btn" @click="scanBook">添加图书</button>
  </div>

</template>

<script>
import YearProgress from '@/components/YearProgress'
import config from '@/config'
import {get, showSuccess, post, showModal} from '@/util'
import qcloud from 'wafer2-client-sdk'

export default {
  data () {
    return {
      userinfo: {
        avatarUrl: '@/static/img/unlogin.png'
      }
    }
  },

  components: {
    YearProgress
  },

  methods: {
    async addBook (isbn) {
      const res = await post('/weapp/addbook', {
        isbn,
        openid: this.userinfo.openId
      })
      if (res.code === 0 && res.data.title) {
      showModal('添加成功', `${res.data.title}添加成功`)
      //   showSuccess('添加成功', res.data.title + '添加成功')
      }
    },
    scanBook () {
      wx.scanCode({
        success: (res) => {
          if (res.result) {
            console.log('hi', res.result);
            this.addBook(res.result)
          }
        }
      })
    },
    async login () {
      let user = wx.getStorageSync('userinfo')
      let that = this
      if (!user) {
        // 设置登录地址
        qcloud.setLoginUrl(config.loginUrl);
        qcloud.login({
            success: function (userinfo) {
                console.log('登录成功', userinfo);
                showSuccess('登录成功')
                wx.setStorageSync('userinfo', userinfo)
                that.userinfo = userinfo
            },
            fail: function (err) {
                console.log('登录失败', err);
            }
        })
      }
    },
    onShow() {
      let userinfo = wx.getStorageSync('userinfo')
      if (userinfo) {
        this.userinfo = userinfo
      }
    }
  },

  created () {
    this.userinfo = wx.getStorageSync('userinfo')
  }
}
</script>

<style scoped lang="scss">
  .container {
    padding: 0 30rpx;
    .userinfo {
      margin-top: 100rpx;
      text-align: center;
      img {
        width: 150rpx;
        height: 150rpx;
        margin: 20rpx;
        border-radius: 50%;
      }
    }
  }
</style>
