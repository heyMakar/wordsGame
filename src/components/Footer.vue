<template lang='pug'>
  div
    button(v-if="!isGameEnd" @click="resetWord(word)" class="btn") Сброс
    div(v-if="isGameEnd && isGameWin")
      div Вы выиграли, хотите повторить?
      button(@click="nextGame") Конечно
      button(@click="quitGame") Я уже устал!
    div(v-if="isGameEnd && !isGameWin")
      div Вы проиграли!
      button(@click="newGame") Начать заново
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: 
    mapGetters(['isGameEnd', 'isGameWin', 'word']),
  methods: mapActions(['nextGame', 'newGame', 'resetWord', 'quitGame'])
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