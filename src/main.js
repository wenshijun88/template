import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'
import rfFormMake from 'rf-form-make'

Vue.use(ElementUI)
Vue.use(FormMaking)
Vue.use(rfFormMake)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
