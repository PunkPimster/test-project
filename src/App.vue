<template>
  <CookieView/>
</template>

<script>
import CookieView from './views/CookieView.vue'

export default {
  name: 'App',
  components: {
    CookieView
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
  margin-top: 60px;
}
</style>
