<template>
  <router-link v-bind:to="/staff_page/ + user" class="rounded-3xl grid grid-cols-1 gap-3 bg-gray-100 dark:bg-gray-500 p-5">
    <div class="flex rounded-2xl bg-white dark:bg-gray-400 py-3 pr-1 pl-2">
      <div class="w-full grid grid-cols-1 gap-y-2 text-left">
        <div class="">
          <span class="text-xl font-bold mx-2 my-auto dark:text-white">{{data.user.first_name + ' ' + data.user.last_name}}</span>
        </div>
      </div>
      <div class="w-20 flex" v-if="data.permission.status === 'AC'"><font-awesome-icon class="text-4xl text-emerald-500 m-auto" icon="fa-solid fa-circle-check"/></div>
      <div class="w-20 flex" v-if="data.permission.status === 'RJ'"><font-awesome-icon class="text-4xl text-red-500 m-auto" icon="fa-solid fa-circle-xmark"/></div>
      <div class="w-20 flex" v-if="data.permission.status === 'DN'"><font-awesome-icon class="text-4xl text-blue-500 m-auto" icon="fa-solid fa-circle-xmark"/></div>
      <div class="w-20 flex" v-if="data.permission.status === 'OU'"><font-awesome-icon class="text-4xl text-amber-500 m-auto" icon="fa-solid fa-circle-xmark"/></div>
      <div class="w-20 flex" v-if="data.permission.status === 'NO'"><font-awesome-icon class="text-4xl text-gray-500 m-auto" icon="fa-solid fa-circle-xmark"/></div>
    </div>
  </router-link>
</template>

<script>
import axios from "axios";

export default {
  name: "ListSearch",
  data() {
    return {
      data: null
    }
  },
  props: ['url', 'user'],
  mounted() {
    this.getdata()
  },
  methods: {
    getdata: function () {
      axios.post(process.env.VUE_APP_BASE_URL + '/api/approvals/permission_search/'+this.$props.url, {
        user: this.$props.user
      })
          .then(resp => this.data = resp.data)
    }
  }
}
</script>

<style scoped>

</style>
