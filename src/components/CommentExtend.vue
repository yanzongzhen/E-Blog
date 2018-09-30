<template>
  <section>
    <div class="comment-extend">
      <h3><Icon type="ios-chatboxes-outline" style="font-size: 20px"/>文章评论</h3>
      <Divider style="margin: 12px 0"></Divider>
      <Row class="send-comment">
        <Col :xs="{span:20}" :sm="{span:21}" :md="{span:21}" :lg="{span:22}">
          <EmojiVue @input="onInput" width="auto" height="100"/>
        </Col>
        <Col :xs="{span:4}" :sm="{span:3}" :md="{span:3}" :lg="{span:2}">
          <div class="sum-btn" @click="submitComment"><span style="font-size: 18px; font-weight: lighter">评论</span></div>
        </Col>
      </Row>
      <comment-list :cmtData="cmtData"></comment-list>
    </div>
    <login-dialog :showLogin="showLogin" @closed="setShowLogin"></login-dialog>
  </section>

</template>

<script>
import LoginDialog from '@/components/LoginDialog'
import CommentList from '@/components/CommentList'
import EmojiVue from '@/components/VueEmoji'
export default {
  name: 'CommentExtend',
  components: {
    EmojiVue,
    LoginDialog,
    CommentList
  },
  props: {
    articleId: Number,
    commentData: Array
  },
  data () {
    return {
      commentForm: {
        content: ''
      },
      showLogin: false,
      cmtData: this.commentData
    }
  },
  watch: {
    commentData (val) {
      this.cmtData = val
    },
    cmtData (val) {
      this.$emit('refresh-cmtData', val)
    }
  },
  methods: {
    onInput (item) {
      this.commentForm.content = item.data
    },
    async submitComment () {
      if (this.$cookies.get('user')) {
        let id = Math.floor(Math.random() * 10) + 5
        let tmp = {id: id, username: 'user' + 1, content: this.commentForm.content, area: '济南' + `${id}`, created_at: Date.now().toString()}
        await this.cmtData.push(tmp)
        await this.clearInput()
        console.log()
      } else {
        this.showLogin = true
      }
    },
    setShowLogin (val) {
      this.showLogin = val
    },
    clearInput () {
      let emojiInput = document.getElementsByClassName('emoji-vue-textarea')
      emojiInput[1].innerHTML = ''
    }
  }
}
</script>

<style scoped>
.comment-extend:hover {
  box-shadow: 0 1px 6px rgba(59, 128, 112, 0.2);
  border-color: #eee;
}
.comment-extend {
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
  .comment-extend {
    width: 100%;
    margin-left: 0;
  }
}
.sum-btn {
  height: 100px;
  background-color: #19be6b;
  text-align: center;
  line-height: 100px;
  color: white;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
.sum-btn:hover {
  box-shadow: 0 1px 6px rgba(59, 128, 112, 0.2);
  border-color: #eee;
}
</style>
