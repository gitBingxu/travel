<template>
  <div class="banner-wrap">
    <div class="img-container">
      <img class="bg-img" :src="imgUrl" alt="故宫详情">
    </div>
    <router-link to="/">
      <div class="back">
        <span class="iconfont back-icon">&#xe624;</span>
      </div>
    </router-link>
    <div class="img-count">
      <img class="img" src="/static/img/pic.png" alt="">
      <em class="text">{{count}}</em>
    </div>
    <h1 class="title">
      {{title}}
    </h1>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    imgList: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  components: {

  },
  data () {
    return {

    }
  },
  computed: {
    count () { return this.imgList.length }
  }
}
</script>

<style lang="scss" scoped>
  .banner-wrap {
    position: relative;
    .img-container {
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 55%;
    background: #e5e5e5;
    .bg-img {
      width: 100%
    }
  }
    .back {
      position: absolute;
      left: .1rem;
      top: .1rem;
      width: .72rem;
      height: .72rem;
      line-height: .72rem;
      border-radius: 50%;
      background: black;
      opacity: .5;
      .back-icon {
        color: #fff;
        opacity: 1;
        font-size: .4rem;
        margin-left: .1rem;
      }
    }
    .img-count {
      position: absolute;
      left: .2rem;
      bottom: .86rem;
      background-color: black;
      opacity: .5;
      width: 1.2rem;
      height: .4rem;
      border-radius: .2rem;
      .img {
        width: .24rem;
        height: .24rem;
        margin-left: .3rem;
        opacity: 1;
      }
      .text {
        line-height: .4rem;
        color: white;
        opacity: 1;
      }
    }
    .title {
      font-size: .36rem;
      line-height: .4rem;
      color: #fff;
      text-shadow: 0 1px 2px rgba(0,0,0,0.70);
      position: absolute;
      right: .2rem;
      bottom: .36rem;
      left: .2rem;
      min-height: .4rem;
      z-index: 1;
    }
    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      height: .6rem;
      width: 100%;
      background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
    }
  }
  </style>
