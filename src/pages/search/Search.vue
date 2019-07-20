<template>
  <div class="search-wrap">
    <search-header @search="handelSearch"></search-header>
    <div v-show="ifshow">
      <search-history :historyList="hitoryList" @clear="handelClear"></search-history>
      <hot-search></hot-search>
    </div>
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
      hitoryList: [],
      ifshow: true
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
  },
  mounted () {
    this.bus.$on('hide', () => {
      this.ifshow = false
    })
    this.bus.$on('show', () => {
      this.ifshow = true
    })
  }
}
</script>

<style lang="scss" scoped>
  .search-wrap {
    background: #e5e5e5;
  }
</style>
