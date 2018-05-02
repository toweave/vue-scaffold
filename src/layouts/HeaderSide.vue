<template>
  <el-container>
    <el-header class="container-header" height="60px">Header</el-header>
    <el-container>
      <el-aside class="container-side" width="200px">Aside</el-aside>
      <el-container>
        <el-main class="container-body" :style="{'height': bodyHeight}">Main</el-main>
        <el-footer class="container-footer"  height="40px">Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'HeaderSide',
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
  .container {
  }

  .container-header {
    line-height: 60px;
    color: $white;
    background-color: $font;
  }

  .container-side {
    background-color: #f1f1f1;
  }

  .container-footer {
    line-height: 40px;
    background-color: #f1f1f1;
  }
</style>
