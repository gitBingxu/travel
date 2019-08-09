<template>
  <div>
    <img :src="url" alt="">
    <div class="back">
      <span class="back-bg"></span>
      <span class="back-icon"></span>
    </div>
    <div class="img-count"></div>
    <div class="title"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  props: {
    imgUrl: {
      type: Array,
      required: true
    }
  },
  components: {

  },
  data () {
    return {

    }
  },
  computed: {
    url () {
      return this.imgUrl[0].url
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
