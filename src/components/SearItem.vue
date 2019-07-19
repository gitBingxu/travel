<template>
  <div class="sear-wrap">
    <div class="sear-left">
      <img class="left-img" :src="optionsList.img">
    </div>
    <ul class="sear-right">
      <li class="right-item" v-for="item of optionsList.sightList" :key="item.id">{{item.cont}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearItem',
  props: {
    optionsList: {
      img: {
        type: String,
        required: true
      },
      sightList: {
        type: Array,
        required: true
      }
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
  .sear-wrap {
    overflow: hidden;
    height: 1.8rem;
    background: #fff;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #e5e5e5;
    .sear-left {
      position: relative;
      width: .72rem;
      margin: .27rem 0;
      box-sizing: border-box;
      text-align: center;
      border-right: 1px solid #e5e5e5;
      .left-img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: .3rem;
        height: .3rem;
        transform: translate(-50%, -50%);
        color: #e5e5e5;
      }
    }
    .sear-right {
      position: relative;
      overflow: hidden;
      font-size: .28rem;
      color: #333333;
      width: 6.78rem;
      .right-item {
        float: left;
        height: .36rem;
        max-width: 2.89rem;
        line-height: .36rem;
        text-align: center;
        padding-left: .3rem;
        padding-right: .3rem;
        border-right: 1px dashed #c9cccd;
        color: #333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: .25rem;
        margin-bottom: .25rem;
      }
    }
  }
</style>
