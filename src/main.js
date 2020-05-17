import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import routeConfig from './router-config'
Vue.use(VueRouter)
import VueKonva from 'vue-konva'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(VueKonva);
Vue.use(Element);

const router = new VueRouter({
	routes: routeConfig
});

new Vue({
    el: '#app',
	router,
	render: h => h(App)
})
