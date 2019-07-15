<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-mid">
      <span class="iconfont header-search">&#xe632;</span>
      <input class="header-input" placeholder="输入城市/景点/游玩主题">
    </div>
    <div class="header-right">
      <span>地址</span>
      <span class="iconfont arrow-icon">&#xe600;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  $bgcolor: #00bcd4;
  .header{
    background-color: $bgcolor;
    width: 100%;
    line-height: .86rem;
    display: flex;
    flex-direction: row;
    color: #ffffff;
    .header-left {
      width: .64rem;
      .back-icon {
        font-size: .4rem;
        margin-left: .15rem;
      }
    }
    .header-mid {
      display: flex;
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      margin: .11rem 0 0 .2rem;
      padding: 0 .15rem;
      background: #ffffff;
      border-radius: .1rem;
      color: #ccc;
      .header-input {
        width: 100%;
      }
    }
    .header-right {
      min-width: 1.24rem;
      text-align: center;
      text-align: center;
      .arrow-icon {
        font-size: .32rem;
        margin-left: -.05rem;
      }
    }
  }
</style>
