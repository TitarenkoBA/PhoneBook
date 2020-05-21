<template>
  <div id="app">
    <Header />
    <StopListContainer />
  </div>
</template>

<script>
import Header from "./components/Header"
import StopListContainer from "./components/StopListContainer"

export default {
  name: 'App',
  components: {
    Header,
    StopListContainer
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
