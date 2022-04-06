<template>
  <div class="h-screen bg-black fixed bg-opacity-50 z-50 left-0" :class="show ? 'w-full' : 'w-0'">
    <div class="bg-white rounded-r-3xl shadow-2xl h-screen overflow-hidden transition-all ease-in-out duration-300" :class="show ? 'w-72' : 'w-0'">
      <div class="grid grid-cols-1 p-5 py-2 text-left gap-y-1">
        <div class="flex justify-between text-black mb-5">
          <div>Menu</div>
          <div class="text-xl" v-on:click="closedrawer"><font-awesome-icon icon="fa-solid fa-xmark" /></div>
        </div>
        <div>Pengaturan</div>
        <div>Profile</div>
        <div>Logout</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DrawerCardComponent",
  data() {
    return {
    }
  },
  props: {
    show : Boolean,
  },
  methods: {
    showdrawer: function (event) {
      console.log(event)
    },
    closedrawer: function () {
      this.$emit('closedrawer')
    }
  },
}
</script>

<style scoped>

</style>
