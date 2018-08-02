<template>
  <div class="configuration">
    <h2>Select size</h2>
    <label class="label-rows">Rows</label>
    <input type="text" name="" value="" id="rows">
    <label class="label-columns">Columns</label>
    <input type="text" name="" value="" id="columns">
    <button type="button" name="button" @click="getDataBoard()">Create Board</button>
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
    height: 100%;
    padding: 15px;
	}
</style>