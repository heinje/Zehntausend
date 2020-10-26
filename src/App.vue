<template>
  <button v-on:click="addPlayer">
    Spieler hinzuf&uuml;gen
  </button>
  <button v-on:click="reset">
    Punkte zur&uuml;cksetzen
  </button>
  <div v-bind:key="player.name" v-for="player in players" class="player">
    <PlayerComponent
      v-bind:player="player"
      v-on:delete="removePlayer(player)"
      v-on:new-name="player.name = $event"
    />
  </div>
  <div
    class="activePlayer"
    v-bind:style="{ display: players.length == 0 ? 'none' : '' }"
  >
    <ActivePlayerComponent
      v-bind:player="players[activeIndex]"
      v-on:points-round-added="players[activeIndex].pointsRound += $event"
      v-on:points-lost="
        players[activeIndex].pointsRound = 0;
        activeIndex = (activeIndex + 1) % players.length;
      "
      v-on:points-taken="
        players[activeIndex].points +=
          $event + players[activeIndex].pointsRound;
        players[activeIndex].pointsRound = 0;
        activeIndex = (activeIndex + 1) % players.length;
      "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlayerComponent from "./components/Player.vue";
import ActivePlayerComponent from "./components/ActivePlayer.vue";
import { Player } from "./data-objects/player";

export default defineComponent({
  name: "App",
  components: {
    PlayerComponent,
    ActivePlayerComponent
  },
  data: function() {
    return {
      players: [new Player("Neuer Spieler")],
      activeIndex: 0
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
        if (this.activeIndex > index) {
          this.activeIndex -= 1;
        }
      }
    },
    reset: function() {
      this.players.forEach(player => {
        player.points = 0;
        player.pointsRound = 0;
      });
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
button {
  background-color: whitesmoke;
  margin: 0 0 0 8px;
  padding: 2px 4px;
  border-radius: 6px;
  text-align: center;
  vertical-align: middle;
}
.player {
  margin: 20px 0;
}
.activePlayer {
  margin: 20px 0;
  padding: 20px;
}
</style>
