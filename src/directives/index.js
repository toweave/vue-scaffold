// 注册一个全局自定义指令 `v-focus`
const focus = {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: (el, binding) => {
    // 聚焦元素
    console.log(7, el, binding)
    el.value = binding.value
    el.focus()
  }
}

export {focus}
