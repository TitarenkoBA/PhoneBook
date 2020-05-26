<template>
  <div class="header">
    <h1>{{this.$route.name}}</h1>
    <p>
      <router-link to="/" v-if="this.$route.name !== 'Главная'">Главная / </router-link> 
      <router-link :to="this.$route.path">{{this.$route.name}}</router-link>
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