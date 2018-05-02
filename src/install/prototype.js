/**
 * Created by lizi on 2017/4/21.
 */
export default {
  install (Vue) {
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
