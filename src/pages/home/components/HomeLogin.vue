<template>
  <div class="login-wrap">
    <div class="login">登录</div> |
    <div class="reg">注册</div> |
    <div class="about">关于我们</div>
  </div>
</template>

<script>
export default {
  name: 'HomeLogin',
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .login-wrap {
    color: #25a4bb;
    font-size: .28rem;
    display: flex;
    flex-direction: row;
    height: 0;
    padding-bottom: 10.67%;
    line-height: .8rem;
    justify-content: space-around;
    padding-left: 1rem;
    padding-right: 1rem;
  }
</style>
