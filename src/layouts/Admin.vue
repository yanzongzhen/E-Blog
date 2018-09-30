<template>
  <section>
    <Layout>
      <Header :style="{position: 'fixed', width: '100%', zIndex:'999'}">
        <div class="layout-logo">
          <img src="../../static/img/logo1.png">
        </div>
        <div class="more-list" style="float: right">
          <i @click="menuStatus = !menuStatus" class="fa fa-navicon" style="font-size: 30px; line-height: 60px; color: #fff;"></i>
        </div>
        <div class="layout-nav">
          <menu-list :listModel="'horizontal'"></menu-list>
        </div>
      </Header>
    </Layout>
    <div class="layout">
      <Layout>
        <Content :style="{padding: '20px 20px', height: '100%'}">
          <Row>
            <Col :xs="24" :sm="24" :md="18" :lg="18" style="height:auto;border-radius:10px">
              <router-view></router-view>
            </Col>
            <Col :md="{span:6}" :lg="{span:6}" class="side-content">
            </Col>
          </Row>
          <Row>
            <Col :xs="24" :sm="24" class="side-content-bottom" style="display: none">
            </Col>
          </Row>
        </Content>
        <Footer class="layout-footer-center">2013-2018 &copy; Ealine</Footer>
        <Drawer :closable="false" v-model="menuStatus" :styles="drawer_style" >
          <menu-list @close-drawer="closeDrawer"></menu-list>
          <div class="demo-drawer-footer">
            <Tooltip content="关闭" placement="top-start" theme="light">
              <i class="fa fa-close" @click="menuStatus = false" style="color: white;font-size: 30px; font-weight: lighter ;margin-right:20px"></i>
            </Tooltip>
            <Tooltip content="退出登录" placement="top-end" theme="light">
              <i @click="logout" class="fa fa-sign-out" style="color: white;font-size: 30px; font-weight: lighter;"></i>
            </Tooltip>
          </div>
        </Drawer>
      </Layout>
    </div>
  </section>
</template>

<script>
import MenuList from '@/components/MenuList'
export default {
  name: 'Admin',
  components: {
    MenuList
  },
  data () {
    return {
      menuStatus: false,
      drawer_style: {
        'background-color': '#515a6e',
        'padding': '6px'
      },
      TagData: this.$store.state.Tags,
      friendlinks: this.$store.state.friendLink,
      menuState: 'close'
    }
  },
  methods: {
    async logout () {
      this.$cookies.remove('user')
      this.$Message.success('退出成功')
      this.menuStatus = false
      this.$router.push({path: '/login'})
    },
    closeDrawer (item) {
      this.menuStatus = item
    }
  },
  computed: {
    is_open () {
      if (this.menuStatus) {
        return 'open'
      } else {
        return 'close'
      }
    }
  },
  watch: {
  },
  mounted () {
    this.$Loading.finish()
  }
}
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    margin-top: 64px;
    position: relative;
    width: 100%;
    height: 100%;
  }
  .layout-logo{
    width: 40px;
    height: 40px;
    top: 10px;
    border-radius: 50px;
    float: left;
    position: relative;
    left: 20px;
    background-color: white;
    margin-right: 30px;
  }
  .layout-logo img {
    width: 100%;
    height: 100%;
  }

  .layout-nav{
    width: auto;
    margin-right: 15px;
    position: relative;
    left: 80px;
  }
  .layout-footer-center{
    text-align: center;
    background-color:#515a6e ;
    color: white;
  }
  @media screen and (max-width: 768px){
    .layout-nav {
      display: none;
    }
  }
  @media screen and (max-width: 992px) {
    .side-content{
      display: none;
    }
    .layout{
      border: 1px solid #d7dde4;
      background: #f5f7f9;
      margin-top: 64px;
      position: relative;
      overflow: hidden;
      width: 100% !important;
      margin-left: 0 !important;
    }
    .side-content-bottom {
      margin-top: 10px;
      display: block !important;
    }
  }
  @media screen and (min-width: 768px) {
    .more-list {
      display: none;
    }
  }

  .demo-drawer-footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid rgba(255,255,255,.7);
    padding: 10px 16px;
    text-align: right;
  }
  .tools {
    margin-bottom: 5px;
  }
  .ivu-layout {
    height: 100%;
  }
</style>
