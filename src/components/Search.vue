<template>
  <div>
    <span>&#128269;</span>
    <input type="tel" name="tel" pattern="+?[0-9]{11}" placeholder="Find" v-model="phone"/>
    <ButtonRound color="blue" click="">Search</ButtonRound>
    <ButtonRound color="red" click=""><i class="fas fa-trash-alt"></i></ButtonRound>
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
    width: 65%;
    margin: 10px auto 10px 0;
    text-align: left;
    padding: 15px 0;
    box-sizing: border-box;
  }
  
  input {
    width: 50%;
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(134, 134, 148, 0.5);
    margin-right: 15px;
  }

  span {
    margin-right: 15px;
  }
</style>