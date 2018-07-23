import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import VueRouter from 'vue-router'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history', // 开启history模式，去＃
	routes:[...routes],
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
