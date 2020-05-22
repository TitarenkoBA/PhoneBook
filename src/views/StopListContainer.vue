<template>
  <div class="stop_list_container">
    <div>
      <Search />
      <RightButtonsPanel />
    </div>
    <PhoneListHeader />
    <PhoneListItem v-for="item in phones" :key="item.id" :number="item.phone"/>
    <PhoneListFooter />
  </div>
</template>

<script>
import PhoneListItem from "../components/PhoneListItem"
import PhoneListHeader from "../components/PhoneListHeader"
import PhoneListFooter from "../components/PhoneListFooter"
import RightButtonsPanel from "../components/RightButtonsPanel"
import Search from "../components/Search"

export default {
  name: "StopListContainer",
  components: {
    Search,
    RightButtonsPanel,
    PhoneListHeader,
    PhoneListFooter,
    PhoneListItem
  },
  computed: {
    phones() {
      const allNumbers = this.$store.state.numbers
      const LinesInPage = this.$store.state.LinesInPage
      const showNumbers = allNumbers.slice(0, LinesInPage)
      return showNumbers
    }
  }
}
</script>

<style scoped>
  .stop_list_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    background: rgba(218, 218, 240, 0.5);
    box-sizing: border-box;
  }

  .stop_list_container > div {
    display: flex;
  }
</style>