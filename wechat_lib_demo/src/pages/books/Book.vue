<template>
  <div>
    <Card v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script>
import {get} from '@/util'
import Card from '@/components/Card'
export default {
  data () {
    return {
      books: []
    }
  },

  components: {
    Card
  },

  methods: {
    async getList () {
      const book = await get('/weapp/booklist')
      console.log(book);
      this.books = book.list
    }
  },

  mounted () {
    this.getList()
  }
}
</script>

<style scoped>

</style>
