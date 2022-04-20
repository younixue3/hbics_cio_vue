<template>
  <div class="h-52 rounded-3xl bg-gradient-to-br from-blue-700 to-blue-500 grid grid-cols-1 p-3">
    <div class="flex justify-between">
      <p class="text-left text-white">
        <span class="font-light text-lg leading-3">Recent Permission</span>
        <span class="block font-semibold text-3xl leading-6">{{datalist.data[0].description}}</span>
      </p>
      <div>
        <span class="bg-white p-0.5 h-7 rounded-full flex"><span class="m-auto mx-1 truncate">{{datalist.leader}}</span></span>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="flex rounded-3xl bg-gray-300 h-8 px-2 font-bold mt-auto" v-if="datalist.data[0].status === 'NO'"><span class="m-auto">Proses</span></div>
      <div class="flex rounded-3xl bg-amber-300 h-8 px-2 font-bold mt-auto" v-if="datalist.data[0].status === 'OU'"><span class="m-auto">Di Luar</span></div>
      <div class="flex rounded-3xl bg-blue-300 h-8 px-2 font-bold mt-auto" v-if="datalist.data[0].status === 'DN'"><span class="m-auto">Selesai</span></div>
      <div class="flex rounded-3xl bg-emerald-300 h-8 px-2 font-bold mt-auto" v-if="datalist.data[0].status === 'AC'"><span class="m-auto">Diterima</span></div>
      <div class="flex rounded-3xl bg-red-300 h-8 px-2 font-bold mt-auto" v-if="datalist.data[0].status === 'RJ'"><span class="m-auto">Ditolak</span></div>
      <div class="flex rounded-md text-center text-white text-4xl mt-auto hover:bg-white hover:bg-opacity-20 w-12 h-12 transition-all ease-in-out duration-300">
        <font-awesome-icon class="m-auto" icon="fa-solid fa-qrcode" @click="scanPage" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeRecentCard",
  data() {
    return {
      datalist: [],
    }
  },
  mounted() {
    this.getdatarecent()
  },
  methods: {
    getdatarecent : function () {
      axios.post(process.env.VUE_APP_BASE_URL + '/api/approvals/permission_recent/', {
        token: this.$store.state.auth.token
      })
          .then(resp => this.datalist = resp.data)
    },
    scanPage: function () {
      this.$store.state.qrcode.url = this.datalist.data[0].id
      this.$router.push('/scan')
    }
  }
}
</script>

<style scoped>

</style>
