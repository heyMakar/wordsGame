<template>
  <div>
    <button v-if="!isGameEnd" @click="resetWord(word)" class="btn">Сброс</button>
    <div v-if="isGameEnd && isGameWin">
      <div>Вы выиграли, хотите повторить?</div>
      <button @click="nextGame">Конечно</button>
      <button>Я уже устал!</button>
    </div>
    <div v-if="isGameEnd && !isGameWin">
      <div>Вы проиграли!</div>
      <button @click="newGame">Начать заново</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: 
    mapGetters(['isGameEnd', 'isGameWin', 'word']),
  methods: mapActions(['nextGame', 'newGame', 'resetWord'])
}
</script>

<style scoped>
.btn {
  border: 2px solid blue;
  padding: 15px 32px;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
}
.btn:hover {
  background-color: blue;
  color: white;
}
</style>