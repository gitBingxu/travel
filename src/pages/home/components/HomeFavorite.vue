<template>
  <div class="fav-wrap">
    <div class="fav-head">
      <img class="head-img" src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
      <span class="head-text">猜你喜欢</span>
    </div>
    <ul class="fav-cont">
      <li class="cont-item" v-for="item of favList" :key="item.id">
        <div class="item-left">
          <img class="left-img" :src="item.url" :alt="item.text">
        </div>
        <div class="item-right">
          <div class="title">{{item.text}}</div>
          <div class="comments">
            <img class="star" src="@/assets/image/star.png">
            <img class="star" src="@/assets/image/star.png">
            <span class="comment">{{item.comments}}条评论</span>
          </div>
          <div class="price">
            <span class="type">￥</span>
            <span class="money">{{item.price}}</span>
            <span class="text">起</span>
            <span class="location">{{item.location}}</span>
          </div>
          <span class="tag" v-if="item.tag">{{item.tag}}</span>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'Favorite',
  components: {

  },
  data () {
    return {
      favList: [{
        id: 0,
        url: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
        text: '故宫',
        price: 60,
        tag: '世界五大宫之首，穿越与您近在咫尺',
        comments: 426846,
        location: '东城区'
      }, {
        id: 1,
        url: 'https://imgs.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_250x250_50c99cf3.jpg',
        text: '八达岭长城',
        price: 40,
        tag: '不到长城非好汉',
        comments: 1099486,
        location: '延庆县'
      }, {
        id: 2,
        url: 'https://imgs.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_250x250_d852635b.jpg',
        text: '颐和园',
        price: 30,
        tag: '',
        comments: 267898,
        location: '海淀区'
      }, {
        id: 3,
        url: 'https://imgs.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_250x250_63e3520a.jpg',
        text: '圆明园',
        price: 25,
        tag: '',
        comments: 4575435,
        location: '海淀区'
      }, {
        id: 4,
        url: 'https://imgs.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg',
        text: '世界园艺',
        price: 108,
        tag: '',
        comments: 456452,
        location: '海淀区'
      }, {
        id: 5,
        url: 'https://imgs.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_250x250_090a42b6.jpg',
        text: '什刹海',
        price: 10,
        tag: '老北京的温柔乡，签到圣地',
        comments: 78975434,
        location: '西城区'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .fav-wrap {
    padding-left: .24rem;
    margin-top: .2rem;
    background: #fff;
    .fav-head {
      height: 40px;
      display: flex;
      padding: 12px 0;
      box-sizing: border-box;
      .head-img {
        width: 15px;
        height: 15px;
      }
      .head-text {
        margin-left: 4px;
        font-size: 16px;
      }
    }
    .fav-cont {
      position: relative;
      overflow: hidden;
      padding-top: .2rem;
      .cont-item {
        display: flex;
        flex-direction: row;
        list-style: none;
        min-height: 2.4rem;
        padding: .2rem 0;
        border-bottom: 1px solid #e5e5e5;
        .item-left {
          float: left;
          overflow: hidden;
          width: 2rem;
          height: 2rem;
          .left-img {
            width: 100%;
            height: 100%;
          }
        }
        .item-right {
          position: relative;
          padding: 0 11px;
          width: 70%;
          min-height: 50%;
          .title {
            margin-top: .26rem;
            height: .44rem;
            color: #212121;
            font-size: .32rem;
            line-height: .44rem;
          }
          .comments {
            position: relative;
            margin-top: .14rem;
            height: .34rem;
            .star {
              margin-top: -6px;
              margin-right: -3px;
              width: 14px;
              height: 14px;
            }
            .comment {
              margin-left: 4px;
              color: #616161;
              font-size: .24rem;
              line-height: .34rem;
              vertical-align: text-bottom;
            }
          }
          .price {
            position: relative;
            color: #ff8300;
            margin-top: .22rem;
            .type {
              font-size: .24rem;
            }
            .money {
              font-size: .4rem;
            }
            .text {
              color: #616161;
              font-size: .24rem;
            }
            .location {
              position: absolute;
              right: 0;
              bottom: 0;
              color: #616161;
              font-size: .24rem;
            }
          }
          .tag {
            display: inline-block;
            padding: 0 5px;
            color: #f55;
            background: rgba(#FF0000, 0.05);
            font-size: .24rem;
            line-height: .35rem;
            margin-top: .48rem;
          }
        }
      }
    }
  }
</style>
