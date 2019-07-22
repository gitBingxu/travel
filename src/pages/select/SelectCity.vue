<template>
  <div class="select-city">
    <select-head></select-head>
    <keep-alive>
      <router-view/>
    </keep-alive>
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
  }
}
</script>

<style lang="scss" scoped>
.select-city {
  background: #e5e5e5;
}
</style>
