<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: {
      type: Array,
      required: true
    }
  },
  components: {

  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  /deep/ .swiper-pagination-bullets {
    margin-top: 94px;
    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
    }
    .swiper-pagination-bullet-active {
      background: #fff;
    }
  }
  .swiper-wrap {
    overflow: hidden;
    widows: 100%;
    height: 0;
    padding-bottom: 26.67%;
    background: #eee;
  }
  .swiper-img {
    width: 100%;
  }
</style>
