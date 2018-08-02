<template>
  <div>
    <h1 class="hello">{{ msg }}</h1>
	<Configuration/>
	<Board/>
  </div>
</template>

<script>
import Configuration from '@/components/Configuration.vue';
import Board from '@/components/Table.vue';
export default {
  name: 'Home',
  components: {
  	Configuration,
  	Board
  },
  props: {
    msg: String
  }
  
}
</script>

<style>
  .hello {
    text-align: center;
    margin-top: 0%;
  }
</style>
