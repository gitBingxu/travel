<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-location></home-location>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcon'
import HomeLocation from './components/HomeLocation'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeLocation
  },
  data () {
    return {

    }
  }
}
</script>

<style>
  .home {
    font-size: .28rem;
    padding: 0;
    margin: 0;
    background: #ccc;
  }
</style>
