<template>
  <div>
    <h1 class="main-header">{{ msg }}</h1>
    <router-link to="/quizzes">
      <a class="btn btn-primary cta-btn" href="#" role="button">Show all quizzes</a>
    </router-link>
    <router-link to="/results">
      <a class="btn btn-success cta-btn" href="#" role="button">Show your quiz results</a>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Blake Quizzes'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-header {
  background: red;
  margin-bottom: 45px;
  padding: 25px;
}
h1 {
  font-weight: normal;
}
.cta-btn {
  padding: 20px;
  font-size: 25px;
}
</style>
