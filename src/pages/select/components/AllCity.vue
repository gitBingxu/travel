<template>
  <div class="all-city">
    <div class="city-wrap" v-for="items of cityList" :key="items.id">
      <a :id="items.alpha"></a>
      <banner :title="items.alpha"></banner>
      <ul class="alpha-item">
        <li class="city-item" v-for="item of items.city" :key="item.id"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import banner from './Banner'

export default {
  name: 'AllCitl',
  components: {
    banner
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .alpha-item {
    position: relative;
    overflow: hidden;
    width: 100%;
    list-style: none;
  }
</style>
