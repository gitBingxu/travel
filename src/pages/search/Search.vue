<template>
  <div class="search-wrap">
    <search-header></search-header>
  </div>
</template>

<script>
import SearchHeader from './components/SearchHeader'
export default {
  name: 'Search',
  components: {
    SearchHeader
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .search-wrap {
    background: #e5e5e5;
  }
</style>
