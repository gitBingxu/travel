<template>
  <div class="recommand-wrap">
    <div class="title">
      <img class="title-img" src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单">
      <span class="title-hotrec">本周热门榜单</span>
      <span class="title-allrec">全部榜单</span>
    </div>
    <ul class="cont">
      <li class="cont-item" v-for="item of recommandList" :key="item.id">
        <div class="cont-img">
          <img class="img" :src="item.url" :alt="item.text">
        </div>
        <div class="cont-dest">{{item.text}}</div>
        <div class="cont-price">
          <span class="price">￥{{item.price}}</span>
          <span>起</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand',
  components: {

  },
  data () {
    return {
      recommandList: [{
        id: 0,
        url: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
        text: '故宫',
        price: 60
      }, {
        id: 1,
        url: 'https://imgs.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_250x250_50c99cf3.jpg',
        text: '八达岭长城',
        price: 40
      }, {
        id: 2,
        url: 'https://imgs.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_250x250_d852635b.jpg',
        text: '颐和园',
        price: 30
      }, {
        id: 3,
        url: 'https://imgs.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_250x250_63e3520a.jpg',
        text: '圆明园',
        price: 25
      }, {
        id: 4,
        url: 'https://imgs.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
        text: '世界园艺',
        price: 108
      }, {
        id: 5,
        url: 'https://imgs.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_250x250_090a42b6.jpg',
        text: '什刹海',
        price: 10
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .recommand-wrap {
    height: 0;
    padding-bottom: 48%;
    margin-top: .2rem;
    background: #fff;
    padding-left: .24rem;
    .title {
      position: relative;
      height: 40px;
      display: flex;
      padding: 12px 0;
      box-sizing: border-box;
      .title-img {
        width: 15px;
        height: 15px;
      }
      .title-hotrec {
        font-size: 16px;
        margin-left: 4px;
      }
      .title-allrec {
        position: absolute;
        padding-top: 2px;
        font-size: 13px;
        right: 15px;
        color: gray;
      }
    }
    .cont {
      list-style: none;
      display: flex;
      flex: row;
      overflow-x: scroll;
      white-space: nowrap;
      font-size: 12px;
      text-align: center;
      .cont-item {
        position: relative;
        display: inline-block;
        padding: .06rem 0 .2rem;
        width: 2rem;
        margin: 0 .08rem;
        .cont-img {
          overflow: hidden;
          width: 2rem;
          height: 0;
          padding-bottom: 100%;
          .img {
            margin: 0 auto;
            width: 100%;
          }
        }
        .cont-dest {
          margin: .1rem 0;
        }
        .cont-price {
          .price {
            color: #ff8300;
          }
        }
      }
    }
  }
</style>
