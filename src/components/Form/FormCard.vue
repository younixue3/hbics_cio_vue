<template>
  <div>
    <div class="rounded-3xl bg-gray-100 grid grid-cols-2 h-60 gap-3 p-5">
      <h1 class="text-xl col-span-2">Keterangan Izin</h1>
      <div class="col-span-2">
        <textarea class="h-20 w-full resize-none bg-white p-1 rounded-xl focus:ring-2 ring-blue-600 focus:caret-blue-600 text-lg focus:outline-none transition-all ease-in-out" v-model="description"></textarea>
      </div>
      <button class="bg-blue-500 e rounded-lg text-xl text-white font-bold py-2" @click="insertdata">Confirm</button>
      <button class="bg-gray-50 focus:bg-red-500 focus:text-white rounded-lg text-xl text-red-600 font-bold py-2 transition-all ease-in-out">Cancel</button>
    </div>
    <div class="flex mt-5 bg-red-400 text-black" v-if="this.error.status">
      <p class="m-auto">{{this.error.massage}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "FormCard",
  components: {

  },
  data() {
    return {
      description: null,
      error: []
    }
  },
  methods: {
    insertdata: function () {
      axios.post(process.env.VUE_APP_BASE_URL + '/api/approvals/permission/apply', {
        token: this.$store.state.auth.token,
        description: this.description
      },
        {
          headers: {'Authorization': 'Bearer ' + this.$store.state.auth.token}
        }
      )
      .then(resp => console.log(resp.data))
      .finally(() => router.push('/'))
    }
  }
}
</script>

<style scoped>

</style>
