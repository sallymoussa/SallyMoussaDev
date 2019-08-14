import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Quizzes from '@/components/Quizzes'
import Questions from '@/components/Questions'
import QuizResults from '@/components/QuizResults'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/quizzes/',
      name: 'Quizzes',
      component: Quizzes
    },
    {
      path: '/quiz/:quizId/:questionIds',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/submitQuiz/:quizId/',
      name: 'QuizResult',
      component: QuizResults
    }
  ]
})
