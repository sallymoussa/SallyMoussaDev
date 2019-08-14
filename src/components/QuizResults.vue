<template>
  <div>
    <div class="card w-100 question-card">
        <div class="card-body">
          <h5 class="card-title">CONGRATULATIONS for finishing this quiz</h5>
          <div class="card-text">
            Let's see how you went, your results are below
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import quizzesJSON from '@/json/quizzes.json'

export default {
  name: 'QuizResults',
  data () {
    return {
      quizzesJSON
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.quiz-container {
  width: 50%;
  margin-left: 25%;
}
.quiz-container a {
  text-decoration: none;
}
</style>
