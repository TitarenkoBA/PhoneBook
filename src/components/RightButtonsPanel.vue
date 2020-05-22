<template>
  <div>
    <ButtonRound color="green" :click="() => this.$router.push('/AddNumber')">Add</ButtonRound>
    <ButtonRound color="light_blue" click="">X</ButtonRound>
    <ButtonRound color="purple" click="">X</ButtonRound>
  </div> 
</template>

<script>
import ButtonRound from "./ButtonRound"

export default {
  name: "RightButtonsPanel",
  components: {
    ButtonRound,
  }
}
</script>

<style scoped>
  div {
    width: 35%;
    margin: 10px auto 10px 0;
    text-align: right;
    padding: 15px 0;
    box-sizing: border-box;
  }
</style>