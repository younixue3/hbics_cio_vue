<template>
  <div v-if="this.$store.state.modal.status" class="fixed flex bg-opacity-20 z-50 bg-black h-full w-full px-10">
    <div class="m-auto w-full bg-white rounded-md">
      <div class="text-right p-3">
        <button @click="approvalModal" class="w-8 text-3xl"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
      </div>
      <div class="text-2xl p-5">
          Input Proses Izin Staff
      </div>
      <div class="grid grid-cols-2 gap-5 p-5">
        <button @click="rejected" class="rounded-lg bg-red-500 px-4 py-1 text-xl text-white">Reject</button>
        <button @click="approved" class="rounded-lg bg-green-500 px-4 py-1 text-xl text-white">Accept</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ModalComponent",
  data () {
    return {

    }
  },
  methods: {
    approvalModal: function () {
      this.$store.state.modal.status = this.$store.state.modal.status != true;
    },
    approved: function () {
      axios.put('http://127.0.0.1:8000/api/approvals/approval_post/' + this.$store.state.modal.url,
          { status: 'AC'}
      )
      .then(resp => console.log(resp))
      this.$store.state.modal.status = this.$store.state.modal.status != true;
      this.$router.push()
    },
    rejected: function () {
      axios.put('http://127.0.0.1:8000/api/approvals/approval_post/' + this.$store.state.modal.url,
          { status: 'RJ'}
      )
      .then(resp => console.log(resp))
      this.$store.state.modal.status = this.$store.state.modal.status != true;
    }
  }
}
</script>

<style scoped>

</style>
