<template>
  <div id="app">
    <!--<transition name="animated-transition"-->
                <!--enter-active-class="animated fadeIn"-->
                <!--leave-active-class="animated fadeOut">-->
      <router-view></router-view>
    <!--</transition>-->
    <alert></alert>
    <loading></loading>
  </div>
</template>

<script>
import Alert from './components/Alert.vue'
import Loading from './components/Loading.vue'
export default {
  name: 'App',
  components: {Alert, Loading},
  data () {
    return {
      msg: 'App'
    }
  },
  computed: {
  },
  methods: {
  },
  created () {
  },
  mounted () {
  },
  watch: {}
}
</script>

<style type="text/scss" rel="stylesheet/scss" lang="scss">
  @import './styles/index.scss';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $font;
  }
</style>
