<template>
  <div>
    <p>{{this.number}}</p>
    <p>
      <i class="fas fa-pen" @click="this.edit"></i>
      <i class="fas fa-trash-alt" @click="this.delete"></i>
    </p>
  </div>
</template>

<script>

export default {
  name: "PhoneListItem",
  props: ['number', 'id'],
  methods: {
    edit() {
      this.$store.dispatch('EDIT_NUMBER', this.id)
      this.$router.push('/EditNumber')
    },
    delete() {
      this.$store.dispatch('DELETE_NUMBER', this.id)
      this.$store.dispatch('UPDATE_LOCAL_STORAGE')
      this.$store.dispatch('LOAD_PHONES')
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

  @media screen and (max-width: 900px) {
    div {
      display: flex;
      flex-direction: row !important;
    }
  }
</style>