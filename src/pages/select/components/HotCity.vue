<template>
  <div class="hot-wrap">
    <banner title="热门城市"></banner>
    <transition
      appear
      :appear-active-class="direction">
      <ul class="city">
        <li @click="changeLocate(item.name)"
          class="item border"
          v-for="(item, index) of cityList"
          :key="index" ref="locate"
        >
          {{item.name}}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
import banner from './Banner'
import store from '@/store/store'
import utils from '@/utils/utils'

export default {
  name: 'HotCity',
  props: {
    abroad: {
      type: Boolean,
      required: true
    }
  },
  components: {
    banner,
    store,
    utils
  },
  data () {
    return {

    }
  },
  computed: {
    cityList () {
      if (this.abroad) {
        return JSON.parse(sessionStorage.getItem('outHotList'))
      } else {
        return JSON.parse(sessionStorage.getItem('inHotList'))
      }
    },
    direction () {
      if (this.abroad) {
        return 'animated fadeInRight'
      } else {
        return 'animated fadeInLeft'
      }
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
