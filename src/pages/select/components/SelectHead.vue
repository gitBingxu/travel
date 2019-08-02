<template>
  <div class="select-wrap">
    <div class="head border-bottom">
      <span @click="back" class="iconfont back">&#xe624;</span>
      <span class="title">城市选择</span>
    </div>
    <ul class="tab">
      <li @click="toTerritory" :class="{active : !menuId}" id="0">境内</li>
      <li @click="toTerritory" :class="{active : menuId}" id="1">境外·港澳台</li>
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
      menuId: 0
    }
  },
  methods: {
    back () {
      this.$router.push('/')
    },
    toTerritory (e) {
      this.menuId = parseInt(e.target.id)
      if (this.menuId) {
        this.$router.push('/select/abroad')
      } else {
        this.$router.push('/select/cisborder')
      }
    },
    beforeDestroy () {
      this.menuId = 0
    }
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
      .back {
        font-size: .36rem;
        position: absolute;
        left: .2rem;
        bottom: .15rem;
      }
      .title {
        display: inline-block;
        font-size: .32rem;
        margin-top: .28rem;
      }
    }
    .tab {
      margin: .2rem 1rem;
      height: .4rem;
      box-sizing: content-box;
      list-style: none;
      border: 1px solid #e5e5e5;
      border-radius: 2px;
      li {
        float: left;
        width: 50%;
        text-align: center;
        font-size: .28rem;
        line-height: .4rem;
        box-sizing: border-box;
      }
      .active {
        background: #fff;
        color: #00bcd4;
      }
    }
  }
</style>
