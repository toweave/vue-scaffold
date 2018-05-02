<template>
  <el-container class="main" height="60px">
    <el-header class="main-header">Header</el-header>
    <el-main class="main-body" :style="{'height': bodyHeight}" ref="mainBody">
      <router-view/>
    </el-main>
    <el-footer class="main-footer" height="40px">
      Copyright© Toweave’s vue-scaffold  version 1.1.3
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Main',
  components: {},
  computed: {},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bodyHeight: ''
    }
  },
  methods: {},
  created () {
  },
  mounted () {
    let height = document.documentElement.clientHeight || document.body.clientHeight;
    this.bodyHeight = height - (60 + 40) + 'px'
  },
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import '../styles/index.scss';
  .main {
  }

  .main-header {
    line-height: 60px;
    color: $white;
    background-color: $main;
  }

  .main-footer {
    font-size: $sizeXS;
    line-height: 40px;
    background-color: $grayLight;
  }
</style>
