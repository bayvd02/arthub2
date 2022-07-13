import {
  createApp
} from 'vue'
import App from './App.vue'
const app = createApp(App)

app.directive('draggable', {
  created: function (el, binding, vnode) {
    let pos = {
      left: 0,
      x: 0
    };
    const mouseDownHandler = function (e) {
      el.style.userSelect = 'none';

      pos = {
        left: el.scrollLeft,
        // Get the current mouse position
        x: e.clientX
      };
      pos.x = (e.type === "touchstart") ? e.touches[0].pageX : e.clientX;
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('touchmove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
      document.addEventListener('touchend', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      console.log(e.type)
      const dx = (e.type === "touchmove") ? e.touches[0].pageX - pos.x : e.clientX - pos.x;
      //console.log(pos.left, dx, e.touches[0].pageX, pos.x)
      // Scroll the element
      el.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
      el.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('touchmove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('touchend', mouseUpHandler);
      if (vnode.context) {

        setTimeout(() => vnode.context.$refs.scrollComponent.checkScroll(), 300);
      }

    };

    // Attach the handler
    el.addEventListener('mousedown', mouseDownHandler);
    el.addEventListener('touchstart', mouseDownHandler);
  }
});


let vm = app.mount('#app');
console.log(vm);