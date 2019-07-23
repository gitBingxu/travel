<template>
  <div class="select-city">
    <select-head></select-head>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import SelectHead from './components/SelectHead'

export default {
  name: 'SelectCity',
  components: {
    SelectHead
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.select-city {
  background: #e5e5e5;
}
</style>
