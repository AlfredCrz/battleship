<template>
  <div class="configuration">
    <h2>Select size</h2>
    <label class="label-rows">Rows: </label>
    <input type="number" value="" id="rows"><br>
    <label class="label-columns">Columns: </label>
    <input type="number" value="" id="columns">
    <button type="button" @click="getDataBoard()">Create Board</button>
    <hr><hr><hr><hr><hr>
    <h2>Join up</h2>
    <input type="text" id=""><button class="join">go</button>
  </div>
</template>

<script>
import {EventBus} from '@/services/event-bus';
export default {
  name: 'configuration',
  methods: {
    getDataBoard() {
      var columns=(document.getElementById("columns").value);
      var rows=(document.getElementById("rows").value);
      console.log(rows, columns);
      EventBus.$emit('dataBoard',rows, columns);  
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