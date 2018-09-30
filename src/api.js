let baseUrl = 'http://127.0.0.1:8000'
if (process && process.env && process.env.NODE_ENV === 'production') {
  baseUrl = 'https://api.ealine.cn'
}
export const BASE_URL = baseUrl

export const ApiReq = async function (obj, apiUrl, params, usePost = false, common = true) {
  console.log(obj, apiUrl)
  if (obj.$cookies.get('user') || common) {
    try {
      let res = null
      if (usePost) {
        res = await obj.$http({
          method: 'POST',
          url: BASE_URL + apiUrl,
          headers: {
            'sid': obj.$cookies.get('user') !== null ? obj.$cookies.get('user').session : null
          },
          timeout: 5000,
          data: params
        })
      } else {
        res = await obj.$http.get(BASE_URL + apiUrl, {
          params,
          timeout: 5000,
          headers: {
            'sid': obj.$cookies.get('user') !== null ? obj.$cookies.get('user').session : null
          }
        })
      }
      if (res.data.code === 0) {
        return res.data
      } else {
        obj.$Message.info({
          duration: 8000,
          closable: true,
          content: res.data.msg})
        return res.data
      }
    } catch (e) {
      if (e.response && e.response.status === 401) {
        obj.$cookies.remove('user')
        obj.$router.push('/login')
      } else if (e.response && e.response.status === 403) {
        obj.$Message.error({
          content: '无此权限',
          duration: 1000,
          closable: true
        })
      } else {
        obj.$Message.error({
          duration: 30000,
          closable: true,
          content: '未知错误，刷新一下试试'
        })
      }
      return {}
    }
  } else {
    obj.$router.push({path: '/login'})
  }
}
