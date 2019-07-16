<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-location></home-location>
    <home-recommand></home-recommand>
    <favorite></favorite>
    <div class="view-all">查看所有产品</div>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcon'
import HomeLocation from './components/HomeLocation'
import HomeRecommand from './components/HomeRecommand'
import Favorite from './components/HomeFavorite'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeLocation,
    HomeRecommand,
    Favorite
  },
  data () {
    return {

    }
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
  }
</style>
