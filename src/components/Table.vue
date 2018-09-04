<template>
  <div class="board" id="board" >
    <div class="matrix" id="create-board">
      <table class="batle-table" border="1">
        <tbody>
          <tr v-for="row in rows" :key="row">
            <td class="box" v-for="column in columns" :key="column">
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
    width: 70%;
    height: 580px;
    background-color: #010C17;
    box-sizing: border-box;
  }

  .matrix {
    margin-top: 20px;
    margin-left: 80px; 
    width: 80%;
    height: 100%;
  }

  .batle-table {
    width: 100%;
    height: 90%;
    border-collapse: collapse;
    background-image: url(../icon/font-game.jpg);
  }

  .box {
    border: 2px solid #00091C;
  }
</style>