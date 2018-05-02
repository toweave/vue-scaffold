<template>
  <div id="loading" class="loading" v-show="loading">
    <div class="loading__cell">
      <div class="loaders">
        <div class="loader">
          <div class="loader-inner pacman">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Loading',
  props: [],
  computed: {
    ...mapGetters({
      loading: 'loading'
    })
  },
  methods: {},
  mounted () {
  },
  watch: {},
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import '../styles/index.scss';

  .loading {
    z-index: 9999;
    display: table;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: $blackShade;

    &__cell {
      display: table-cell;
      position: relative;
      vertical-align: middle;
      text-align: center;
    }
  }

  /* loading animation */
  .loaders {
    display: inline-block;
    background-color: transparent;
  }

  .pacman {
    position: relative;
    background-color: transparent;
  }

  .pacman > div:nth-child(2) {
    -webkit-animation: pacman-balls 1s 0s infinite linear;
    animation: pacman-balls 1s 0s infinite linear;
    background-color: transparent;
  }

  .pacman > div:nth-child(3) {
    -webkit-animation: pacman-balls 1s 0.33s infinite linear;
    animation: pacman-balls 1s 0.33s infinite linear;
    background-color: transparent;
  }

  .pacman > div:nth-child(4) {
    -webkit-animation: pacman-balls 1s 0.66s infinite linear;
    animation: pacman-balls 1s 0.66s infinite linear;
    background-color: transparent;
  }

  .pacman > div:nth-child(5) {
    -webkit-animation: pacman-balls 1s 0.99s infinite linear;
    animation: pacman-balls 1s 0.99s infinite linear;
    background-color: transparent;
  }

  .pacman > div:first-of-type {
    width: 0;
    height: 0;
    border-right: 25px solid transparent;
    border-top: 25px solid $main;
    border-left: 25px solid $main;
    border-bottom: 25px solid $main;
    border-radius: 25px;
    -webkit-animation: rotate_pacman_half_up 0.5s 0s infinite;
    animation: rotate_pacman_half_up 0.5s 0s infinite;
    background-color: transparent;
  }

  .pacman > div:nth-child(2) {
    width: 0;
    height: 0;
    margin-top: -50px;
    border-right: 25px solid transparent;
    border-top: 25px solid $main;
    border-left: 25px solid $main;
    border-bottom: 25px solid $main;
    border-radius: 25px;
    -webkit-animation: rotate_pacman_half_down 0.5s 0s infinite;
    animation: rotate_pacman_half_down 0.5s 0s infinite;
    background-color: transparent;
  }

  .pacman > div:nth-child(3), .pacman > div:nth-child(4), .pacman > div:nth-child(5), .pacman > div:nth-child(6) {
    position: absolute;
    top: 25px;
    left: 100px;
    width: 10px;
    height: 10px;
    margin: 2px;
    border-radius: 100%;
    background-color: $main;
    -webkit-transform: translate(0, -6.25px);
    -ms-transform: translate(0, -6.25px);
    transform: translate(0, -6.25px);
  }

  @-webkit-keyframes pacman-balls {
    75% {
      opacity: 0.7;
    }

    100% {
      -webkit-transform: translate(-100px, -6.25px);
      transform: translate(-100px, -6.25px);
    }
  }

  @keyframes pacman-balls {
    75% {
      opacity: 0.7;
    }

    100% {
      -webkit-transform: translate(-100px, -6.25px);
      transform: translate(-100px, -6.25px);
    }
  }

  @-webkit-keyframes rotate_pacman_half_up {
    0% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }

    50% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }

    100% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }
  }

  @keyframes rotate_pacman_half_up {
    0% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }

    50% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }

    100% {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }
  }

  @-webkit-keyframes rotate_pacman_half_down {
    0% {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    50% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
  }

  @keyframes rotate_pacman_half_down {
    0% {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    50% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
  }
</style>
