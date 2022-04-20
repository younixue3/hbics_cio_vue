<template>
  <div class="text-sm font-light text-gray-400 flex"><span class="my-auto">by</span><span class="bg-gray-400 mx-1 p-0.5 rounded-full flex"><span class="text-base text-white m-auto mx-1">{{datalist.leader}}</span></span></div>
</template>

<script>
import axios from "axios";

export default {
  name: "ApprovalBy",
  data () {
    return {
      datalist: []
    }
  },
  props: ['leader'],
  mounted() {
    this.getdatalist()
  },
  methods: {
    getdatalist : function () {
      axios.post(process.env.VUE_APP_BASE_URL + '/api/approvals/get_leader/', {
        token: this.$store.state.auth.token,
        leader: this.$props.leader
      })
          .then(resp => this.datalist = resp.data)
    },
  }
}
</script>

<style scoped>

</style>
