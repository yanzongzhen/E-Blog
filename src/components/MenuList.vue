<template>
  <Menu :mode="listModel" :theme="theme" :active-name="activeName" @on-select="gotoMenu">
    <MenuItem name="Index">
      <Icon type="ios-home" class="icons" />
      博客首页
    </MenuItem>
    <MenuItem name="About">
      <Icon type="ios-people"  class="icons" />
      关于博主
    </MenuItem>
    <MenuItem name="TimeLine">
      <Icon type="ios-timer-outline" class="icons" />
      时间轴
    </MenuItem>
    <MenuItem name="FriendLink">
      <Icon type="ios-link"  class="icons"/>
      友情链接
    </MenuItem>
    <MenuItem name="Communicate">
      <Icon type="ios-bug" class="icons" />
      技术交流
    </MenuItem>
    <MenuItem name="Profile" v-if="is_login">
      <Icon type="ios-contact"  class="icons"/>
      个人中心
    </MenuItem>
    <Submenu name="Admin" v-if="is_super">
      <template slot="title">
        <Icon type="md-analytics" class="icons" />
        管理员
      </template>
      <MenuGroup title="管理员">
        <MenuItem name="Admin-dashboard">后台管理</MenuItem>
        <MenuItem name="Admin-userManage">用户管理</MenuItem>
        <MenuItem name="Admin-data-parser">分析数据</MenuItem>
      </MenuGroup>
      <MenuGroup title="内容管理">
        <MenuItem name="Admin-manage-article">文章管理</MenuItem>
        <MenuItem name="Admin-manage-comment">评论管理</MenuItem>
      </MenuGroup>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  name: 'MenuList',
  props: {
    listModel: {
      type: String,
      default: 'vertical'
    },
    theme: {
      type: String,
      default: 'dark'
    },
    activeName: {
      type: String,
      default: '1'
    },
    isSuper: {
      type: Boolean,
      default: true
    }

  },
  methods: {
    gotoMenu (item) {
      this.$emit('close-drawer', false)
      this.$router.push({name: `${item}`})
    }
  },
  computed: {
    is_login () {
      return this.$cookies.get('user') !== null
    },
    is_super () {
      if (this.$cookies.get('user')) {
        return this.$cookies.get('user').is_superuser
      }
    }
  }
}
</script>

<style scoped>
  div.layout-nav li.ivu-menu-item {
    height: 64px;
    background-color: #515a6e ;
  }
  div.layout-nav li.ivu-menu-submenu {
    height: 64px;
    background-color: #515a6e ;
  }
  div.ivu-select-dropdown ul.ivu-menu-drop-list li.ivu-menu-item-group ul li.ivu-menu-item {
    padding: 7px 16px 8px;
    background-color: #fff ;
    font-size: 14px!important;
  }
</style>
