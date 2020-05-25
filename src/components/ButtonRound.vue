<template>
  <button :class="this.color" @click="this.click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonRound",
  props: {
    color: String,
    click: Function,
  },
}
</script>

<style scoped>
  button {
    min-width: 33px;
    min-height: 33px;
    max-width: 300px;
    border-radius: 50px;
    border: none;
    margin-right: 15px;
    padding: 0;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    color: white;
    cursor: pointer;
    transition: all 0.3s;
  }

  button:active {
    box-shadow: none;
  }

  button:hover {
    text-shadow: 1px 1px rgba(0, 0, 0, 0.45);
  }

  button span {
    padding: 0 10px;
  }

  button i {
    padding: 0;
    margin: 0 auto;
  }

  .blue {
    background: rgb(63, 63, 252);
  }

  .red {
    background: rgb(253, 59, 59);
  }

  .green {
    background: rgb(15, 150, 15);
  }

  .light_blue {
    background: rgb(70, 168, 201);
  }

  .purple {
    background: rgb(126, 42, 182);
  }

  .light {
    background: rgb(198, 193, 201);
  }
</style>