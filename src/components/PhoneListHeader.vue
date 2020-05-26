<template>
  <div>
    <p>Телефон</p>
    <p>Действия</p>
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

  @media screen and (max-width: 900px) {
    div {
      display: flex;
      flex-direction: row !important;
    }
  }
</style>