<template>
  <div>
    <button v-on:click="this.$emit('delete')">
      Spieler löschen
    </button>
    <div v-bind:style="{ display: isEditing ? 'none' : '' }">
      {{ player.name }}
    </div>
    <button
      v-on:click="isEditing = true"
      v-bind:style="{ display: isEditing ? 'none' : '' }"
    >
      Bearbeiten
    </button>
    <input v-model="name" v-bind:style="{ display: isEditing ? '' : 'none' }" />
    <button
      v-on:click="
        isEditing = false;
        $emit('new-name', name);
      "
      v-bind:style="{ display: isEditing ? '' : 'none' }"
    >
      Ok
    </button>
    <button
      v-on:click="
        isEditing = false;
        name = player.name;
      "
      v-bind:style="{ display: isEditing ? '' : 'none' }"
    >
      Abbrechen
    </button>
    <div>Punkte: {{ player.points }}</div>
    <div>Diese Runde: {{ player.pointsRound }}</div>
    <input
      type="number"
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
