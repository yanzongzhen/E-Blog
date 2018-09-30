import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/layouts/Login'
import Register from '@/layouts/Register'
import Main from '@/layouts/Main'
import Admin from '@/layouts/Admin'
import About from '@/pages/about'
import TimeLine from '@/pages/timeLine'
import Profile from '@/pages/Profile'
import FriendLink from '@/pages/FriendLink'
import Communicate from '@/pages/Communicate'
import Index from '@/pages/index'

import DashBoard from '@/pages/Admin/Dashboard'
import DataParser from '@/pages/Admin/DataParser'
import UserManage from '@/pages/Admin/UserManage'
import ArticleManage from '@/pages/Admin/ArticleManage'
import CommentManage from '@/pages/Admin/CommentManage'

import articleDetail from '@/pages/articleDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: 'index',
      children: [
        {path: 'index', name: 'Index', component: Index},
        {path: 'about', name: 'About', component: About},
        {path: 'time-line', name: 'TimeLine', component: TimeLine},
        {path: 'friend-link', name: 'FriendLink', component: FriendLink},
        {path: 'communicate', name: 'Communicate', component: Communicate},
        {path: 'profile', name: 'Profile', component: Profile},
        {path: 'detail', name: 'ArticleDetail', component: articleDetail}
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      redirect: 'dashboard',
      children: [
        {path: 'dashboard', name: 'Admin-dashboard', component: DashBoard},
        {path: 'user-manage', name: 'Admin-userManage', component: UserManage},
        {path: 'data-parser', name: 'Admin-data-parser', component: DataParser},
        {path: 'manage-article', name: 'Admin-manage-article', component: ArticleManage},
        {path: 'manage-comment', name: 'Admin-manage-comment', component: CommentManage}
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'Register',
      component: Register
    }
  ]
})
