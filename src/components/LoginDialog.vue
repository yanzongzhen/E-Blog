<template>
    <section>
      <Modal v-model="showFlag" width="50%" footer-hide>
        <login-form @login-ok="getLogin"></login-form>
      </Modal>
    </section>
</template>

<script>
import LoginForm from '@/components/loginForm'
export default {
  components: {
    LoginForm
  },
  props: {
    showLogin: false
  },
  name: 'LoginDialog',
  data () {
    return {
      showFlag: this.showLogin
    }
  },
  methods: {
    getLogin (item) {
      if (item) {
        this.showFlag = !this.showFlag
      }
    }
  },
  watch: {
    showLogin (val) {
      this.showFlag = val
    },
    showFlag (val) {
      this.$emit('closed', val)
    }
  }
}
</script>

<style scoped>

</style>
