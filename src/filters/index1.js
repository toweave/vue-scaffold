
const capitalize = function (value) {
  if (!value) {
    return ''
  } else {
    console.log(8, typeof value, value)
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}

const date = function (value, reg) {
  if (!value) {
    return ''
  } else {
    let date = new Date(value)
    return date;
  }
}

export default {capitalize, date}
