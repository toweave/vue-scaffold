<template>
  <div class="index">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ListIndex',
  data () {
    return {
      msg: 'Welcome to ListIndex'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import '../../styles/index.scss';

  .index {
    color: $red;
  }
</style>
