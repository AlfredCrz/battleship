<template>
  <div id="app">
  	<h1 class="header">*|*  Battleship *|*</h1>
  <router-view/>
  </div>
</template>

<style>
html,body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

.header {
    text-align: center;
    margin: 0px;
    background-color: black;
    color: white;
    padding: 20px;
}
</style>