import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/userTable',
      name: 'userTable',
      component: () => import(/* webpackChunkName: "userTable" */ './views/UserTable.vue')
	},
	{
		path: '/editUser/:id',
		name: 'editUser',
		component: () => import(/* webpackChunkName: "editUser" */ './views/EditUser.vue')
	}
  ]
})
