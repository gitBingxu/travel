<template>
  <div>
    <detail-banner :imgUrl="imgList"></detail-banner>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/banner'

export default {
  name: 'Detail',
  components: {
    DetailBanner
  },
  data () {
    return {
      imgList: []
    }
  },
  methods: {
    // async getDetailInfo () {
    //   let res = await this.$http.getDetail()
    //   const {code, data} = res
    //   if (code === 1) {
    //     this.imgList = data.imgList
    //   }
    // }
    getDetailInfo () {
      axios.get('api/detail.json').then(res => {
        const {code, data} = res.data
        if (code) {
          this.imgList = data.imgList
        }
      })
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="scss" scoped>

</style>
