<template>
  <div class="rounded-3xl bg-gray-100 h-[35rem] grid grid-rows-5 gap-3 p-3">
    <div class="flex rounded-2xl bg-gray-50 py-3 pr-1 pl-2" v-for="(item, index) in this.datalist" v-bind:key="index">
      <div class="w-full grid grid-cols-1 gap-y-2 text-left">
        <div>
          <p>
            <span class="font-semibold text-xl">{{item.description}}</span>
            <span class="block leading-3">{{item.created_at}}</span>
          </p>
        </div>
        <div class="text-sm font-light text-gray-400 flex"><span class="my-auto">by</span><span class="bg-gray-400 mx-1 p-0.5 rounded-full flex"><img class="rounded-full w-5 h-5 object-cover m-auto" src="@/assets/stock_photo_rdev/feeling-way-too-cool-for-this-place.jpg"><span class="text-base text-white m-auto mx-1">Mr Is</span></span></div>

      </div>
      <div class="w-20 flex"><font-awesome-icon class="text-4xl text-emerald-500 m-auto" icon="fa-solid fa-circle-check" v-if="item.status === 'AC'"/></div>
      <div class="w-20 flex"><font-awesome-icon class="text-4xl text-red-500 m-auto" icon="fa-solid fa-circle-xmark"  v-if="item.status === 'RJ'"/></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FormListCard",
  data() {
    return {
      datalist: []
    }
  },
  mounted() {
    this.getdatalist()
    this.getdate()
  },
  methods: {
    getdatalist : function () {
      axios.post('http://127.0.0.1:8000/api/approvals/permissions_form/', {
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
