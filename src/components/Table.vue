<template>
  <div class="board" id="board" >
    <div class="matrix" id="create-board">
      <table class="batle-table" border="1">
        <tbody>
          <tr v-for="row in rows" :key="row">
            <td v-for="column in columns" :key="column">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {EventBus} from '@/services/event-bus';
export default {
  name: 'board',
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