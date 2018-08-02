import Vue from 'vue';
import Router from 'vue-router';

import Configuration from './components/Configuration.vue';
import Table from './components/Table.vue';
import Home from './components/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
	  {
	  	path: '/',
	  	name: 'home',
	  	component: Home
	  }
  ],
});
