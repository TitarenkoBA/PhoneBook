<template>
  <div>
    <p>{{this.number}}</p>
    <p>
      <i class="fas fa-pen"></i>
      <i class="fas fa-trash-alt" @click="this.delete"></i>
    </p>
  </div>
</template>

<script>

export default {
  name: "PhoneListItem",
  props: ['number', 'id'],
  methods: {
    delete() {
      const numbers = this.$store.state.Numbers
      const index = numbers.findIndex((item) => item.id === this.id)
      const newNumbers = [...numbers]
      newNumbers.splice(index, 1)
      this.$store.state.Numbers = [...newNumbers]
      this.$store.state.FilteredNumbers = [...newNumbers]

    }
  }
}
</script>

<style scoped>
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
    background: white;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  p, i {
    padding: 0 15px;
  }

  i {
    cursor: pointer;
    transition: all 0.3s;
  }

  i:hover, i:active {
    color: rgb(253, 59, 59);
  }
</style>