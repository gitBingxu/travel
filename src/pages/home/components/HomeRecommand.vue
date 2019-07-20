<template>
  <div class="recommand-wrap">
    <div class="title">
      <img class="title-img" src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单">
      <span class="title-hotrec">本周热门榜单</span>
      <span class="title-allrec">全部榜单</span>
    </div>
    <ul class="cont">
      <li class="cont-item" v-for="item of recommendList" :key="item.id">
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
  props: {
    recommendList: {
      type: Array,
      required: true
    }
  },
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .recommand-wrap {
    height: 0;
    padding-bottom: 50%;
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
      overflow-x: scroll;
      white-space: nowrap;
      font-size: 12px;
      text-align: center;
      padding-right: .24rem;
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
