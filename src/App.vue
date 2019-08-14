<template>
  <div id="app">
    <router-link to="/">
      <img class="main-logo" src="./assets/logo.png">
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-image: url("./assets/background-image.jpg");
  background-color: #dfa0ea;
}
.main-logo {
  padding: 35px;
  margin-bottom: 65px;
  background-color: #ffffff;
}
</style>
