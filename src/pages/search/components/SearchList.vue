<template>
  <div class="wrap">
    <div class="head">
      <span class="head-left">搜索建议</span>
      <span class="head-right" @click="close">关闭</span>
    </div>
    <ul class="search">
      <li class="search-item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" src="https://imgs.qunarzz.com/piao/fusion/1608/cf/7635983375250702.png">
        <p class="item-cont">搜索<b>{{item.name}}</b>的全部景点</p>
      </li>
      <li class="search-item border-bottom" v-show="ifShow">没有符合数据！</li>
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
  },
  methods: {
    close () {
      this.$emit('close')
    }
  },
  computed: {
    ifShow () {
      return !this.list.length
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
      position: absolute;
      left: 10px;
    }
    .head-right {
      position: absolute;
      right: 10px;
    }
  }
  .search {
    padding: 0 .3rem;
    color: #666;
    font-size: .28rem;
    text-align: left;
    background: #ffffff;
    .search-item {
      height: .8rem;
      line-height: .8rem;
      border: #666;
      .item-img {
        float: left;
        width: .3rem;
        height: .3rem;
        margin: .25rem .1rem .25rem;
      }
    }
  }
</style>
