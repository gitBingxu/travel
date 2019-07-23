<template>
  <div class="wrap">
    <div class="head">
      <span class="head-left">搜索建议</span>
      <span class="head-right">关闭</span>
    </div>
    <ul class="search">
      <li class="search-item" v-for="item of list" :key="item.id">
        <img class="item-img" src="https://imgs.qunarzz.com/piao/fusion/1608/cf/7635983375250702.png">
        <p class="item-cont">搜索{{item.name}}的全部景点</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchList',
  props: ['list'],
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .head {
    position: relative;
    height: .5rem;
    border-bottom: 1px solid #cacaca;
    background: #f3f3f3;
    color: #555;
    font-size: .24rem;
    line-height: .5rem;
    .head-left {
      font-size: .3rem;
    }
    .head-right {
      position: absolute;
      top: 0;
      right: 10px;
      color: #555;
    }
  }
</style>
