<template lang='pug'>
  div(class="flex-container" v-if="!isGameEnd")
    div(v-for="(value, index) in wordLength" :key="index")
      div(class='container') {{ value }}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['wordLength', 'isGameEnd']),
  created() {
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'REMOVE_CHAR') {
        this.$forceUpdate();
      }
      if (mutation.type === 'RESET_WORD') {
        this.$forceUpdate();
      }
    })
  }
}
</script>

<style scoped>
.answer {
  margin-top: 20px;
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