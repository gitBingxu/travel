<template>
  <div class="head">
    <div class="head-text">{{head}}</div>
    <div class="head-icon">
      <img class="icon-img" :src="icon">
      <span class="icon-text" @click="clear">{{text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sheader',
  props: {
    optionsList: {
      headText: {
        type: String,
        required: true
      },
      headIcon: {
        type: String,
        required: false
      },
      iconText: {
        type: String,
        required: false
      }
    }
  },
  components: {

  },
  data () {
    return {
      head: this.optionsList.headText,
      icon: this.optionsList.headIcon,
      text: this.optionsList.iconText
    }
  },
  methods: {
    clear () {
      this.$emit('clear')
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  position: relative;
  width: 100%;
  height: .7rem;
  line-height: .7rem;
  display: flex;
  flex-direction: row;
  background: #f0f5f6;
  font-size: .26rem;
  .head-text {
    color: #888888;
    padding: 0 .2rem;
  }
  .head-icon {
    position: absolute;
    height: 100%;
    overflow: hidden;
    right: .2rem;
    color: #00afc7;
    .icon-img {
      margin-top: -.06rem;
      width: .28rem;
      height: .28rem;
    }
  }
}
</style>
