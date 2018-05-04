<template>
  <div class="modal-tip animated" v-show="alert.show">
    <div class="modal-tip__cell">
      <div class="modal-box animated flipInX">
        <div class="modal-box__cancel" @click="activeButtonRight(alert.functionRight)">
          <i class="modal-box__i el-icon-close"></i>
        </div>
        <div class="modal-box__header">
          <div class="modal-box__title">{{alert.title}}</div>
        </div>
        <div class="modal-box__body">
          <div class="modal-box__text">
            {{alert.content}}
          </div>
        </div>
        <div class="modal-box__footer">
          <div class="modal-box__buttons">
            <div class="modal-box__button modal-box__button-single"
                 v-show="alert.buttonLeft"
                 @click="activeButtonLeft(alert.functionLeft)">
              <span class="modal-box__span">{{alert.buttonLeft}}</span>
            </div>
            <div class="modal-box__button modal-box__button-single"
                 v-show="alert.buttonRight"
                 @click="activeButtonRight(alert.functionRight)">
              <span class="modal-box__span">{{alert.buttonRight}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Alert',
  components: {},
  data () {
    return {
      msg: 'Alert'
    }
  },
  computed: {
    ...mapGetters({
      alert: 'alert'
    })
  },
  methods: {
    activeButtonLeft (res) {
      this.alert.show = false
      if (typeof res === 'function') {
        res('确定')
      }
    },
    activeButtonRight (res) {
      this.alert.show = false
      if (typeof res === 'function') {
        res('取消')
      }
    }
  },
  created () {
  },
  mounted () {
  },
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/scss" rel="stylesheet/scss" lang="scss" scoped>
  @import '../styles/index.scss';

  .modal-tip {
    z-index: 99999;
    display: table;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $blackShade;

    &__cell {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
    }
  }

  .modal-box {
    display: inline-block;
    position: relative;
    min-width: 300px;
    max-width: 450px;
    /*min-height: 200px;*/
    padding: 0 20px;
    border-radius: 4px;
    background-color: $white;

    &__cancel {
      position: absolute;
      top: -12px;
      right: -12px;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background-color: $white;
      cursor: pointer;
    }

    &__i {
      font-size: $sizeXXS;
      line-height: 30px;
      font-weight: $weightThin;
    }

    &__header {
      float: left;
      width: 100%;
      margin-top: 12px;
      line-height: 40px;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
    }

    &__icon {
      float: left;
      width: 100%;
      height: 50px;
      background-size: 50px;
      background-position: center;
    }

    &__body {
      float: left;
      width: 100%;
      /*margin-top: 12px;*/
      margin-bottom: 42px;
      text-align: center;
    }

    &__text {
      float: left;
      width: 100%;
      word-break: break-all;
      margin: 12px 0 20px 0;
    }

    &__footer {
      float: left;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }

    &__buttons {
      float: left;
      width: 100%;
      margin-bottom: 12px;
      text-align: center;
    }

    &__button {
      display: inline-block;
      width: auto;
      min-width: 80px;
      height: 30px;
      font-size: 12px;
      line-height: 28px;
      border: 1px solid $main;
      border-radius: 4px;
      cursor: pointer;

      &-single {
        color: $white;
        background-color: $main;
      }
    }

    &__span {
      display: inline-block;
      padding: 0 10px;
    }

    &__button:hover {
      color: $white;
      background-color: $main;
    }
  }
</style>
