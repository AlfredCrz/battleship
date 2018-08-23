<template>
	<div class="game" id="game">
    <div class="ships">
      <div class="ships-container" id="ships-container">
        <div class="ship-one"> <img class="position-ship" src="../icon/ship-1.jpg"></div>
        <div class="ship-two"> <img class="position-ship" src="../icon/ship-2.png"></div>
        <div class="ship-three"> <img class="position-ship" src="../icon/ship-3.jpg"></div>
        <div class="ship-four"> <img class="position-ship" src="../icon/ship-4.png"></div>
        <div class="ship-five"> <img class="position-ship" src="../icon/ship-5.jpg"></div>
      </div>
    </div>
		<div class="board">
      <div class="matrix" id="create-board">
    		<table class="batle-table" border="1">
    			<tbody>
    				<tr v-for="row in rows" :key="row">
    					<td v-for="column in columns" :key="column" :id="row+''+column">
                <span>{{ row }} {{ column}}</span>
    					</td>
    				</tr>
    			</tbody>
    		</table>
      </div>
    </div>
	</div>
</template>

<script>
import * as dragula from 'dragula';
import {EventBus} from '@/services/event-bus';
export default {
  name: 'game',
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
    });
    this.dragAndDrop();

  },
  methods: {
    dragAndDrop() {
      for (var i = 1; i < 11; i++) {
        for (var j = 1; j < 11; j++) {
              dragula([document.getElementById('ships-container'), document.getElementById(i+''+j)], {
                copy: function (el, source) {
                  return source === document.getElementById('ships-container')
                },
                accepts: function (el, target) {
                  return target !== document.getElementById('ships-container')
                      }
                });
        }
      }
      console.log('as');
    }
  }
};
</script>

<style>
  .game {

  }

  .ships {
    float: left;
    width: 30%;
    height: 500px;
  }

  .ships-container {
    width: 250px;
    height: 300px;
  }


  .ship-one {
    width: 100%;
    height: 60px;
  }

  .position-ship {
    width: 100%;
    height: 100%;
  }

  .ship-two {
    width: 100%;
    height: 60px;
  }

  .ship-three {
    width: 100%;
    height: 60px;
  }

  .ship-four {
    width: 100%;
    height: 60px;
  }

  .ship-five {
    width: 100%;
    height: 60px;
    border: 1px solid black;
  }

  .board {
    float: right;
    width: 69%;
    height: 500px;
    background-color: #010C17;
  }

  .ships {
    float: left;
    width: 31%;
    height: 500px;
  }

  .matrix {
    margin-top: 50px;
    margin-left: 50px; 
    width: 80%;
    height: 80%;
  }

  .batle-table {
    width: 100%;
    height: 90%;
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
</style>