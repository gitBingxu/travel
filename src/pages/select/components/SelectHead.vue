<template>
  <div class="select-wrap">
    <div class="head">
      <span @click="back" class="iconfont back">&#xe624;</span>
      <span class="title">城市选择</span>
    </div>
    <ul class="tab">
      <li @click="toDetailCity" :class="{active: isActive === item.id}" v-for="item of menuList" :key="item.id">{{item.cont}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SelectHead',
  components: {

  },
  data () {
    return {
      isActive: 1,
      menuList: [{
        id: 0,
        cont: '境内'
      }, {
        id: 1,
        cont: '境外·港澳台'
      }]
    }
  },
  methods: {
    back () {
      this.$router.push('/')
    }
    // toDetailCity (e) {

    // }
  }
}
</script>

<style lang="scss" scoped>
  .select-wrap {
    background: #00bcd4;
    font-size: .28rem;
    height: 1.5rem;
    color: #fff;
    .head {
      position: relative;
      height: .7rem;
      text-align: center;
      border-bottom: 1px solid #fff;
      .back {
        font-size: .36rem;
        position: absolute;
        left: .2rem;
        bottom: .15rem;
      }
      .title {
        display: inline-block;
        font-size: .32rem;
        margin-top: .3rem;
      }
    }
    .tab {
      margin: .2rem 1rem;
      height: .4rem;
      box-sizing: content-box;
      list-style: none;
      li {
        float: left;
        width: 50%;
        text-align: center;
        font-size: .28rem;
        line-height: .4rem;
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
        border-radius: 2px;
      }
      .active {
        background: #fff;
        color: #00bcd4;
      }
    }
  }
</style>
