<template>
  <div>
    <h1>Главная страница</h1>
    <ButtonRound color="light_blue" :click="goStopList"><span>Стоп-лист</span></ButtonRound>
  </div>
</template>

<script>
import ButtonRound from "../components/ButtonRound"

export default {
  name: "Main",
  components: {
      ButtonRound
  },
  methods: {
    goStopList() {
      this.$router.push('/Stop-list')
    }
  }
}
</script>

<style scoped>
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: rgba(218, 218, 240, 0.5);
    box-sizing: border-box;
  }
</style>