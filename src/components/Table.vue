<template>
  <div class="board" id="board" >
    <div class="matrix" id="create-board">
      
    </div>
  </div>
</template>

<script>
import {EventBus} from '@/services/event-bus';
export default {
  name: 'board',
  methods: {
    drawBoard() {
       var codigoHTML="<table border=\"1\"><tbody>";
        for (var i = 0; i < this.rows; i++) {
          codigoHTML+="<tr>";
          for (var j = 0; j < this.columns; j++) {
            codigoHTML+="<td></td>";
          }
          codigoHTML+="</tr>";
        }
        codigoHTML+="</tbody></table>";
        document.getElementById("create-board").innerHTML = codigoHTML;
      }
  },
  data() {
    return {
      rows: '',
      columns : '',
    }
  },
  mounted() {
    EventBus.$on('dataBoard',(row, col) => {
      this.rows = row;
      this.columns = col;
      this.drawBoard();
    })
  },
};
</script>

<style>
  .board {
    float: right;
    width: 69%;
    height: 500px;
    background-color: #010C17;
  }

  .matrix {
    margin-top: 50px;
    margin-left: 50px; 
    width: 80%;
    height: 100%;
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