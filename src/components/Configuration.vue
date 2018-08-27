<template>
  <div class="configuration">
    <h2>Select size</h2>
    <label class="label-rows">Rows: </label>
    <input type="number" v-model.number="rows" id="rows" @click="getDataBoard()" min="10" max="30"><br>
    <label class="label-columns">Columns: </label>
    <input type="number" v-model.number="cols" id="columns" @click="getDataBoard()" min="10" max="30">
    <button type="button" @click="create(rows, cols)">Create Board</button>
    <hr><hr><hr><hr><hr>
    <h2>Join up</h2>
    <input type="text" id="" :value="inviteOponent"><button class="join" @click="goBoard()">go</button>
  </div>
</template>

<script>
import {EventBus} from '@/services/event-bus';
import CreateGame from '@/services/game/Create'


export default {
  name: 'configuration',
  data() {
    return {
      rows: null,
      cols: null,
      inviteOponent: null,
      game: null,
      player: null
    }
  },
  methods: {
    getDataBoard() {
      EventBus.$emit('size-change',this.rows, this.cols); 
    },
    create(rows, cols) {
      const URL = 'http://localhost:3000/game?token=';
      CreateGame.create({rows, cols})
      .then(response => {
        console.log(response.data)
        this.game = response.data.id;
        this.player = response.data.playerOneId;
        this.inviteOponent = URL + response.data.token;
      })
    },
    goBoard() {
    /*/game/:gameId/player/:playerId/board*/
      console.log('datos mandados'+this.rows+this.cols);
      this.$router.push('/game/'+this.game+'/player/'+this.player+'/board/');
      EventBus.$emit('size-board',this.rows, this.cols); 
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