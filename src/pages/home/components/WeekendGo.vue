<template>
  <div class="week-wrap">
    <div class="week-title">周末去哪儿</div>
    <ul class="week-go">
      <li class="go-item" v-for="item of weekendList" :key="item.id">
        <div class="item-img">
          <img class="img" :src="item.url" :alt="item.title">
        </div>
        <div class="item-text">
          <p class="text-title">{{item.title}}</p>
          <p class="text-cont">{{item.cont}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WeekendGo',
  components: {

  },
  data () {
    return {
      weekendList: [{
        id: 0,
        url: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '京城周末撒欢',
        cont: '在帝都过周末，不仅仅是城中游'
      }, {
        id: 1,
        url: 'https://imgs.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
        title: '京城溜娃必须去',
        cont: '德智体美劳全面发展的亲子日，这些地方该去看看，难道不是么'
      }, {
        id: 2,
        url: 'https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '京都必打卡',
        cont: '来北京必去的经典非这些地方莫属'
      }, {
        id: 3,
        url: 'https://imgs.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
        title: '漂流勇进，烧烤露营',
        cont: '轻松水上漂，任我乐逍遥'
      }, {
        id: 4,
        url: 'https://imgs.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
        title: '北京清凉避暑胜地',
        cont: '到大自然中享受“天然空调”的清凉'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .week-wrap {
    background: #fff;
    .week-title {
      height: .8rem;
      line-height: .8rem;
      padding-left: .26rem;
      font-size: .28rem;
      background: #e5e5e5;
    }
    .week-go {
      position: relative;
      width: 100%;
      overflow: hidden;
      .go-item {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 53.33%;
        .item-img {
          overflow: hidden;
          height: 0;
          padding-bottom: 36.5%;
          .img {
            width: 100%;
          }
        }
        .item-text {
          padding: .14rem .2rem .2rem;
          .text-title {
            font-size: .28rem;
            line-height: .48rem;
            padding-right: 1.4rem;
          }
          .text-cont {
            overflow: hidden;
            font-size: .24rem;
            line-height: .42rem;
            color: #616161;
            text-overflow: ellipsis;
            padding-right: 1.4rem;
            white-space: nowrap;
          }
        }
      }
    }
  }
</style>
