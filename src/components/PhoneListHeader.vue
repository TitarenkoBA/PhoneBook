<template>
  <div>
    <p>Telephone</p>
    <p>Actions</p>
  </div>
</template>

<script>
export default {
  name: "PhoneListHeader"
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

  p {
    padding: 0 15px;
  }
</style>