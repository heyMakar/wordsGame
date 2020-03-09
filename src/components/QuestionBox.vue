<template>
  <div>
    <Question/>
    <Answer/>
    <Footer/>
  </div>
</template>

<script>
import Answer from './Answer';
import Question from './Question';
import Footer from './Footer'
export default {
  components: {
    Answer,
    Question,
    Footer
  }
}
</script>