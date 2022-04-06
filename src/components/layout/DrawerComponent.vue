<template>
  <div class="w-14 h-full flex">
    <div class="m-auto" @click="showdrawer" >
      <font-awesome-icon class="text-white text-2xl" icon="fa-solid fa-bars" />
    </div>
    <DrawerCardComponent :show="show" v-on:closedrawer="closedrawer"/>
  </div>
</template>

<script>
import DrawerCardComponent from "@/components/layout/DrawerCardComponent";
export default {
  name: "DrawerComponent",
  components: {
    DrawerCardComponent
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    showdrawer: function () {
      this.show = true
    },
    closedrawer: function () {
      this.show = false
    }
  }
}
</script>

<style scoped>

</style>
