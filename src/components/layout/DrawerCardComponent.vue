<template>
  <div class="h-screen bg-black fixed bg-opacity-20 shadow-xl z-50 left-0 transition-all ease-in-out duration-300" :class="show ? 'w-full' : 'w-0'">
    <div class="bg-white dark:bg-gray-600 dark:text-white rounded-r-3xl shadow-2xl h-screen overflow-hidden transition-all ease-in-out duration-300" :class="show ? 'w-11/12' : 'w-0'">
      <div class="grid grid-cols-1 py-2 text-left text-2xl gap-y-1 divide-y">
        <div class="flex justify-between mb-5 px-5">
          <div>Menu</div>
          <div class="text-xl" v-on:click="closedrawer"><font-awesome-icon icon="fa-solid fa-xmark" /></div>
        </div>
        <router-link class="p-5 text-lg" to="/settings">
          <div>Pengaturan</div>
        </router-link>
        <router-link class="p-5 text-lg" to="/login">
          <div @click="logout">Logout</div>
        </router-link>
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
    },
    logout: function () {
      this.$store.commit('authLogout')
      this.$router.push({ name: 'login', query: { redirect: '/login' } });
    }
  },
}
</script>

<style scoped>

</style>
