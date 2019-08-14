<template>
  <div class="question-container">
    <h1 class="main-header">Quiz {{ $route.params.quizId }}</h1>
    <h5>{{ msg }}</h5>
    <form action="" method="POST">
      <div
        v-for="question in questionStruct"
        :item="question.text"
        :key="question.id"
        class="card w-100 question-card">
        <div class="card-body">
          <h5 class="card-title">{{ question.text }}</h5>
            <div
              v-for="answer in question.answers"
              :item="answer"
              :key="answer"
              class="card-text">
                <input class="form-check-input" type="radio" :name="`answer_${answer}`" :id="`answer_${answer}`" :value="`${answer}`">
                <label class="form-check-label" :for="`answer_${answer}`">
                  {{ answer }}
                </label>
            </div>
            <a href="#" :id="`${question.id}`" :click="`checkAnswer(${question.id})`" class="btn btn-primary check-answer">Check your answer</a>
        </div>
      </div>
      <router-link :to="`/submitQuiz/${$route.params.quizId}/`"><button class="btn btn-success custom-btn" value="">Finish</button></router-link>
    </form>
  </div>
</template>

<script>
import questionsJSON from '@/json/questions.json'

export default {
  name: 'Questions',
  data () {
    return {
      msg: 'Please answer all the questions in this quiz',
      questionCounter: 0,
      questionStruct: {},
      question: {
        id: 0,
        text: '',
        answers: [],
        correct_answer: null
      }
    }
  },
  methods: {
    checkAnswer (qId) {
      console.log(qId)
      // search json file based on qId and check answer id against correct_answer value,
      // send back a message to DOM and display to user feedback
      // populate user's answers into a new answer selected structure
    }
  },
  created () {
    var qIdsArray = this.$route.params.questionIds.split(',')
    this.questionCounter = qIdsArray.length

    for (let i = 0; i < qIdsArray.length; i++) {
      for (let j = 0; j < questionsJSON.questions.length; j++) {
        if (questionsJSON.questions[j].id.toString() === qIdsArray[i].toString()) {
          this.question.id = questionsJSON.questions[j].id
          this.question.text = questionsJSON.questions[j].question
          this.question.answers = questionsJSON.questions[j].answers
          this.questionStruct[j] = this.question
          this.question = {}
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.cta-btn {
  padding: 20px;
  font-size: 25px;
}
.main-header {
  background: red;
  margin-bottom: 45px;
  padding: 25px;
  color: #ffffff;
}
.question-container {
  background-color: #dfa0ea;
  padding: 25px;
}
.question {
  text-align: left;
}
.question-card {
  text-align: left;
}
.card-text {
  margin-left: 25px;
}
.check-answer {
  margin-top: 15px;
}
.custom-btn {
    padding: 15px;
    font-size: 20px;
    margin-top: 10px;
}
</style>
