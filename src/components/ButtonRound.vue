<template>
  <button :class="this.color">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonRound",
  props: {
    color: String
  },
}
</script>

<style scoped>
  button {
    min-width: 40px;
    min-height: 40px;
    border-radius: 50px;
  }

  .blue {
    background: blue;
  }

  .red {
    background: red;
  }

  .green {
    background: green;
  }

  .light_blue {
    background: lightblue;
  }

  .purple {
    background: purple;
  }
</style>