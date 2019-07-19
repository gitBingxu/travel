<template>
  <div>
    <sheader :optionsList="oplist"></sheader>
    <sear-item :optionsList="topHotList"></sear-item>
    <sear-item :optionsList="bottomList" class="bottom-search"></sear-item>
  </div>
</template>

<script>
import sheader from '@/components/SearHeader'
import SearItem from '@/components/SearItem'

export default {
  name: 'HotSearch',
  components: {
    sheader,
    SearItem
  },
  data () {
    return {
      oplist: {
        headText: '热门搜索',
        headIcon: './static/img/change.png',
        iconText: '换一换'
      },
      topHotList: {
        img: './static/img/sights.png',
        sightList: [{
          id: 0,
          cont: '八达岭长城'
        }, {
          id: 1,
          cont: '故宫'
        }, {
          id: 2,
          cont: '慕田峪长城'
        }, {
          id: 3,
          cont: '颐和园'
        }, {
          id: 4,
          cont: '北京欢乐谷'
        }, {
          id: 5,
          cont: '北水古镇'
        }]
      },
      bottomList: {
        img: './static/img/hotel.png',
        sightList: [{
          id: 0,
          cont: '绍兴'
        }, {
          id: 1,
          cont: '苏州'
        }, {
          id: 2,
          cont: '昌平区'
        }, {
          id: 3,
          cont: '怀柔区'
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .bottom-search {
    /deep/.sear-wrap {
      height: .9rem;
      .sear-right {
        .right-item {
          padding: 0 .44rem;
        }
      }
    }
  }
</style>
