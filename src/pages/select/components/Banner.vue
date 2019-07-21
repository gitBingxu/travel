<template>
  <div class="banner">
    <h2 class="title">{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'banner',
  props: ['title'],
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: .24rem;
  color: #212121;
  margin: .24rem .30rem;
  display: inline-block;
}
</style>
