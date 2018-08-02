<template>
  <div class="board" id="board">
    
    <div>
      <div class="matrix" id="create-board">
        
      </div>
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
  .table {
    padding: 20px;
    float: right;
    width: 70%;
    height: 100%;
  }

  .matrix {
    height: 80%;
    width: 50%;
  }
</style>