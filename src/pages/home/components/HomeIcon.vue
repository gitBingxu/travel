<template>
  <div class="icons-wrap">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon-item" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" class="img"/>
          </div>
          <p class="icon-text">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconsList: {
      type: Array,
      required: true
    }
  },
  components: {

  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'styles/style.scss';
  /deep/ .swiper-container {
    overflow: hidden;
    height: 0;
    padding-bottom: 45%;
  }
  /deep/ .swiper-pagination-bullet-active {
    background: rgba(0,175,190,.8);
  }
  /deep/ .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
  }
  .icons-wrap {
    padding-top: .2rem;
    background: #fff;
    .icon-item {
      position: relative;
      overflow: hidden;
      float: left;
      height: 0;
      width: 25%;
      padding-bottom: 20%;
      .icon-img {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .55rem;
        .img {
          display: block;
          margin: 0 auto;
          height: 100%;
        }
      }
      .icon-text {
        position: absolute;
        line-height: .55rem;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
      }
    }
  }
</style>
