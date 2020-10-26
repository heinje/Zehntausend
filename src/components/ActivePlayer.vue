<template>
  <h3 class="header">
    {{ player.name }}
  </h3>
  <div class="overview">
    <div>
      Punkte:
      <div class="punkte">{{ player.points }}</div>
    </div>
    <div>
      Diese Runde:
      <div class="punkte">{{ player.pointsRound }}</div>
    </div>
  </div>
  <div class="input">
    <input
      type="number"
      step="50"
      v-model="pointsAdd"
      placeholder="(Punkte)"
      class="zahl"
    />
    <button
      v-on:click="
        $emit('points-round-added', Number(pointsAdd));
        pointsAdd = 0;
      "
    >
      Weiter
    </button>
    <button
      v-on:click="
        $emit('points-taken', Number(pointsAdd));
        pointsAdd = 0;
      "
    >
      Passe!
    </button>
    <button
      v-on:click="
        $emit('points-lost');
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
      isEditing: false,
      pointsAdd: 0
    };
  },
  components: {}
});
</script>

<style scoped>
div {
  display: inline-block;
  margin: 0 0 0 10px;
}
input {
  margin: 0 0 0 10px;
}
input.zahl {
  width: 60px;
}
input.name {
  width: 160px;
}
.name {
  display: inline-block;
  width: 200px;
  text-align: left;
}
.punkte {
  display: inline-block;
  width: 60px;
  text-align: right;
}
</style>
