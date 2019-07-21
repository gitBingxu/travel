<template>
  <div class="all-city">
    <div class="city-wrap" v-for="(items, index) of cityList" :key="index">
      <a :id="items.alpha"></a>
      <banner :title="items.alpha"></banner>
      <ul class="alpha-item">
        <li class="city-item border" v-for="(item, index) of items.city" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import banner from './Banner'
import store from '@/store/store'

export default {
  name: 'AllCitl',
  components: {
    banner,
    store
  },
  data () {
    return {
      cityList: store.state.cityList
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
    background: #fff;
    font-size: .28rem;
    color: #212121;
    .city-item {
      float: left;
      width: 25%;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: .9rem;
      text-align: center;
    }
  }
</style>
