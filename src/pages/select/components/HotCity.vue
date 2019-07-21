<template>
  <div class="hot-wrap">
    <banner title="热门城市"></banner>
    <ul class="city">
      <li @click="changeLocate(item)" class="item border" v-for="(item, index) of cityList" :key="index" ref="locate">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import banner from './Banner'
import store from '@/store/store'
import utils from '@/utils/utils'

export default {
  name: 'HotCity',
  components: {
    banner,
    store,
    utils
  },
  data () {
    return {
      cityList: ['北京', '上海', '三亚', '香港', '杭州', '广州', '成都', '深圳', '苏州', '桂林', '西安', '厦门']
    }
  },
  methods: {
    changeLocate (item) {
      utils.changeLocate(item)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  .hot-wrap {
    .city {
      width: 100%;
      overflow: hidden;
      list-style: none;
      position: relative;
      background: #fff;
      .item {
        float: left;
        width: 33.3%;
        height: .9rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: .28rem;
        color: #212121;
      }
    }
  }
</style>
