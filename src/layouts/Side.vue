<template>
  <el-container class="container">
    <el-aside class="container--side" width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>

</template>

<script>
export default {
  name: 'Side',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import '../styles/index.scss';
  .container {
    height: 600px;

    &--side {
      background-color: #f1f1f1;
    }
  }
</style>
