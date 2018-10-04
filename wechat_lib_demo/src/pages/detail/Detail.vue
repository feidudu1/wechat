<template>
  <div class="">
    图书id{{bookid}}
  </div>
</template>

<script>
import {get} from '@/util'
export default {
  data () {
    return {
      bookid: ''
    }
  },

  components: {

  },

  methods: {
    async getDetail () {
      const info = await get('/weapp/bookdetail', {id: this.bookid})
    }
  },

  mounted () {
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
  }
}
</script>

<style scoped>

</style>
