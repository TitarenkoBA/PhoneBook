<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header"

export default {
  name: 'App',
  components: {
    Header,
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
  background: rgba(218, 218, 240, 0.5);
}
</style>
