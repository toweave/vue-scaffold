<template>
  <el-container class="container">
    <el-aside class="container-side" width="200px">Aside</el-aside>
    <el-main :style="{'height': bodyHeight}">Main</el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Side',
  components: {},
  computed: {},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bodyHeight: ''
    }
  },
  methods: {
    setBodyHeight () {
      let height = document.documentElement.clientHeight || document.body.clientHeight
      this.bodyHeight = height - (60 + 40) + 'px'
    }
  },
  created () {
  },
  mounted () {
    this.setBodyHeight()
  },
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import '../styles/index.scss';
  .container {
  }

  .container-side {
    background-color: #f1f1f1;
  }
</style>
