<template>
  <div class="container">
    <Search />
  </div>
</template>

<script>
import Search from "./Search"

export default {
  name: "StopListContainer",
  components: {
    Search,
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    height: 30vh;
    background: rgba(218, 218, 240, 0.5);
  }

</style>