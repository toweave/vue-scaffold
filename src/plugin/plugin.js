/**
 * Created by lizi on 2017/4/21.
 */
export default {
  install (Vue) {
    Vue.prototype.$formattingNumber = function (number, decimal, boolean) {
      if (isNaN(number) || number === null) {
        return '--'
      } else {
        if (decimal === false) {
          let newNumber = Number(number)
          if (newNumber === 0) {
            return number
          } else {
            if (boolean !== true && boolean !== undefined) {
              return newNumber.toString()
            } else {
              return (newNumber.toString()).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
            }
          }
        } else {
          let newNumber = Number(number)
          if (newNumber === 0) {
            return number
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
}
