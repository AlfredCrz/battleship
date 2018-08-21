<template>
	<div id="game">
		<h1>juega!!!</h1>
		<table class="batle-table" border="1">
			<tbody>
				<tr v-for="row in rows" :key="row">
					<td v-for="column in columns" :key="column">

					</td>
				</tr>
			</tbody>
		</table>
		<div class="ships">
			<div class="ship-1"></div>
			<div class="ship-2"></div>
			<div class="ship-3"></div>
			<div class="ship-4"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Game',
		data() {
		    return {
		      rows: '',
		      columns : '',
		    }
		},
	  	mounted() {
		    EventBus.$on('size-change',(rows, cols) => {
		      this.rows = rows;
		      this.columns = cols;
		    })
	  	},
	};
</script>

<style>
  .game {
    float: right;
    width: 100%;
    height: 100%;
  }

  .batle-table {
  	float: left;
    width: 75%;
    height: 100%;
  }

  .ships {
  	float: right;
  	width: 25%;
  	height: 100%;
  	padding: 25px;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    background-image: url(../icon/font-game.jpg);
  }

  td, th {
    border: 2px solid #00091C;
    padding: 8px;
  }

  .ship-1 {
  	background-image: url(../icon/ship-1.jpg);
  	height: 100px;
  	width: 80px;
  }

  .ship-2 {
  	background-image: url(../icon/ship-2.jpg);
  	height: 100px;
  	width: 80px;
  }

  .ship-3 {
  	background-image: url(../icon/ship-3.jpg);
  	height: 100px;
  	width: 80px;
  }

  .ship-4 {
  	background-image: url(../icon/ship-4.jpg);
  	height: 100px;
  	width: 80px;
  }
</style>