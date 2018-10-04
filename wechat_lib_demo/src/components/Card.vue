<template>
  <a :href="detailUrl">
    <div class="book-card">
      <div class="thumb">
        <img :src="book.image" alt="" class="img" mode="aspectFit">
      </div>
      <div class="detail">
        <div class="row">
          <div class="text-primary">
            {{book.title}}
          </div>
          <div class="text-primary">
            {{book.rate}} <Rate :value="book.rate"></Rate>
          </div>
        </div>
        <div class="row">
          <div class="">
            {{book.author}}
          </div>
          <div class="">
            {{book.count}}
          </div>
        </div>
        <div class="row">
          <div class="">
            {{book.publisher}}
          </div>
          <div class="">
            {{book.user_info.nickName}}
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import Rate from '@/components/Rate'
export default {
  props: ['book'],
  computed: {
    detailUrl () {
      return '/pages/detail/main?id=' + this.book.id
    }
  },
  components: {
    Rate
  }
}
</script>

<style lang="scss" scoped>
  .book-card{
    padding:5px;
    overflow: hidden;
    margin-top:5px;
    margin-bottom:5px;
    font-size:14px;
    .thumb{
      width:90px;
      height:90px;
      float: left;
      margin:0 auto;
      overflow:hidden;
      .img{
        max-width: 100%;
        max-height: 100%;
      }
    }
    .detail{
      margin-left: 100px;
      .row{
        line-height:20px;
        margin-bottom:3px;
        display: flex;
        justify-content: space-between;
        margin-right: 15px;
      }
      .right{
        float: right;
      }
      .left{
        margin-right:80px;
      }
    }

  }
</style>
