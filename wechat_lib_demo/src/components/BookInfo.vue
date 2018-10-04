<template>
  <div class="bookinfo">
    <div class="thumb">
      <img :src="info.image" alt="" mode="aspectFit" class="back">
      <img :src="info.image" alt="" class="img" mode="aspectFit">
      <div class="info">
        <div class="title">
          {{info.title}}
        </div>
        <div class="author">
          {{info.author}}
        </div>
      </div>
    </div>
    <div class="detail flex">
      <div class="">
        <img :src="userinfo.image" class='avatar' mode='aspectFit'>
        {{userinfo.name}}
      </div>
      <div class="text-primary">
        {{info.rate}} 分
        <Rate :value='info.rate'></Rate>
      </div>
    </div>
    <div class="detail flex">
      {{info.publisher}}
      <div>
        {{info.price}}
      </div>
    </div>
    <div class="tags">
      <div class="badge" :key='tag' v-for='tag in info.tags'>{{tag}}</div>
    </div>
    <div class="summary">
      <p :key='i' v-for='(sum,i) in info.summary'>{{sum}}</p>
    </div>
  </div>
</template>

<script>
import Rate from '@/components/Rate'
export default {
  components: {
     Rate
   },
  props: {
    info: {
      type: [Object],
      default: {}
    }
  },
  computed: {
    userinfo () {
     return this.info.user_info || {}
   }
  }
}
</script>

<style lang="scss" scoped>
  .bookinfo {
    font-size: 14px;
    .thumb {
      width: 750rpx;
      height: 500rpx;
      overflow: hidden;
      .back {
        filter: blur(15px);
        width: 100%;
      }
      .img {
        position: absolute;
        width: 100%;
        height: 300rpx;
        left: 0;
        top: 30rpx;
      }
      .info {
        color: #fff;
        position: absolute;
        width: 100%;
        left: 0;
        top: 330rpx;
        text-align: center;
        .title {
          font-size: 20px;
        }
        .author {
          font-size: 14px;
        }
      }
    }
    .badge{
       display: inline-block;
       margin:5px;
       padding:5px;
       border-radius: 10px;
       border:1px #EA5A49 solid;
       color:#EA5A49;
     }
     .summary{
       padding:0 15px;
       margin-top:10px;
       p{
         text-indent: 2em;
         font-size:14px;
       }
     }
    .detail {
      padding:5px 10px;
     .avatar{
       width:20px;
       height:20px;
       border-radius: 50%;
       vertical-align: middle;
     }
    }
  }
</style>
