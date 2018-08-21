<template>
  <div class="configuration">
    <h2>Select size</h2>
    <label class="label-rows">Rows: </label>
    <input type="number" v-model.number="rows" id="rows" @click="getDataBoard()"><br>
    <label class="label-columns">Columns: </label>
    <input type="number" v-model.number="cols" id="columns" @click="getDataBoard()">
    <button type="button" @click="sendData()">Create Board</button>
    <hr><hr><hr><hr><hr>
    <h2>Join up</h2>
    <input type="text" id=""><button class="join">go</button>
  </div>
</template>

<script>
import {EventBus} from '@/services/event-bus';
export default {
  name: 'configuration',
  data() {
    return {
      rows: null,
      cols: null
    }
  },
  methods: {
    getDataBoard() {
      EventBus.$emit('size-change',this.rows, this.cols); 
    },
    sendData() {
      this.$router.push('/game');
    }
  }
};	
</script>

<style>
  .configuration {
    float: left;
    width: 30%;
    height: 500px;
    border-right: 1px solid black;
    background-color: #010617;
	}

  div input {
    margin-left: 50px;
  }

  div label {
    margin-left: 50px;
    color: white;
  }

  div h2 {
    margin-left: 50px;
    color: white;
  }

  div button {
    margin-top: 20px;
    margin-left: 50px;
    background-color: transparent;
    border-radius: 25%;
    color: white
  }

  .join {
    margin-left: 0px;
    border-radius: 0%;
  }
</style>