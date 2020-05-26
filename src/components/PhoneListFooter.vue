<template>
  <div>
    <p>Строк на странице:</p>
    <select v-model="lines" @change="changeLines">
      <option v-for="item in 5" :key="item" :value="item * 5">{{item * 5}}</option>
    </select>
    <p>{{ page }} из {{ pages }}</p>
    <p>
      <a @click.prevent="pageDown">&lt;</a>
      <a @click.prevent="pageUp">&gt;</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "PhoneListFooter",
  data() {
    return {
      lines: this.$store.state.LinesInPage
    }
  },
  computed: {
    page() {
      return this.$store.state.CurrentPage
    },
    pages() {
      return (this.$store.state.Numbers.length % this.lines === 0 ? this.$store.state.Numbers.length / this.lines : Math.floor((this.$store.state.Numbers.length / this.lines) + 1, 0))
    }
  },
  methods: {
    changeLines() {
      this.$store.dispatch('CHANGE_LINES_PER_PAGE', this.lines)
      this.$store.dispatch('LOAD_PHONES')

    },
    pageUp() {
      this.$store.dispatch('PAGE_UP', this.pages)
      this.$store.dispatch('LOAD_PHONES')
    },
    pageDown() {
      this.$store.dispatch('PAGE_DOWN')
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
    justify-content: right;
    align-items: center;
    margin-bottom: 5px;
    background: white;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }

  p, select, a {
    padding: 0 15px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  select {
    height: 50%;
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(134, 134, 148, 0.5);
    color: inherit;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    div {
      display: flex;
      flex-direction: row !important;
      justify-content: right;
      align-items: center;
    }
  }
</style>