/**
 * Created by lizi on 2017/07/10.
 */
'use strict';
(function () {
  let lastTime = 0
  const vendors = ['webkit', 'moz']
  for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
      window[vendors[x] + 'CancelRequestAnimationFrame']
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      let currTime = new Date().getTime()
      let timeToCall = Math.max(0, 16.7 - (currTime - lastTime))
      lastTime = currTime + timeToCall
      let id = window.setTimeout(function () {
        callback(lastTime)
      }, timeToCall)
      return id
    }
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }
  /**
   * 设置window滚动条不抖动
   * @constructor
   * @param {components}
   */
  // let resizeMethod = function () {
  //   window.requestAnimationFrame(() => {
  //     document.querySelector('#body').style.width = window.innerWidth + 'px';
  //   });
  // };
  // resizeMethod();
  // window.addEventListener('resize', resizeMethod, true);
}())
