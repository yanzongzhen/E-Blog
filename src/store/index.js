import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    userStatus: {0: '正常', 1: '禁用'},
    ArticleStatus: {1: '草稿', 2: '已发布', 3: '已归档'},
    pageSize: 10,
    Tags: [
      {name: '小说', count: 1},
      {name: '科技', count: 2},
      {name: '数码', count: 6},
      {name: '言情', count: 4},
      {name: '代码', count: 4},
      {name: '代码11', count: 4}
    ],
    BlogInfo: {'username': '燕宗振', 'job': 'Python、PHP、Node、Vue开发工程师', 'place': '山东省-滕州市', 'email': 'yanzongzhen127@gmail.com'},
    friendLink: [
      {name: '百度', url: 'https://baidu.com'},
      {name: '阿里', url: 'https://alibaba.com'},
      {name: '腾讯', url: 'https://tecent.com'},
      {name: '易联', url: 'http://ealine.cn'}
    ],
    lunBo: [
      {url: '../../static/img/banner1.jpg'},
      {url: '../../static/img/banner2.jpg'},
      {url: '../../static/img/banner3.jpg'},
      {url: '../../static/img/banner4.jpg'}
    ]
  },

  mutations: {
    SET_TAGS (state, tags) {
      state.Tags = tags
    },
    SET_INFO (state, blogger) {
      state.BlogInfo = blogger
    },
    SET_LINK (state, links) {
      state.friendLink = links
    },
    SET_LUN (state, picList) {
      state.lunBo = picList
    }
  },

  actions: {
    async refreshTag ({commit}) {
      let { data } = await axios.get('/common/tags')
      if (data.status === 0) {
        commit('SET_TAGS', data.data)
      }
    },
    async refreshLinks ({commit}) {
      let { data } = await axios.get('/common/links')
      if (data.status === 0) {
        commit('SET_LINK', data.data)
      }
    },
    async refreshLunBo ({commit}) {
      let { data } = await axios.get('/common/lun-bo')
      if (data.status === 0) {
        commit('SET_LUN', data.data)
      }
    },
    async refreshBloggerInfo ({commit}) {
      let { data } = await axios.get('/common/blogger-info')
      if (data.status === 0) {
        commit('SET_INFO', data.data)
      }
    }
  }
})

export default store
