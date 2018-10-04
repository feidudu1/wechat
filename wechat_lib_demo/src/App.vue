<script>
import config from '@/config'
import {get, showSuccess} from './util'
import qcloud from 'wafer2-client-sdk'

export default {
  // async created () {
  //   let user = wx.getStorageSync('userinfo')
  //   if (!user) {
  //     // 设置登录地址
  //     qcloud.setLoginUrl(config.loginUrl);
  //     qcloud.login({
  //         success: function (userinfo) {
  //             console.log('登录成功', userinfo);
  //             showSuccess('登录成功')
  //             wx.setStorageSync('userinfo', userinfo)
  //         },
  //         fail: function (err) {
  //             console.log('登录失败', err);
  //         }
  //     });
  //   }
  //   // const res = await get('/weapp/demo')
  //   // console.log(123, res);
  //   // console.log('小程序启动了');
  // }
}
</script>

<style>
  .text-footer {
    text-align: center;
    font-size: 12px;
    margin-bottom: 5px;
    color: #eee;
  }
  .text-primary {
    color: #EA5149;
  }
  .btn {
    color: white;
    background: #EA5A49;
    margin-bottom: 10px;
    padding: 0 15px;
    border-radius: 2px;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    width: 100%;
  }
  .btn:active {
    background: #FA5A49;
  }
</style>
