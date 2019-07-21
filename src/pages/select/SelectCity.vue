<template>
  <div class="select-city">
    <select-head></select-head>
    <hot-city></hot-city>
    <alpha-tab></alpha-tab>
    <all-city></all-city>
  </div>
</template>

<script>
import SelectHead from './components/SelectHead'
import HotCity from './components/HotCity'
import AlphaTab from './components/AlphaTab'
import AllCity from './components/AllCity'
import store from '@/store/store'
import axios from 'axios'

export default {
  name: 'SelectCity',
  components: {
    SelectHead,
    HotCity,
    AlphaTab,
    AllCity,
    store,
    axios
  },
  data () {
    return {

    }
  },
  methods: {
    getHot () {
      axios.get('/api/hot.json').then(this.createHotList)
    },
    createHotList (res) {
      const {code, data} = res.data
      if (code) {
        store.commit('toHotList', data.hotList)
      }
    }
  },
  beforeMount () {
    this.getHot()
  }
}
</script>

<style lang="scss" scoped>
.select-city {
  background: #e5e5e5;
}
</style>
