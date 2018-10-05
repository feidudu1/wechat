<template>
  <div class="comment-list">
    <div class="page-title" v-if="comments.length">
      评论
    </div>
    <div class="comment" v-for="comment in comments" :key="comment.id" @click="handleClick(comment)">
      <div class="user">
        <div class="inline">
          <img :src="comment.image" alt="" class="avatar" mode="aspectFit">
          {{comment.title}}
        </div>
        <div class="">
          {{comment.location || '未知地点'}}
          <span class="text-primary">--</span>
          {{comment.phone || '未知型号'}}
        </div>
        <div class="content">
          {{comment.comment}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    comments: {
      type: [Array],
      default: []
    },
    type: {
      type: [String],
      default: ''
    }
  },
  computed: {
    style () {
      // return `width: ${this.value / 2}em`
    }
  },
  methods: {
    handleClick (comment) {
      if (this.type === 'user') {
        wx.navigateTo({
          url: '/pages/detail/main?id=' + comment.bookid
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .comment-list{
    background:#eee;
    font-size:14px;
    .page-title {
      font-size: 18px;
      font-weight: bold;
      color: #EA5149;
      background: #fff;
      padding: 20px 12px 10px;
    }
    .comment{
      background: white;
      border-top: solid 1px #eee;
      padding:5px 20px;
      color: #5d5858;
      font-size: 12px;
      .content{
        margin:10px 0;
        color: #333;
        font-size: 14px;
      }
      .user{
        .inline{
          display:inline;
          .avatar{
            width:20px;
            height:20px;
            border-radius: 50%;
          }
        }
      }
    }
  }
</style>
