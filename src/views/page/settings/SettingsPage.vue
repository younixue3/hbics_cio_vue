<template>
  <div>
    <div class="w-full bg-blue-500 dark:bg-gray-500 text-left text-3xl px-3 py-3 text-white">
      <button><font-awesome-icon icon="fa-solid fa-arrow-left" @click="$router.back()" /></button>
    </div>
    <div class="p-8 grid grid-cols-1 gap-y-5 divider-y">
      <div>
        <span class="text-lg">
          Dark Mode
        </span>
        <div>
          <button class="px-5 py-0.5 rounded-md" @click="changetheme" :class="this.$store.state.darkmode ? 'bg-green-400' : 'bg-red-400' ">{{this.$store.state.darkmode ? 'ON' : 'OFF' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsPage",
  data () {
    return {
    }
  },
  methods: {
    changetheme: function () {
      this.$store.commit('darkmode')

    }
  }
}
</script>

<style scoped>

</style>
