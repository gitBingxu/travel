<template>
  <div class="select-city">
    <select-head></select-head>
    <hot-city></hot-city>
    <alpha-tab></alpha-tab>
  </div>
</template>

<script>
import SelectHead from './components/SelectHead'
import HotCity from './components/HotCity'
import AlphaTab from './components/AlphaTab'

export default {
  name: 'SelectCity',
  components: {
    SelectHead,
    HotCity,
    AlphaTab
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
