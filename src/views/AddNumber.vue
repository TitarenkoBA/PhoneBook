<template>
  <div>
    <div class="add_number_container">
      <input type="tel" name="tel" placeholder="Enter number" v-model="phone"/>
      <ButtonRound color="light_blue" :click="addNumber"><i class="fas fa-check"></i></ButtonRound>
    </div>
    <ButtonRound color="light" class="add_number_container__button_back" :click="() => this.$router.push('/')"><span>Back</span></ButtonRound>
  </div>
</template>

<script>
import ButtonRound from "../components/ButtonRound"

export default {
  name: "AddNumber",
  components: {
    ButtonRound,
  },
  data() {
    return {
      phone: null,
    }
  },
  methods: {
    addNumber() {
      const updatedNumbers = [...this.$store.state.Numbers]
      const newPhone = { phone: this.phone, id: updatedNumbers.length } 
      updatedNumbers.unshift(newPhone)
      this.$store.state.FilteredNumbers = null
      this.$store.state.Numbers = [...updatedNumbers]
      this.$store.state.CurrentPage = 1
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