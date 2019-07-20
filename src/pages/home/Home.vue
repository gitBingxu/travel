<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-location></home-location>
    <home-recommand></home-recommand>
    <favorite></favorite>
    <div class="view-all">查看所有产品</div>
    <weekend-go></weekend-go>
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
    HomeLogin
  },
  data () {
    return {

    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
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
