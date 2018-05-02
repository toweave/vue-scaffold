<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <h1>{{$formattingNumber(123456789.111, 3)}}</h1>
    <a class="link-color">link-color</a>
    <el-button type="primary"  @click="getDataLoading()">点击Loading</el-button>
    <el-button type="primary" :loading="booleanLoading" @click="getDataNoLoading()">点击No Loading</el-button>

    <el-button type="primary" :loading="false" @click="testAlert()">test</el-button>
  </div>
</template>

<script>
import * as apiService from './services/home'

export default {
  name: 'HomeIndex',
  data () {
    return {
      msg: 'Welcome to HomeIndex',
      booleanLoading: false
    }
  },
  methods: {
    testAlert () {
      this.$store.commit({
        type: 'ACTIVE_ALERT',
        alert: {
          show: true,
          title: '提示',
          content: '消息已读！',
          buttonLeft: '确定',
          buttonRight: '取消',
          functionLeft: () => {
            console.log('你点击了确定')
          },
          functionRight: () => {
            console.log('你点击了取消')
          }
        }
      })
    },
    getDataLoading () {
      let params = ''
      let test = apiService.fetch(params)
      test.then((res) => {
        // this.booleanLoading = false
        console.log(24, res)
      })
    },
    getDataNoLoading () {
      let params = ''
      this.booleanLoading = true
      let test = apiService.fetchNoLoading(params)
      test.then((res) => {
        this.booleanLoading = false
        // this.booleanLoading = false
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
