<template>
  <div class="home">
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
  }
}
</script>

<style>
</style>
