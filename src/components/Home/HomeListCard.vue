<template>
  <div class="rounded-3xl bg-gray-100 dark:bg-gray-500 h-[35rem] grid grid-rows-5 gap-3 p-3">
    <div class="flex rounded-2xl bg-gray-50 py-3 pr-1 pl-2" v-for="(item, index) in this.datalist" v-bind:key="index">
      <div class="w-full grid grid-cols-1 gap-y-2 text-left">
        <div>
          <p>
            <span class="font-semibold text-xl">{{item.description}}</span>
            <span class="block leading-3">{{item.created_at}}</span>
          </p>
        </div>
        <approval-by v-bind:leader="item.appoval_by" />
      </div>
      <div class="w-20 flex" v-if="item.status === 'AC'"><font-awesome-icon class="text-4xl text-emerald-500 m-auto" icon="fa-solid fa-circle-check"/></div>
      <div class="w-20 flex" v-if="item.status === 'RJ'"><font-awesome-icon class="text-4xl text-red-500 m-auto" icon="fa-solid fa-circle-xmark"/></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import approvalBy from "@/components/Home/ApprovalBy";

export default {
  name: "HomeListCard",
  components: {
    approvalBy
  },
  data() {
    return {
      datalist: []
    }
  },
  mounted() {
    this.getdatalist()
  },
  methods: {
    getdatalist : function () {
      axios.post(process.env.VUE_APP_BASE_URL + '/api/approvals/permissions/', {
        token: this.$store.state.auth.token
      })
          .then(resp => this.datalist = resp.data)
      .finally(() => this.getdate())
    },
    getdate: function () {
      const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      for (let i in this.datalist) {
        this.datalist[i].created_at = new Date(this.datalist[i].created_at)
        this.datalist[i].created_at = this.datalist[i].created_at.getDate() + " " + months[this.datalist[i].created_at.getMonth()] + ", " + this.datalist[i].created_at.getFullYear()
      }
    }
  }
}
</script>

<style scoped>

</style>
