<template>
  <div>
    <button
      v-on:click="this.$emit('delete')"
      class="icon"
      title="Spieler l&ouml;schen"
    >
      <DeleteForever />
    </button>
    <div v-bind:style="{ display: isEditing ? 'none' : '' }" class="name">
      {{ player.name }}
    </div>
    <button
      v-on:click="isEditing = true"
      v-bind:style="{ display: isEditing ? 'none' : '' }"
      class="icon"
      title="Namen bearbeiten"
    >
      <Pencil />
    </button>
    <input
      v-model="name"
      v-bind:style="{ display: isEditing ? '' : 'none' }"
      class="name"
    />
    <button
      v-on:click="
        isEditing = false;
        $emit('new-name', name);
      "
      v-bind:style="{ display: isEditing ? '' : 'none' }"
      class="icon"
      title="&Uuml;bernehmen"
    >
      <CheckCircle />
    </button>
    <button
      v-on:click="
        isEditing = false;
        name = player.name;
      "
      v-bind:style="{ display: isEditing ? '' : 'none' }"
      class="icon"
      title="Abbrechen"
    >
      <CloseCircle />
    </button>
    <div>
      Punkte:
      <div class="punkte">{{ player.points }}</div>
    </div>
    <div>
      Diese Runde:
      <div class="punkte">{{ player.pointsRound }}</div>
    </div>
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
import { CheckCircle, CloseCircle, DeleteForever, Pencil } from "mdue";

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
  components: {
    CheckCircle,
    CloseCircle,
    DeleteForever,
    Pencil
  }
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
