import Vue, { VNode } from 'vue'
import App from './app.vue'
import Demo from '@/index'

Vue.config.productionTip = false

Vue.use(Demo)

new Vue({
  render: (h): VNode => h(App),
}).$mount('#app')
