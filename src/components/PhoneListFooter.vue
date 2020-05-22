<template>
  <div>
    <p>Line on page</p>
    <select v-model="lines">
      <option v-for="item in 5" :key="item" :value="item * 5">{{item * 5}}</option>
    </select>
    <p>{{ page }} from {{ lines }}</p>
    <p>
      <a @click.prevent="page--">&lt;</a>
      <a @click.prevent="page++">&gt;</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "PhoneListFooter",
  data() {
    return {
      lines: 5,
      page: 1,
    }
  },
  watch: {
    lines: function(lines) {
      this.$store.state.LinesInPage = lines
    },
    page: function(page) {
      this.$store.state.CurrentPage = page
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
</style>