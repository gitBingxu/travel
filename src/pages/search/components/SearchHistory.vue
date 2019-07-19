<template>
  <div class="his-wrap" v-show="isShow">
    <sheader :optionsList="historyHeader" @clear="clear"></sheader>
    <ul class="his-item">
      <li class="item" v-for="(item, index) of historyList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import sheader from '@/components/SearHeader'

export default {
  name: 'SearchHistory',
  components: {
    sheader
  },
  props: {
    historyList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      historyHeader: {
        headText: '搜索历史',
        headIcon: './static/img/delete.png',
        iconText: '清除'
      }
    }
  },
  computed: {
    isShow: function () { return this.historyList.length }
  },
  methods: {
    clear () {
      this.$emit('clear')
    }
  }
}
</script>

<style lang="scss" scoped>
  .his-wrap {
    background: #fff;
    margin-top: .1rem;
    .his-item {
      height: 1.24rem;
      width: 100%;
      overflow-y: hidden;
      display: flex;
      flex-direction: row;
      overflow-y: scroll;
      align-items: center;
      .item {
        height: .64rem;
        padding: 0 .15rem;
        font-size: .28rem;
        color: #333333;
        text-align: center;
        line-height: .64rem;
        margin-left: .3rem;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
      }
    }
  }
</style>
