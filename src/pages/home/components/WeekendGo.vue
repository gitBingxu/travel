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
  props: {
    weekendList: {
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
