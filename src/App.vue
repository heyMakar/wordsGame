<template>
  <div id="app">
    <QuestionBox/>
  </div>
</template>

<script>
import QuestionBox from './components/QuestionBox'

export default {
  name: 'App',
  components: {
    QuestionBox,
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
