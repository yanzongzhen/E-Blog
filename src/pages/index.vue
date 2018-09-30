<template>
  <section>
    <div class="article-Index">
      <article-header v-for="(item, index) in ArticleData" :articleData="item" :key="index"></article-header>
      <div style="text-align: center">
        <Page :total="total" :current="currentPage" :page-size="pageSize" @on-change="handlerPageChange" simple/>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleHeader from '@/components/ArticleHeader'
export default {
  components: {
    ArticleHeader
  },
  name: 'index',
  data () {
    return {
      ArticleData: [
        {title: '测试1', id: 1, img: '../../static/logo.png', content: '课呢欧尼熊欧椋鸟AC瑟吉欧个问佛IC哪位加强对我个小红旗玩笑我', tags: '技术、数码', created_at: '2018/9/29', view_count: 110, like_count: 110, comment_count: 20}
      ],
      pageSize: this.$store.state.pageSize,
      currentPage: 1,
      total: 100
    }
  },
  methods: {
    handlerPageChange (item) {
      console.log(item)
    }
  }
}
</script>

<style scoped>
  @media screen and (max-width: 992px) {
    .article-Index {
      margin-top: 6px;
    }
  }
</style>
