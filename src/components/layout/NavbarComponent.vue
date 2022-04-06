<template>
  <div class="absolute -top-5 flex w-full">
    <div class="bg-amber-300 m-auto w-60 h-10 rounded-xl shadow-xl grid grid-cols-3 text-center divide-amber-400 divide-x">
      <router-link to="/" class="flex">
        <font-awesome-icon class="m-auto text-xl" icon="fa-solid fa-house" />
      </router-link>
      <router-link to="/form" class="flex">
        <font-awesome-icon class="m-auto text-xl" icon="fa-solid fa-square-plus" />
      </router-link>
      <router-link to="/approval" class="flex">
        <font-awesome-icon class="m-auto text-xl" icon="fa-solid fa-magnifying-glass" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent"
}
</script>

<style scoped>

</style>
