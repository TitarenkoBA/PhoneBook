<template>
  <div class="stop_list_container">
    <div class="stop_list_container__buttons_panel">
      <Search />
      <RightButtonsPanel />
    </div>
    <div v-if="this.$store.state.LoadingPhones !== null">
      <PhoneListHeader />
      <PhoneListItem v-for="item in phones" :key="item.id" :number="item.phone" :id="item.id"/>
      <PhoneListFooter />
    </div>
    <div v-else>
      <div class="lds-circle"><div></div></div>
    </div>
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
      return this.$store.state.FilteredNumbers
    },
  },
  methods: {
    loadPhones() {
      this.$store.dispatch('LOAD_PHONES')
    }
  },
  mounted() {
    this.$store.dispatch('GET_NUMBERS')
    this.loadPhones()
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

  .stop_list_container__buttons_panel {
    display: flex;
  }

  .lds-circle {
  display: inline-block;
  transform: translateZ(1px);
  }
  .lds-circle > div {
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    background: #fff;
    animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  @keyframes lds-circle {
    0%, 100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }


  @media screen and (max-width: 900px) {
    .stop_list_container__buttons_panel {
      display: flex;
      flex-direction: column;
    }
  }
</style>