<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-mid">
      <span class="iconfont header-search">&#xe632;</span>
      <input class="header-input" placeholder="输入城市/景点/游玩主题" @click="handleClick">
    </div>
    <div @click="toSelect" class="header-right">
      <span>{{location}}</span>
      <span class="iconfont arrow-icon">&#xe600;</span>
    </div>
  </div>
</template>

<script>
import store from '@/store/store'

export default {
  name: 'HomeHeader',
  components: {
    store
  },
  data () {
    return {
      location: store.state.headLocation
    }
  },
  methods: {
    handleClick () {
      this.$router.push('/search')
    },
    toSelect () {
      this.$router.push('/select/cisborder')
    }
  }
}
</script>

<style lang="scss" scoped>
  $bgcolor: #00bcd4;
  .header{
    background-color: $bgcolor;
    width: 100%;
    line-height: .86rem;
    display: flex;
    flex-direction: row;
    color: #ffffff;
    .header-left {
      width: .64rem;
      .back-icon {
        font-size: .4rem;
        margin-left: .15rem;
      }
    }
    .header-mid {
      position: relative;
      display: flex;
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      margin: .11rem 0 0 .2rem;
      padding: 0 .15rem;
      background: #ffffff;
      border-radius: .1rem;
      color: #ccc;
      .header-input {
        width: 100%;
      }
    }
    .header-right {
      margin: 0 .15rem;
      min-width: 1.1rem;
      // text-align: center;
      .arrow-icon {
        font-size: .32rem;
        margin-left: -.05rem;
      }
    }
  }
</style>
