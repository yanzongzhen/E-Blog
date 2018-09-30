<template>
  <div class="comments-list">
    <div class="title">
      <span style=" font-weight: bolder"><Icon type="ios-list-box-outline" style="font-size: 20px;"/>评论列表</span>
      <span style="float: right;margin-right: 10px; font-size: 12px">评论条数 {{cmtData.length}}</span>
    </div>
    <Divider style="margin: 12px 0"></Divider>
    <div class="cmt-list">
      <Row class="cmt-list-item"  type="flex" justify="center" v-for="(item, index) in cmtData" :key="index">
        <Col :xs="{span:4}" :sm="{span:3}" :md="{span:3}" :lg="{span:2}" class="pic">
          <img src="../../static/logo.png">
        </Col>
        <Col :xs="{span:20}" :sm="{span:21}" :md="{span:21}" :lg="{span:22}">
          <Row class="line">
            <Col :xs="{span:12}" :sm="{span:8}" :md="{span:8}" :lg="{span:8}" class="user">{{item.username + '['+ item.area+']'}}</Col>
            <Col :xs="{span:10, offset:2}" :sm="{span:6, offset:10}" :md="{span:6, offset:10}" :lg="{span:6, offset:8}" class="time">{{item.created_at}}</Col>
          </Row>
          <Row class="line">
            <Col span="22" class="cmt-content">{{ item.content }}</Col>
          </Row>
          <Row class="line">
            <Col span="24">
              <span><Icon type="ios-thumbs-up-outline" @click="zan(item.id)" style="font-size: 20px"/></span>
              <!--<span><Icon type="ios-chatbubbles-outline" style="font-size: 20px"/></span>-->
              <span><Icon type="ios-flag-outline" @click="warns(item.id)" style="font-size: 20px"/></span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  props: {
    cmtData: Array
  },
  data () {
    return {
      Comments: []
    }
  },
  methods: {
    zan (id) {
      console.log('点赞', id)
    },
    warns (id) {
      console.log('举报', id)
    }
  }
}
</script>

<style scoped>

  .cmt-list .cmt-list-item .pic {
    line-height: 42px;
    text-align: center;
  }
  .cmt-list .cmt-list-item .pic img {
    width: 42px;height: 42px;border-radius: 42px; border: 1px solid #dcdfe6;
  }
  .cmt-list .cmt-list-item {
    margin: 4px 4px;
    border: 1px solid #f8f8f9;
    padding: 4px 2px;
    border-radius: 4px;
  }
  .cmt-list .cmt-list-item:hover {
    box-shadow: 0 1px 6px rgba(59, 128, 112, 0.2);
    border-color: #eee;
  }
  .line {
    margin-bottom: 4px;
  }
  .line span {
    margin-right: 20px;
  }

  @media screen and (max-width: 768px){
    .line .time {
      display: none;
    }
  }

  .comments-list {
    margin-top: 16px;
  }
</style>
