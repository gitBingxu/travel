<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  components: {

  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: 0,
        url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg'
      }, {
        id: 1,
        url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a4c27b0a5fc1d9e9e620225869089b12.jpg_750x200_e4720428.jpg'
      }, {
        id: 2,
        url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper-wrap /deep/ .swiper-pagination-bullet-active {
    background: #fff;
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
