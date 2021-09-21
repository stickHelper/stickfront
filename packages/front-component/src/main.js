import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLogger from 'vuejs-logger'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Components from '@stickearn/stickfront'
import '@stickearn/stickfront/dist/stickfront.css'
import '@bit/stickcomponent.stickfront/styles-global'

Vue.use(Components)

const isProduction = process.env.NODE_ENV === 'production'

const options = {
  isEnabled: true,
  logLevel : isProduction ? 'error' : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true
}

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(VueLogger, options)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
