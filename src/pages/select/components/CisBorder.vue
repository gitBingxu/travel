<template>
  <div>
    <hot-city :abroad="false"></hot-city>
    <alpha-tab></alpha-tab>
    <all-city></all-city>
  </div>
</template>

<script>
import HotCity from './HotCity'
import AlphaTab from './AlphaTab'
import AllCity from './AllCity'

export default {
  name: 'CisBorder',
  components: {
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

</style>
