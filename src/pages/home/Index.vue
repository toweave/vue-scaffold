<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <h1>{{$formattingNumber(123456789.111, 3)}}</h1>
    <a class="link-color">link-color</a>
    <el-button type="primary" @click="getDataLoading()">点击Loading</el-button>
    <el-button type="primary" :loading="booleanLoading" @click="getDataNoLoading()">点击No Loading</el-button>

    <el-button type="primary" :loading="false" @click="testAlert()">test</el-button>
    <input id="test" v-focus="testData">
    <div>{{watchData()}}</div>
    <div>{{testTime | date('yyyy-MM-dd HH:mm:ss.Z')}}</div>
    <!--<div>{{'123456789.1234567' | number(2)}}</div>-->
    <div>{{'toweave is a web maker.' | capitalize}}</div>
    <!--<div>{{testFocus()}}</div>-->
  </div>
</template>

<script>
import * as apiService from './services/home'
import mixin from '../../mixins'
export default {
  name: 'HomeIndex',
  mixins: [mixin],
  data () {
    return {
      msg: 'Welcome to HomeIndex',
      booleanLoading: false,
      testData: '123456789',
      testTime: 0
    }
  },
  methods: {
    watchData () {
      console.log(34)
    },
    testFocus () {
      console.log('1234789')
    },
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
      let params = {
        page: 1,
        limit: 4
      }
      let test = apiService.fetch(params)
      test.then((res) => {
        // this.booleanLoading = false
        console.log(24, res)
      })
    },
    getDataNoLoading () {
      let params = {
        page: 2,
        limit: 5
      }
      this.booleanLoading = true
      let test = apiService.fetchNoLoading(params)
      test.then((res) => {
        this.booleanLoading = false
        // this.booleanLoading = false
        console.log(24, res)
      })
    }
  },
  created () {
    console.log(69, this)
    // this.testMethods()
    // let number = 0
    setInterval(() => {
      this.testTime = new Date()
    }, 1000)
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
