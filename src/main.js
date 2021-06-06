import Vue from 'vue'
import App from 'oaie-sketch';

Vue.config.productionTip = false
window.app = new Vue({
  render: h => h(App),
}).$mount('#app')
