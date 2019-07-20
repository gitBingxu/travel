<template>
  <div class="search-wrap">
    <search-header @search="handelSearch"></search-header>
    <search-history :historyList="hitoryList" @clear="handelClear"></search-history>
    <hot-search></hot-search>
  </div>
</template>

<script>
import SearchHeader from './components/SearchHeader'
import SearchHistory from './components/SearchHistory'
import HotSearch from './components/HotSearch'

export default {
  name: 'Search',
  components: {
    SearchHeader,
    SearchHistory,
    HotSearch
  },
  data () {
    return {
      hitoryList: []
    }
  },
  methods: {
    handelSearch (item) {
      const list = this.hitoryList
      if (!list.length || list.indexOf(item) < 0) {
        if (list.length >= 3) {
          list.shift()
        }
        list.push(item)
      }
    },
    handelClear () {
      this.hitoryList = []
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-wrap {
    background: #e5e5e5;
  }
</style>
