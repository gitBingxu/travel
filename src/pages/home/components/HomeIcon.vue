<template>
  <div class="icons-wrap">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon-item" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.url" class="img"/>
          </div>
          <p class="icon-text">{{item.content}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  components: {

  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconsList: [{
        id: 0,
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        content: '景点门票'
      }, {
        id: 1,
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        content: '故宫'
      }, {
        id: 2,
        url: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        content: '北京必游'
      }, {
        id: 3,
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        content: '水上乐园'
      }, {
        id: 4,
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        content: '爬长城'
      }, {
        id: 5,
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        content: '北京欢乐谷'
      }, {
        id: 6,
        url: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        content: '动植物园'
      }, {
        id: 7,
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        content: '野生动物园'
      }, {
        id: 8,
        url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png',
        content: '考生专项'
      }]
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
