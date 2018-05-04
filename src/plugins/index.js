/**
 * @author Toweave (lizi)
 * @date 2018/5/3
 * @Description: plugins
 */
export default {
  install (Vue) {
    // 1. 注入全局组件
    Vue.mixin({
      methods: {
        testMethods () {
          console.log(19, this)
        }
      },
      created: function () {
        // 逻辑...
      }
    })

    // 2. 添加实例方法
    Vue.prototype.$formattingNumber = function (number, decimal, boolean) {
      if (isNaN(number) || number === null) {
        return '--'
      } else {
        if (isNaN(decimal)) {
          decimal = 0
        }
        let newNumber = Number(number)
        if (newNumber === 0) {
          return '--'
        } else {
          if (boolean !== true && boolean !== undefined) {
            return newNumber.toFixed(decimal)
          } else {
            return (newNumber.toFixed(decimal)).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
          }
        }
      }
    }
  }
}
