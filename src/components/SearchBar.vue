<template>
  <section>
    <Card style="width:auto;border-radius: 10px">
      <Input v-model="query" :search="true" enter-button placeholder="搜索" @on-search="QueryData"/>
    </Card>
  </section>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      query: ''
    }
  },
  methods: {
    async QueryData () {
      this.$Notice.info(
        {
          title: '提示',
          desc: '您搜索的内容是' + this.query + ', 全局搜索正在开发中'
        }
      )
      await this.$emit('search-data', this.query)
      this.query = ''
    }
  }
}
</script>

<style scoped>

</style>
