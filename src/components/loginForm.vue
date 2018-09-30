<template>
  <section>
    <Card>
      <div style="margin-bottom: 20px">
        <img src="../../static/img/banner2.jpg" style="width: 100%;height: 100%">
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
        <FormItem :label-width="0">
          <Row>
            <Col :xs="{span:10, offset:4}" :sm="{span: 10, offset:4}" :md="{span: 10, offset:4}" :lg="{span: 10, offset:5}">
              <Button type="primary" @click="handleSubmit('formInline')">SIGN IN</Button>
            </Col>
            <Col :xs="{span:10}" :sm="{span:10}" :md="{span: 10}" :lg="{span: 9}">
              <Button type="success" @click="toRegister">SIGN UP</Button>
            </Col>
          </Row>
        </FormItem>
        <Divider><span style="font-size: 10px; color: #808695;">More Method</span></Divider>
        <Row class="more-thing">
          <Col span="4" offset="6">
            <i class="fa fa-wechat"></i>
          </Col>
          <Col span="4">
            <i class="fa fa-qq"></i>
          </Col>
          <Col span="4">
            <i class="fa fa-weibo"></i>
          </Col>
          <Col span="4">
            <i class="fa fa-github"></i>
          </Col>
        </Row>
      </Form>
    </Card>
  </section>

</template>

<script>
import {ApiReq} from '../api'
export default {
  name: 'loginForm',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      ruleInline: {
        username: [
          { required: true, message: '请输入您的名字', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '你输入的密码位数不能低于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(async (valid) => {
        if (valid) {
          let res = await ApiReq(this, '/auth/login', this.form, true)
          if (res.code === 0) {
            this.$Message.success(res.msg)
            this.$cookies.set('user', res.user)
            this.$emit('login-ok', true)
          }
        } else {
          this.$Message.error('表单校验失败')
        }
      })
    },
    toRegister () {
      this.$Loading.start()
      this.$router.push({path: '/sign-up'})
    }
  },
  mounted () {
    this.$Loading.finish()
  }
}
</script>

<style scoped>
  .more-thing i {
    font-size: 24px;
  }
</style>
