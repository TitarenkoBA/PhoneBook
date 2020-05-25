<template>
  <div>
    <i class="fas fa-search"></i>
    <input type="tel" name="tel" placeholder="Find" v-model="phoneSearchField"/>
    <ButtonRound color="blue" :click="search"><span>Search</span></ButtonRound>
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
      const searchPhone = this.phoneSearchField
      const allNumbers = this.$store.state.Numbers
      const filteredNumbers = allNumbers.filter((item) => item.phone.toString().includes(searchPhone))
      if (searchPhone) {
        this.$store.state.FilteredNumbers = [...filteredNumbers]
      } else { 
        this.$store.state.FilteredNumbers = [...allNumbers]
      }
      this.$store.state.CurrentPage = 1
    },
    clear() {
      this.phoneSearchField = ''
      this.search()
    }
  },
  mounted() {
    if (!this.phoneSearchField) {
      this.$store.state.FilteredNumbers = [...this.$store.state.Numbers]
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
</style>