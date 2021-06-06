import Vue from 'vue'
import App from 'oaie-sketch';

Vue.config.productionTip = false
console.log(App);
window.app = new Vue({
  render: h => h(App),
}).$mount('#app')
