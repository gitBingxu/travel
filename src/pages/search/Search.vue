<template>
  <div class="search-wrap">
    <search-header @search="handelSearch" @input='handelInput'></search-header>
    <div v-show="ifshowHot">
      <search-history :historyList="hitoryList" @clear="handelClear" v-show="isShow"></search-history>
      <hot-search></hot-search>
    </div>
    <search-list :list="searchList" v-show="ifShowSuggest" @close="close"></search-list>
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
      ifshowHot: true,
      searchList: [],
      timer: '',
      input: '',
      ifShowSuggest: false
    }
  },
  computed: {
    isShow () {
      return this.hitoryList.length
    },
    allCity () {
      return JSON.parse(sessionStorage.getItem('allCities'))
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
    handelInput (string) {
      this.input = string
      if (string.length) {
        this.ifshowHot = false
        this.ifShowSuggest = true
      } else {
        this.ifshowHot = true
        this.ifShowSuggest = false
      }
    },
    close () {
      this.ifshowHot = true
      this.ifShowSuggest = false
    }
  },
  watch: {
    input () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (this.input) {
        this.timer = setTimeout(() => {
          this.searchList = []
          for (let i in this.allCity) {
            this.allCity[i].forEach((item) => {
              if (item.spell.indexOf(this.input) > -1 || item.name.indexOf(this.input) > -1) {
                this.searchList.push(item)
              }
            })
          }
        }, 100)
      } else {
        this.searchList = []
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
