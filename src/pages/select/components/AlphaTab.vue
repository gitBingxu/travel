<template>
  <div class="alpha">
    <banner title="字母排序"></banner>
    <ul class="alpha-tab">
      <li class="alpha-item" v-for="(item, index) of alphaList" :key="index" >
        <a :href="alpha[item]">{{item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import banner from './Banner'

export default {
  name: 'AlphaTab',
  components: {
    banner
  },
  data () {
    return {
      alphaList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
  },
  computed: {
    alpha () {
      let obj = {}
      this.alphaList.forEach((item) => {
        obj[item] = '#' + item
      })
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>
  .alpha-tab {
    padding: .3rem 0;
    widows: 100%;
    position: relative;
    overflow: hidden;
    background: #fff;
    .alpha-item {
      width: 16.67%;
      float: left;
      line-height: .9rem;
      font-size: .28rem;
      display: flex;
      justify-content: space-around;
      a {
        text-decoration: none;
        color: #212121;
      }
    }
  }
</style>
