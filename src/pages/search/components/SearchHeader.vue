<template>
  <div class="header-wrap">
    <div class="left">
      <span @click="back" class="iconfont back">&#xe624;</span>
    </div>
    <div class="mid">
      <input class="input" type="text" placeholder="输入城市或景点" v-model="search" ref="input" >
      <img class="reset" src="/static/img/reset.png" v-show="ifShow" @click="reset">
    </div>
    <div class="right" @click="handelClick">搜索</div>
  </div>
</template>

<script>
export default {
  name: 'SearchHeader',
  components: {

  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    handelClick () {
      if (this.search) {
        this.$emit('search', this.search)
        this.search = ''
      }
    },
    back () {
      this.$router.push('/')
    },
    reset () {
      this.search = ''
    }
  },
  mounted () {
    const that = this
    this.bus.$on('hotSearch', function (item) {
      that.search = item
    })
  },
  watch: {
    search: function () {
      this.$emit('input', this.search)
    }
  },
  computed: {
    ifShow () {
      return this.search.length
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-wrap {
    width: 100%;
    overflow: hidden;
    line-height: .88rem;
    height: .88rem;
    background: #fff;
    display: flex;
    flex-direction: row;
    .left {
      padding: 0 .2rem;
      width: .8rem;
      height: 100%;
      box-sizing: border-box;
      .back {
        font-size: .36rem;
        line-height: .36rem;
      }
    }
    .mid {
      padding: 0 .6rem 0 .2rem;
      background: #f2f2f2;
      color: #212121;
      border-radius: .3rem;
      box-sizing: border-box;
      flex: 1;
      height: .6rem;
      margin: .14rem 0;
      position: relative;
      .input {
        position: relative;
        float: left;
        display: block;
        width: 100%;
        height: .4rem;
        line-height: .4rem;
        padding: .1rem 0;
        background: #f2f2f2;
        border: 0;
        font-family: "Microsoft Yahei",Arial;
        font-size: .28rem;
        border-radius: .06rem;
        text-align: center;
      }
      .reset {
        width: .5rem;
        height: .44rem;
        position: absolute;
        top: .08rem;
        right: 2px;
      }
    }
    .right {
      width: .74rem;
      overflow: hidden;
      margin: 0 .13rem;
      text-align: center;
      font-size: .28rem;
      color: #212121;
    }
  }
</style>
