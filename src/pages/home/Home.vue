<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconsList="iconList"></home-icons>
    <home-location></home-location>
    <home-recommand :recommendList="recommendList"></home-recommand>
    <favorite :favList="favList"></favorite>
    <div class="view-all">
      <a href="//touch.piao.qunar.com/touch/list_北京_景点门票.html"> 查看所有产品</a>
    </div>
    <weekend-go :weekendList="weekendList"></weekend-go>
    <div class="tic-price">
      <img class="price-icon" src="@/assets/image/detail.png" />
      <strong class="text-left">票面价</strong>
      <span class="text-right">是指通过景区指定窗口售卖的纸质门票上标注的价格</span>
    </div>
    <home-login></home-login>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcon'
import HomeLocation from './components/HomeLocation'
import HomeRecommand from './components/HomeRecommand'
import Favorite from './components/HomeFavorite'
import WeekendGo from './components/WeekendGo'
import HomeLogin from './components/Homelogin'
import axios from 'axios'
import store from '@/store/store'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeLocation,
    HomeRecommand,
    Favorite,
    WeekendGo,
    HomeLogin,
    store
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      favList: [],
      weekendList: []
    }
  },
  methods: {
    getInfoSucc (res) {
      const {data} = res
      this.swiperList = data.swiperList
      this.iconList = data.iconList
      this.recommendList = data.recommendList
      this.favList = data.favList
      this.weekendList = data.weekendList
    },
    getCityInfo () {
      axios.get('/api/city.json').then(this.createCityList)
    },
    createCityList (res) {
      console.log(1)
      const {code, data} = res.data
      if (code) {
        const list = data.cities
        let index = Object.keys(list)
        let allCityList = []
        index.forEach((item) => {
          let obj = {}
          obj.alpha = item
          obj.city = list[item]
          allCityList.push(obj)
        })
        sessionStorage.setItem('inHotList', JSON.stringify(data.hotCities))
        sessionStorage.setItem('outHotList', JSON.stringify(data.hotList))
        sessionStorage.setItem('allCity', JSON.stringify(allCityList))
        sessionStorage.setItem('allCities', JSON.stringify(data.cities))
        console.log(2)
      }
    },
    getHotSearch () {
      axios.get('/api/hotSearch.json').then((res) => {
        const {code, data} = res.data
        if (code) {
          sessionStorage.setItem('topHotList', JSON.stringify(data.topHotList))
        }
      })
    },
    async getInfo () {
      let res = await this.$http.getHomeInfo()
      this.getInfoSucc(res)
    }
  },
  created () {
    sessionStorage.setItem('token', 'this is a token')
    this.getInfo()
    let timer = setTimeout(() => {
      if (timer) {
        clearTimeout(timer)
        this.getCityInfo()
      }
    }, 0)
  },
  mounted () {
    this.getHotSearch()
  }
}
</script>

<style lang="scss" scoped>
@import 'styles/style.scss';
  .home {
    font-size: .28rem;
    padding: 0;
    margin: 0;
    background: #e5e5e5;
    .view-all {
      border-top: 1px solid #e5e5e5;
      display: block;
      padding: .2rem 0;
      margin-top: -1px;
      background: $bgcolor;
      color: #00afc7;
      font-size: .28rem;
      line-height: .4rem;
      text-align: center;
      a {
        text-decoration: none;
      }
    }
    .tic-price {
      background: #fff;
      height: .6rem;
      padding: .14rem .1rem;
      font-size: .24rem;
      line-height: .32rem;
      color: #616161;
      margin-top: .2rem;
      box-sizing: border-box;
      .price-icon {
        width: .24rem;
        height: .24rem;
        margin-top: -.06rem;
      }
      .text-left {
        color: black;
        margin-right: -.06rem;
      }
    }
  }
</style>
