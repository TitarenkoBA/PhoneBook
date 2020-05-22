<template>
  <div>
    <div class="add_number_container">
      <input type="tel" name="tel" pattern="+?[0-9]{11}" placeholder="Enter number" v-model="phone"/>
      <ButtonRound color="light_blue"><i class="fas fa-check"></i></ButtonRound>
    </div>
    <ButtonRound color="light" class="add_number_container__button_back" :click="() => this.$router.push('/')"> Back </ButtonRound>
  </div>
</template>

<script>
import ButtonRound from "../components/ButtonRound"

export default {
  name: "AddNumber",
  components: {
    ButtonRound,
  }
}
</script>

<style scoped>
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    background: rgba(218, 218, 240, 0.5);
    box-sizing: border-box;
  }

  .add_number_container {
    flex-direction: row;
    justify-content: space-around;
    width: 60%;
    background: transparent;
  }

  input {
    width: 50%;
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(134, 134, 148, 0.5);
    margin-right: 15px;
  }

  .add_number_container__button_back {
    color: black;
    font-style: bold;
  }
</style>