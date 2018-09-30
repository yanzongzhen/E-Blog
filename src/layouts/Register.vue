<template>
  <section>
    <Row  class="login-view">
      <Col :xs="{span: 20, offset:2}" :sm="{span: 14, offset:5}" :md="{span: 12, offset:6}" :lg="{span: 12, offset:6}">
        <Card>
          <div style="margin-bottom: 20px">
            <img src="../../static/img/banner4.jpg" style="width: 100%;height: 100%">
          </div>
          <Form ref="formInline" :model="form" :rules="ruleInline" :label-width="80">
            <Col span="24">
              <FormItem label="Username" prop="username">
                <Input type="text" v-model="form.username" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="Password" prop="password">
                <Input type="password" v-model="form.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="Confirm" prop="re_password">
                <Input type="password" v-model="form.re_password" placeholder="Confirm Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="Email" prop="email">
                <Input type="email" v-model="form.email" placeholder="Email">
                <Icon type="ios-mail-outline" slot="prepend" />
                </Input>
              </FormItem>
            </Col>
            <FormItem :label-width="0">
              <Row>
                <Col :xs="{span:10, offset:4}" :sm="{span: 10, offset:4}" :md="{span: 10, offset:4}" :lg="{span: 10, offset:5}">
                  <Button type="primary" @click="handleSubmit('formInline')">REGISTER</Button>
                </Col>
                <Col :xs="{span:10}" :sm="{span:10}" :md="{span: 10}" :lg="{span: 9}">
                  <Button type="warning" @click="goBack">BACK</Button>
                </Col>
              </Row>
            </FormItem>
          </Form>
        </Card>
      </Col>
    </Row>
  </section>
</template>

<script>
import {ApiReq} from '../api'

export default {
  name: 'Register',
  data () {
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认您的密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入的密码不匹配!'))
      } else {
        callback()
      }
    }
    const validateEmailCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('你输入邮箱地址'))
      } else if (!this.isAccess(value)) {
        callback(new Error('您输入的邮箱不可用'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '',
        password: '',
        re_password: '',
        email: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '请输入您的名字', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          {
            type: 'string',
            min: 6,
            message: '你输入的密码位数不能低于6位',
            trigger: 'blur'
          }
        ],
        re_password: [
          { required: true, validator: validatePassCheck, trigger: 'blur' }
        ],
        email: [
          { required: true, validator: validateEmailCheck, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(async (valid) => {
        if (valid) {
          let res = await ApiReq(this, '/auth/register', this.form, true)
          if (res.code === 0) {
            this.$Message.success(res.msg)
            this.$cookies.set('user', res.user)
            this.$Loading.start()
            this.$router.push('/')
          }
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    },
    goBack () {
      this.$Loading.start()
      this.$router.history.go(-1)
    },
    async isAccess (email) {
      let res = await this.$http.get('https://app.verify-email.org/api/v1/oUfKujp0qCI9lPF4otSxq9otCEyoGoNnhhQ4xlCrIbaonjPy0r/verify/' + email)
      return res.data.status === 1 || res.data.status === '1'
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
