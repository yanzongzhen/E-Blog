<template>
  <section>
    <div class="article-detail">
      <Breadcrumb>
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="">{{Article.title}}</BreadcrumbItem>
      </Breadcrumb>
      <div class="header-part">
          <h2>{{Article.title}}</h2>
          <div class="someBar">
            <span class="tags"><i class="fa fa-tags" style="color: green"></i> {{Article.tags}}</span>
            <span class="times"><i class="fa fa-clock-o" style="color: skyblue"></i> {{Article.created_at}}</span>
            <span class="views"><i class="fa fa-eye"></i><span>浏览量(<i style="color: #2db7f5">{{Article.view_count}}</i>)</span></span>
            <span class="likes"><i class="fa fa-heart" style="color: deeppink"></i><span>喜欢(<i style="color: #f5baa0">{{Article.like_count}}</i>)</span></span>
            <span class="comments"><i class="fa fa-comment-o"></i><span>评论数(<i style="color: #47c4b4">{{Article.comment_count}}</i>)</span></span>
          </div>
      </div>
      <div class="desc">
        <p><Strong>简介:</Strong> {{Article.desc}}</p>
      </div>
      <div class="content">
        <p v-html="Article.content"></p>
      </div>
      <Row class="shareTool">
        <Col :xs="{span:16, offset:4}" :sm="{span:12, offset:6}" :md="{span:14, offset:5}" :lg="{span:14, offset:5}">
          <Row type="flex" justify="center" :gutter="20">
            <Col>
              <Tooltip content="点个赞" placement="top-start" theme="light">
                <Button type="success">
                  <Icon type="ios-thumbs-up-outline" style="font-size: 20px"/>
                </Button>
              </Tooltip>
            </Col>
            <Col>
              <Tooltip content="敲喜欢" placement="top" theme="light">
                <Button type="error">
                  <Icon type="md-heart-outline"  style="font-size: 20px"/>
                </Button>
              </Tooltip>
            </Col>
              <Col>
                <Tooltip content="分享我" placement="top-end" theme="light">
                  <Button type="primary">
                    <Icon type="md-share" style="font-size: 20px"/>
                  </Button>
                </Tooltip>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    <div>
      <comment-extend :articleId="article_id" :commentData="CommentData" @refresh-cmtData="getComments"></comment-extend>
    </div>
  </section>
</template>

<script>
import CommentExtend from '@/components/CommentExtend'
export default {
  name: 'articleDetail',
  components: {
    CommentExtend
  },
  data () {
    return {
      Article: {title: '测试1', id: 1, img: '../../static/logo.png', content: '<span style="font-size: 20px">课呢欧尼熊</span>欧椋鸟AC瑟吉欧个问佛IC哪位加强对我个小红旗玩笑我', desc: '课呢欧尼熊欧椋鸟AC瑟吉欧个问佛IC哪位加强对我个小红旗玩笑我', tags: '技术、数码', created_at: '2018/9/29', view_count: 110, like_count: 110, comment_count: 20},
      article_id: 0,
      CommentData: [
        {id: 1, username: 'yan', area: '济南', content: '这是一个测试的评论', created_at: '2019/9/29 21:11'},
        {id: 2, username: 'yan', area: '济南', content: '这是一个测试的评论', created_at: '2019/9/29 21:11'},
        {id: 3, username: 'yan', area: '济南', content: '这是一个测试的评论', created_at: '2019/9/29 21:11'},
        {id: 4, username: 'yan', area: '济南', content: '这是一个测试的评论', created_at: '2019/9/29 21:11'}
      ]
    }
  },
  methods: {
    getComments (val) {
      this.CommentData = val
    }
  },
  mounted () {
    this.$Loading.finish()
    this.article_id = this.$route.params.id
  }
}
</script>

<style scoped>
  .article-detail:hover {
    box-shadow: 0 1px 6px rgba(59, 128, 112, 0.2);
    border-color: #eee;
  }
  .article-detail {
    position: relative;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 6px;
    padding: 20px 20px;
    width: 98%;
    margin-left: 1%;
    min-height: 300px;
  }
  @media screen and (max-width: 768px){
    .article-detail {
      width: 100%;
      margin-left: 0;
    }
    span.times {
      display: none;
    }
    span.comments {
      display: none;
    }
    span.likes {
      display: none;
    }
  }
  .header-part {
    text-align: center;
    margin-top: 2px;
  }
  .someBar {
    margin: 4px auto;
  }
  .someBar span {
    margin-right: 20px;
  }
  .desc {
    padding: 16px 16px;
    background-color: #eff1f5;
    border-radius: 4px;
  }
  .content {
    padding: 16px 16px;
    margin-bottom: 26px;
  }
</style>
