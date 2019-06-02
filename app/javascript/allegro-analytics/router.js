import VueRouter from 'vue-router'
import LoginView from './views/login'
import DashboardView from './views/dashboard'

const router = new VueRouter({
	mode: 'history',
	routes: [
	{
		path: '/login',
		component: LoginView,
		name: 'login_path'
	},
	{
		path: '/dashboard',
		component: DashboardView,
		name: 'dashboard_path'
	}
	]
})

export default router