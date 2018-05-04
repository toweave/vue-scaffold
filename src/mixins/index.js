/**
 * @author Toweave (lizi)
 * @date 2018/5/3
 * @Description: 应用混入对象
 * @todo: methods
 */
const mixin = {
  methods: {
    foo: () => {
      console.log('foo')
    },
    conflicting: () => {
      console.log('from mixin')
    }
  },
  created: function () {
    console.log('混入对象的钩子被调用')
  }
}

export default mixin
