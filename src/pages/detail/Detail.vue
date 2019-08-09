<template>
  <div>
    <detail-banner :imgUrl="faceImg" :imgList="imgList" :title="title"></detail-banner>
  </div>
</template>

<script>
import DetailBanner from './components/banner'

export default {
  name: 'Detail',
  components: {
    DetailBanner
  },
  data () {
    return {
      imgList: [],
      faceImg: '',
      title: ''
    }
  },
  methods: {
    async getDetailInfo () {
      let res = await this.$http.getDetail()
      const {code, data} = res
      if (code === 1) {
        this.imgList = data.imgList
        this.faceImg = data.faceImg
        this.title = data.title
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="scss" scoped>

</style>
