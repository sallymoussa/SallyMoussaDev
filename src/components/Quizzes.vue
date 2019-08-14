<template>
  <div>
    <div class="list-group quiz-container">
      <a href="#"
        v-for="data in quizzesJSON.quizzes"
        :item="data.title"
        :key="data.id"
        class="list-group-item list-group-item-action anchor-custom"
      >
        <h2><router-link :to="`/quiz/${data.id}/${data.question_ids}`">{{ data.title }}</router-link></h2>
      </a>
    </div>
  </div>
</template>

<script>
import quizzesJSON from '@/json/quizzes.json'

export default {
  name: 'Quizzes',
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
