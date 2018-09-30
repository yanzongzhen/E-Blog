<template>
  <section>
    <Row  class="login-view">
      <Col :xs="{span: 20, offset:2}" :sm="{span: 14, offset:5}" :md="{span: 12, offset:6}" :lg="{span: 12, offset:6}">
        <login-form @login-ok="getLogin"></login-form>
      </Col>
    </Row>
  </section>
</template>

<script>
import LoginForm from '@/components/loginForm'

export default {
  components: {
    LoginForm
  },
  name: 'Login',
  data () {
    return {}
  },
  methods: {
    getLogin (item) {
      if (item) {
        this.$Loading.start()
        this.$router.push({path: '/'})
      }
    }
  },
  mounted () {
    this.$Loading.finish()
  }
}
</script>

<style scoped>
  .login-view {
    margin-top: 110px;
  }
  .more-thing i {
    font-size: 24px;
  }
</style>
