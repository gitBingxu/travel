<template>
  <div class="location-wrap">
    <div class="location-left">
      <span class="iconfont locate">&#xe60b;</span>
      <span>定位失败</span>
    </div>
    <div class="location-right">
      <span class="iconfont earth">&#xe61a;</span>
      <span>
        <a href="https://sale.piao.qunar.com/touch/topic/mk/t_2916.htm?cat=from_area%3Dts_tuiguang">必游榜单</a>
      </span>
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
      a {
        text-decoration: none;
        color: #333333;
      }
    }
  }
</style>
