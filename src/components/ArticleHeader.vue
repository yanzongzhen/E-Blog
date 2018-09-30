<template>
    <section>
      <div class="article-header">
        <Card class="header-content">
          <h4 slot="title">{{articleData.title}}</h4>
          <a type="text" style="font-size: 16px;color: #2d8cf0" title="查看全文" @click="gotoDetail(articleData.id)" slot="extra">
            <Icon type="ios-book-outline"/>
            阅读全文
          </a>
          <Row class="blog-content">
            <Col :xs="10" :sm="8" :md="8" :lg="6" class="content-pic">
              <img :src="articleData.img">
            </Col>
            <Col :xs="14" :sm="16" :md="16" :lg="18" class="content-header">
              <p>
                {{ articleData.content.length > 30 ? articleData.content.slice(0,30) + '....' : articleData.content}}
              </p>
            </Col>
          </Row>
        </Card>
        <div class="footer">
          <span class="tags"><i class="fa fa-tags" style="color: green"></i> {{articleData.tags}}</span>
          <span class="times"><i class="fa fa-clock-o" style="color: skyblue"></i> {{articleData.created_at}}</span>
          <span class="views"><i class="fa fa-eye"></i><span>浏览量(<i style="color: #2db7f5">{{articleData.view_count}}</i>)</span></span>
          <span class="likes"><i class="fa fa-heart" style="color: deeppink"></i><span>喜欢(<i style="color: #f5baa0">{{articleData.like_count}}</i>)</span></span>
          <span class="comments"><i class="fa fa-comment-o"></i><span>评论数(<i style="color: #47c4b4">{{articleData.comment_count}}</i>)</span></span>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: {
    articleData: Object
  },
  name: 'ArticleHeader',
  methods: {
    gotoDetail (id) {
      this.$Loading.start()
      this.$router.push({name: 'ArticleDetail', params: {id: id}})
    }
  }
}
</script>

<style scoped>
  .blog-content {
    padding: 4px 4px;
    min-height: 60px;
    max-height: 100px;
    overflow: hidden;
  }
  .blog-content .content-pic {
    text-align: center;
    height: 100%;
  }
  .blog-content .content-pic img  {
    width: 40%;
    height: 40%;
  }
  .blog-content .content-header {
    height: 50%;
  }
  div.article-header {
    margin-bottom: 6px;
    width: 98%;
    margin-left: 1%;
  }
  div.footer {
    background: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    font-size: 14px;
    position: relative;
    transition: all .2s ease-in-out;
    padding: 14px 16px;
    line-height: 1;
    border-left: 1px solid #dcdee2;
    border-bottom: 1px solid #dcdee2;
    border-right: 1px solid #dcdee2;
  }
  div.footer span {
    margin-right: 16px;
  }
  div.article-header:hover {
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-color: #eee;
  }
  .header-content {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    box-shadow: none;
  }
  @media screen and (max-width: 768px){
    .blog-content .content-pic img  {
      width: 50%;
      height: 50%;
    }
    .blog-content .content-pic {
      height: 100%;
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
    div.article-header {
      margin-bottom: 6px;
      width: 100%;
      margin-left: 0;
    }
  }

  @media screen and (min-width: 1600px){
    .blog-content .content-pic img  {
      width: 30%;
      height: 30%;
    }
  }
</style>
