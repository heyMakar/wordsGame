<template>
  <div id="app">
    <QuestionBox v-if="!isGameQuit"/>
    <ResultTable v-if="isGameQuit"/>
  </div>
</template>

<script>
import QuestionBox from './components/QuestionBox'
import ResultTable from './components/ResultTable'
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  computed: mapGetters(['isGameQuit']),
  components: {
    QuestionBox,
    ResultTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
