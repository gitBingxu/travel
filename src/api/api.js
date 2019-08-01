const api = {
  // 获取城市选择页面列表内容
  getCityInfo: {
    method: 'get',
    url: '/city.json'
  },
  // 获取首页数据
  getHomeInfo: {
    method: 'get',
    url: '/index.json'
  },
  // 获取城市详情页面数据
  getDetailInfo: {
    method: 'get',
    url: '/detail.json'
  },
  // 获取搜索页面城市热搜数据
  getHotInfo: {
    method: 'get',
    url: '/hotSearch.json'
  }
}
export default api
