<template>
  <div class="search-wrap">
    <search-header @search="handelSearch" @input='handelInput'></search-header>
    <div v-show="ifshow">
      <search-history :historyList="hitoryList" @clear="handelClear" v-show="isShow"></search-history>
      <hot-search></hot-search>
    </div>
    <search-list></search-list>
  </div>
</template>

<script>
import SearchHeader from './components/SearchHeader'
import SearchHistory from './components/SearchHistory'
import HotSearch from './components/HotSearch'
import SearchList from './components/SearchList'

export default {
  name: 'Search',
  components: {
    SearchHeader,
    SearchHistory,
    HotSearch,
    SearchList
  },
  data () {
    return {
      hitoryList: [],
      ifshow: true
    }
  },
  computed: {
    isShow () {
      return this.hitoryList.length
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
    },
    // createSearchList (item) {},
    handelInput (string) {
      if (string.length) {
        this.ifshow = false
      } else {
        this.ifshow = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-wrap {
    background: #f0f5f6;
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
