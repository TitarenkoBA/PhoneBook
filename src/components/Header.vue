<template>
  <div class="header">
    <h1>Title</h1>
    <p>
      <router-link to="/">Main</router-link> 
      / 
      <router-link :to="this.$route.path">{{this.$route.path.slice(1)}}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
  .header {
    width: 100%;
    height: 100px;
    background: white;
    text-align: left;
    padding: 15px;
    box-sizing: border-box;
  }

  h1 {
    margin: 0;
  }

  a {
    text-decoration: none;
  }
</style>