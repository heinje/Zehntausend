<template>
  <div>
    <button v-on:click="this.$emit('delete')">x</button>
    <div class="name">{{ player.name }}</div>
    <div>Punkte: {{ points }}</div>
    <div>Diese Runde: {{ pointsRound }}</div>
    <input
      type="number"
      v-model="pointsAdd"
      placeholder="(Punkte)"
      class="zahl"
    />
    <button
      v-on:click="
        pointsRound = Number(pointsRound) + Number(pointsAdd);
        pointsAdd = 0;
      "
    >
      Weiter
    </button>
    <button
      v-on:click="
        points = Number(points) + Number(pointsRound) + Number(pointsAdd);
        pointsRound = 0;
        pointsAdd = 0;
      "
    >
      Passe!
    </button>
    <button
      v-on:click="
        pointsRound = 0;
        pointsAdd = 0;
      "
    >
      Tot!
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Player",
  props: ["player"],
  data: function() {
    return {
      name: this.$props.player.name,
      points: 0,
      pointsRound: 0,
      pointsAdd: 0
    };
  }
});
</script>

<style scoped>
div {
  display: inline;
  margin: 10px;
}
button {
  margin: 10px;
}
input.zahl {
  width: 60px;
}
</style>
