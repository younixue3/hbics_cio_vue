<template>
  <div class="h-52 rounded-3xl bg-gradient-to-br from-blue-700 to-blue-500 grid grid-cols-1 p-3">
    <div class="flex justify-between">
      <p class="text-left text-white">
        <span class="font-light text-lg leading-3">Recent Permission</span>
        <span class="block font-semibold text-3xl leading-6">Sholat Jumat</span>
      </p>
      <div>
        <span class="bg-white p-0.5 rounded-full flex"><img class="rounded-full w-8 h-8 object-cover m-auto" src="@/assets/stock_photo_rdev/feeling-way-too-cool-for-this-place.jpg"><span class="m-auto mx-1">Mr Is</span></span>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="flex rounded-3xl bg-amber-300 h-8 px-2 font-bold mt-auto"><span class="m-auto">Approved</span></div>
      <div class="flex rounded-md text-center text-white text-4xl mt-auto hover:bg-white hover:bg-opacity-20 w-12 h-12 transition-all ease-in-out duration-300">
        <font-awesome-icon class="m-auto" icon="fa-solid fa-qrcode" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecentCard",
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
