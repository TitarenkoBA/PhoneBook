<template>
  <div>
    <i class="fas fa-search"></i>
    <input type="tel" name="tel" placeholder="Искать" v-model="phoneSearchField"/>
    <ButtonRound color="blue" :click="search"><span>Найти</span></ButtonRound>
    <ButtonRound color="red" :click="clear"><i class="fas fa-trash-alt"></i></ButtonRound>
  </div>
</template>

<script>
import ButtonRound from "./ButtonRound"

export default {
  name: "Search",
  components: {
    ButtonRound
  },
  data() {
    return {
      phoneSearchField: null,
    }
  },
  methods: {
    search() {
      this.$store.dispatch('SEARCH', this.phoneSearchField)      
    },
    clear() {
      this.phoneSearchField = ''
      this.search()
    }
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

  i {
    margin-right: 15px;
  }

  @media screen and (max-width: 900px) {
    div {
      width: 100%;
      text-align: center;
    }
  }
</style>