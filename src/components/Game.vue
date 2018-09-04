<template>
  <div class="game" id="game" >
    <div class="ships">
      <div class="ships-container" id="ships-container">
        <div @click="girar()" id="2" class="ship"><img class="position-ship-two" src="../icon/ship-2.png"></div>
        <div id="3" class="ship"><img class="position-ship-three" src="../icon/ship-3.jpg"></div>
        <div id="4" class="ship"><img class="position-ship-four" src="../icon/ship-4.png"></div>
        <div id="5" class="ship"><img class="position-ship-five" src="../icon/ship-5.jpg"></div>
      </div>
      <hr><hr><hr><hr><hr>
      <button @click="save()">Play Game</button>
    </div>
    <div class="board-game">
        <table class="batalla" border="1">
            <tr v-for="row in 20" :key="row">
              <td class="casilla" v-for="column in 20" :key="column" :id="row+'-'+column">
              </td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
import * as dragula from 'dragula';
import {EventBus} from '@/services/event-bus';
var dato = 0 ;
console.log(dato)
export default {
  name: 'game',
  data() {
    return {
      rows: '',
      columns : '',
    }
  },
  mounted() {
    EventBus.$on('size-board',(rows, cols) => {
      dato = rows;
      this.rows = rows,
      this.columns = cols;
    });
    this.dragAndDrop();
  },
  methods: {
    dragAndDrop() {
      for (var i = 1; i < 21; i++) {
        for (var j = 1; j < 21; j++) {
          dragula([document.getElementById('ships-container'), document.getElementById(i+'-'+j)], {
            copy: function (el, source) {
              return source === document.getElementById('ships-container')
            },
            accepts: function (el, target) {
              return target !== document.getElementById('ships-container')
            }
          });
        }
      }
    },
    girar() {
      console.log('girar')
      console.log(dato)

    },
    save() {
      for (var i = 1; i < 11; i++) {
        for (var j = 1; j < 11; j++) {
          console.log(document.getElementById(i + '-' + j).childNodes)
        }
      }
    }
  }
};
</script>

<style>

.ships-container {
  width: 100%;
  height: 50%;
  background-color: white;
}

.ships-container > .ship > img {
  width: 200px;
  height: 40px;
}

.ships-container > .ship {
  padding: 20px;
}

.ships-container > .ship > img:hover {
  border: 1px solid black;
}

td > div > .position-ship-two {
  width: 56px;
  height: 23px;
}

td > div > .position-ship-five:hover {
  transform: rotateZ(90deg);
}

td > div > .position-ship-three {
  width: 84px;
  height: 23px;
}

td > div > .position-ship-four {
  width: 112px;
  height: 23px;
}

td > div > .position-ship-five {
  width: 140px;
  height: 23px;
}

.ship {
  width: 20px;
  height: 20px;
}

.ships {
  float: left;
  width: 20%;
  height: 580px;
  background-color: blue;
  box-sizing: border-box;
}

.board-game {
  float: right;
  width: 80%;
  height: 580px;
  padding: 10px;
  background-color: #010C17;
  box-sizing: border-box;
}

.casilla {
  padding: 0px;
  width: 28px;
  height: 28px;
  border: 1px solid black;
  box-sizing: border-box;
}

.casilla:hover {
  background-color: blue;
  opacity: 0.5;
}

.batalla {
  margin: auto;
  border-collapse: collapse;
  background-image: url(../icon/font-game.jpg);
}

</style>