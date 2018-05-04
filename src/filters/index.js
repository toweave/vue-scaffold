// 注册一个全局filter
const capitalize = (value) => {
  if (!value) {
    return ''
  } else {
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}

const number = (value, decimals, point, separator) => {
  if (!value) {
    return ''
  } else {
    /**
     * @author Toweave (lizi)
     * @date 2018/5/4
     * @Description: XXX
     * number：要格式化的数字
     * decimals：保留几位小数
     * point：小数点符号
     * separator：千分位符号
     */
    value = (value + '').replace(/[^0-9+-Ee.]/g, '')
    let number = !isFinite(+value) ? 0 : +value
    let decimal = !isFinite(+decimals) ? 0 : Math.abs(decimals)
    let sep = (typeof separator === 'undefined') ? ',' : separator
    let dec = (typeof point === 'undefined') ? '.' : point
    let string = ''
    let reg = /(-?\d+)(\d{3})/
    let toFixedFix = function (number, sep) {
      let fix = Math.pow(10, sep)
      return '' + Math.ceil(number * fix) / fix
    }
    string = (decimal ? toFixedFix(number, decimal) : '' + Math.round(number)).split('.')
    while (reg.test(string[0])) {
      string[0] = string[0].replace(reg, '$1' + sep + '$2')
    }

    if ((string[1] || '').length < decimal) {
      string[1] = string[1] || ''
      string[1] += new Array(decimal - string[1].length + 1).join('0')
    }
    return string.join(dec)
  }
}

const date = (value, reg) => {
  if (!value) {
    return ''
  } else {
    let date = new Date(value)
    let tempYear = '' + date.getFullYear()
    let tempMonth = ('0' + (date.getMonth() + 1)).slice(-2)
    let tempDate = ('0' + date.getDate()).slice(-2)
    let tempHours = ('0' + date.getHours()).slice(-2)
    let tempMinutes = ('0' + date.getMinutes()).slice(-2)
    let tempSeconds = ('0' + date.getSeconds()).slice(-2)
    let tempMilliseconds = date.getMilliseconds() > 9 ? (date.getMilliseconds() > 99 ? date.getMilliseconds() : ('0' + date.getMilliseconds()).slice(-3)) : ('00' + date.getMilliseconds()).slice(-3)
    // let tempNumber = tempYear + tempMonth + tempDate + tempHours + tempMinutes + tempSeconds + tempMilliseconds
    if (!reg) {
      return date
    } else {
      let format = reg
      if (reg.indexOf('yy') !== -1 && reg.indexOf('yyyy') === -1) {
        format = format.replace('yy', tempYear.slice(-2))
      }
      if (reg.indexOf('yyyy') !== -1) {
        format = format.replace('yyyy', tempYear)
      }
      if (reg.indexOf('MM') !== -1) {
        format = format.replace('MM', tempMonth)
      }
      if (reg.indexOf('dd') !== -1) {
        format = format.replace('dd', tempDate)
      }
      if (reg.indexOf('HH') !== -1) {
        format = format.replace('HH', tempHours)
      }
      if (reg.indexOf('mm') !== -1) {
        format = format.replace('mm', tempMinutes)
      }
      if (reg.indexOf('ss') !== -1) {
        format = format.replace('ss', tempSeconds)
      }
      if (reg.indexOf('Z') !== -1) {
        format = format.replace('Z', tempMilliseconds)
      }
      return format
    }
  }
}

export {capitalize, number, date}
