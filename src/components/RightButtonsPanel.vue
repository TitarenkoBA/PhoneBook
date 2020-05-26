<template>
  <div>
    <ButtonRound color="green" :click="() => this.$router.push('/AddNumber')"><span>Добавить</span></ButtonRound>
    <ButtonRound color="light_blue" :click="() => false"><i class="fas fa-file"></i></ButtonRound>
    <ButtonRound color="purple" :click="() => false"><i class="fas fa-file"></i></ButtonRound>
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

  @media screen and (max-width: 900px) {
    div {
      width: 100%;
      text-align: center;
    }
  }
</style>