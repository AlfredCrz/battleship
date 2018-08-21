import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Configuration from './components/Configuration.vue';
import Table from './components/Table.vue';
import Game from './components/Game.vue';

Vue.use(Router);

export default new Router({
  routes: [
	  {
	  	path: '/home',
	  	name: 'home',
	  	component: Home
	  },
	  {
	  	path: '/game',
	  	name: 'game',
	  	component: Game
	  }
  ]
});