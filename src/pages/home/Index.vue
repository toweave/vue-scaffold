<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <h1>{{$formattingNumber(123456789)}}</h1>
    <a class="link-color">link-color</a>
    <el-button type="primary" :loading="false" @click="getData()">加载中</el-button>
  </div>
</template>

<script>
import * as apiService from './services/home'

export default {
  name: 'HomeIndex',
  data () {
    return {
      msg: 'Welcome to HomeIndex'
    }
  },
  methods: {
    getData () {
      console.log(20, apiService)
      let params = ''
      let test = apiService.fetch(params)
      test.then((res) => {
        console.log(24, res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import '../../styles/index.scss';

  .index {
    color: red;
  }
</style>
