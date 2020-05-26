<template>
  <div>
    <div class="edit_number_container">
      <input type="tel" name="tel" placeholder="Телефон" v-model="phone"/>
      <ButtonRound color="light_blue" :click="changeNumber"><i class="fas fa-check"></i></ButtonRound>
    </div>
    <ButtonRound color="light" class="edit_number_container__button_back" :click="() => this.$router.push('/Stop-list')"><span>Назад</span></ButtonRound>
  </div>
</template>

<script>
import ButtonRound from "../components/ButtonRound"

export default {
  name: "EditNumber",
  components: {
    ButtonRound,
  },
  data() {
    return {
      editingNumber: this.$store.state.EditingNumber,
      phone: this.$store.state.EditingNumber.phone,
    }
  },
  methods: {
    changeNumber() {
      const editingNumber = this.editingNumber
      editingNumber.phone = this.phone
      this.$store.dispatch('CHANGE_NUMBER', editingNumber)
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

  .edit_number_container {
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

  .edit_number_container__button_back {
    color: black;
    font-style: bold;
  }
</style>