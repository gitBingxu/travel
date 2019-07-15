<template>
  <div class="location-wrap">
    <div class="location-left">
      <span class="iconfont locate">&#xe60b;</span>
      <span>定位失败</span>
    </div>
    <div class="location-right">
      <span class="iconfont earth">&#xe61a;</span>
      <span>必游榜单</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLocation',
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .location-wrap {
    display: flex;
    flex-direction: row;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background: #ffffff;
    margin-top: 1px;
    .location-left {
      width: 50%;
      height: 100%;
      box-sizing: border-box;
      border-right: 1px solid #e5e5e5;
    }
    .location-right {
      width: 50%;
      height: 100%;
    }
  }
</style>
