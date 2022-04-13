<template>
  <div class="flex min-h-screen relative">
    <div class="absolute z-50 w-full h-full flex" v-if="this.$store.state.auth.superuser !== true || $store.state.auth.group.includes('Manager') || $store.state.auth.group.includes('Yayasan')" :class="this.$store.state.auth.superuser === true || $store.state.auth.group.includes('Manager') || $store.state.auth.group.includes('Yayasan') ? '' : 'backdrop-blur-sm'">
      <div class="m-auto font-bold">
        Anda tidak memiliki akses ini
      </div>
    </div>
    <div class="static grid grid-cols-1 h-full gap-5">
      <div class="rounded-3xl bg-gray-100 p-5">
        <div class="flex h-8 hover:ring-2 rounded-xl">
          <input type="text"
                 class="w-full h-full bg-white p-1 rounded-l-xl text-lg focus:outline-none transition-all ease-in-out" placeholder="Search">
          <button class="h-full w-10 bg-gray-200 rounded-r-xl"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
        </div>
      </div>
      <ListSearch v-for="(item, index) in datalist" v-bind:key="index" v-bind:url="item.permission_uuid[0]"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import ListSearch from "@/components/Search/ListSearch";

export default {
  name: "SearchCard",
  components: {
    ListSearch
  },
  data() {
    return {
      datalist: null
    }
  },
  mounted() {
    this.getdatalist()
  },
  methods: {
    getdatalist : function () {
      axios.post('http://127.0.0.1:8000/api/approvals/permission_search/', {
        token: this.$store.state.auth.token,
        group: this.$store.state.auth.group
      })
          .then(resp => this.datalist = resp.data)
          // .then(resp => console.log(resp.data[0].permission_uuid))
    }
  }
}
</script>

<style scoped>

</style>
