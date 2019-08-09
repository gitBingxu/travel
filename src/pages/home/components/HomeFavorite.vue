<template>
  <div class="fav-wrap">
    <div class="fav-head">
      <img class="head-img" src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
      <span class="head-text">猜你喜欢</span>
    </div>
    <ul class="fav-cont">
      <router-link to="/detail" tag="li" class="cont-item" v-for="item of favList" :key="item.id">
        <div class="item-left">
          <img class="left-img" :src="item.url" :alt="item.text">
        </div>
        <div class="item-right">
          <div class="title">{{item.text}}</div>
          <div class="comments">
            <ul style="display: flex; float: left;">
              <li v-for="(n, index) in 5" :key="index"><img class="star" src="@/assets/image/star.png"></li>
            </ul>
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
      </router-link>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'Favorite',
  props: {
    favList: {
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
              margin-left: 6px;
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
