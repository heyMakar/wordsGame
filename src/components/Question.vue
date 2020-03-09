<template>
  <div>
    <img :src='imgLink' >
    <div class=flex-container v-if="!isGameEnd">
      <div v-for="(w, index) in splittedWord" :key="index">
        <div @click="moveChar({w, index})" class='container'>{{ w }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  computed: mapGetters(['word', 'splittedWord', 'imgLink', 'isGameEnd']),
  methods: {
    ...mapActions(['getWord', 'moveChar']),
    ...mapMutations(['REMOVE_CHAR']),
  },
  async mounted() {
    this.getWord();
  }
}
</script>

<style scoped>
img {
  display: flex;
  margin: auto;
  width: 50%;
  padding: 10px;
}
.flex-container {
  display: flex;
  white-space: pre-wrap;
  justify-content: center;
}
.container {
  border: 1px solid black;
  width: 25px;
  height: 25px;
  font-size: 20px;
  margin-right: 5px;
  margin-bottom: 10px;
}
</style>