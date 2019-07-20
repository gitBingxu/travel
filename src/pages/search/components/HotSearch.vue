<template>
  <div class="hot-wrap">
    <sheader :optionsList="oplist"></sheader>
    <sear-item :optionsList="topHotList"></sear-item>
    <sear-item :optionsList="bottomList" class="bottom-search"></sear-item>
    <div class="hot-footer">
      <div class="footer-cont">搜索身边的景点</div>
    </div>
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
        img: 'https://imgs.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png',
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
        img: 'https://imgs.qunarzz.com/piao/fusion/1511/e8/d46972e07444bbf7.png',
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
  .hot-footer {
    background: #fff;
    height: 1.16rem;
    padding: .2rem .2rem ;
    color: #212121;
    box-sizing: border-box;
    .footer-cont {
      line-height: 38px;
      text-align: center;
      font-size: .26rem;
      border: 1px solid #e5e5e5;
    }
  }
</style>
