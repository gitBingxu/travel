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

export default {
  name: 'SelectCity',
  components: {
    SelectHead,
    HotCity,
    AlphaTab,
    AllCity
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
