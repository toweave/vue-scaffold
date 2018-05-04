<template>
  <el-container class="main" height="60px">
    <el-header class="container-header">Header</el-header>
    <el-main class="container-body" :style="{'height': bodyHeight}">
      <router-view/>
    </el-main>
    <el-footer class="container-footer" height="40px">
      Copyright© Toweave’s vue-scaffold  version 0.0.1
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
  .main {
  }

  .container-header {
    line-height: 60px;
    color: $white;
    background-color: $font;
  }

  .container-footer {
    font-size: $sizeXS;
    line-height: 40px;
    background-color: $grayLight;
  }
</style>
