<template>
  <div>
    <span>&#128269; </span><input />
    <ButtonRound color="blue">Search</ButtonRound>
    <ButtonRound color="red">X</ButtonRound>
  </div>
</template>

<script>
import ButtonRound from "./ButtonRound"

export default {
  name: "Search",
  components: {
    ButtonRound
  }
}
</script>

<style scoped>
  div {
    width: 50%;
    margin: 10px auto 10px 0;
    text-align: left;
    padding: 15px;
  }
</style>