import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Game from './components/Game.vue';

Vue.use(Router);

export default new Router({
  routes: [
	  {
	  	/*/game/:gameId/player/:playerId/board*/
	  	path: '/game/:gameId/player/:playerId/board',
	  	name: 'game',
	  	component: Game
	  },
	  {
	  	path: '/',
	  	name: 'home',
	  	component: Home
	  }
  ]
});