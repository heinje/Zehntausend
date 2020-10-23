<template>
  <div v-bind:key="player.name" v-for="player in players">
    <PlayerComponent
      v-bind:player="player"
      v-on:delete="removePlayer(player)"
    />
  </div>
  <button v-on:click="addPlayer">
    +
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlayerComponent from "./components/Player.vue";
import { Player } from "./data-objects/player";

export default defineComponent({
  name: "App",
  components: {
    PlayerComponent
  },
  data: function() {
    return {
      players: [new Player("Spieler 1")]
    };
  },
  methods: {
    addPlayer: function() {
      this.players.push(new Player("Neuer Spieler"));
    },
    removePlayer: function(player: Player) {
      const index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
