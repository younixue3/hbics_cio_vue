<template>
  <div class="grid grid-cols-1 gap-5">
    <div class="rounded-3xl bg-white p-5">
      <div class="flex h-8 hover:ring-2 rounded-xl">
        <input type="text"
               class="w-full h-full bg-gray-100 p-1 rounded-l-xl text-lg focus:outline-none transition-all ease-in-out" placeholder="Search">
        <button class="h-full w-10 bg-gray-200 rounded-r-xl"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
      </div>
    </div>
    <div class="rounded-3xl grid grid-cols-1 gap-3 bg-white p-5">
      <div class="flex rounded-2xl bg-gray-100 py-3 pr-1 pl-2">
        <div class="w-full grid grid-cols-1 gap-y-2 text-left">
          <div class="flex">
            <img class="rounded-full w-12 h-12 object-cover my-auto"
                 src="@/assets/stock_photo_rdev/feeling-way-too-cool-for-this-place.jpg">
            <span class="text-xl font-bold mx-2 my-auto">Ricko Tiaka</span>
          </div>
        </div>
        <div class="w-20 flex">
          <font-awesome-icon class="text-4xl text-emerald-500 m-auto" icon="fa-solid fa-circle-check"/>
          <!--        <div class="w-20 flex"><font-awesome-icon class="text-4xl text-red-500 m-auto" icon="fa-solid fa-circle-xmark" /></div>-->
          <!--        <div class="w-20 flex"><font-awesome-icon class="text-4xl text-gray-400 m-auto" icon="fa-solid fa-door-closed" /></div>-->
          <!--        <div class="w-20 flex"><font-awesome-icon class="text-4xl text-amber-500 m-auto" icon="fa-solid fa-door-open" /></div>-->
        </div>
      </div>
      <div class="flex rounded-2xl bg-gray-100 py-3 pr-1 pl-2">
        <div class="w-full grid grid-cols-1 gap-y-2 text-left">
          <div class="flex">
            <img class="rounded-full w-12 h-12 object-cover my-auto"
                 src="@/assets/stock_photo_rdev/feeling-way-too-cool-for-this-place.jpg">
            <span class="text-xl font-bold mx-2 my-auto">Ricko Tiaka</span>
          </div>
        </div>
        <div class="w-20 flex">
          <font-awesome-icon class="text-4xl text-red-500 m-auto" icon="fa-solid fa-circle-xmark"/>
        </div>
      </div>
      <div class="flex rounded-2xl bg-gray-100 py-3 pr-1 pl-2">
        <div class="w-full grid grid-cols-1 gap-y-2 text-left">
          <div class="flex">
            <img class="rounded-full w-12 h-12 object-cover my-auto"
                 src="@/assets/stock_photo_rdev/feeling-way-too-cool-for-this-place.jpg">
            <span class="text-xl font-bold mx-2 my-auto">Ricko Tiaka</span>
          </div>
        </div>
        <div class="w-20 flex">
          <font-awesome-icon class="text-4xl text-blue-400 m-auto" icon="fa-solid fa-door-closed"/>
        </div>
      </div>
      <div class="flex rounded-2xl bg-gray-100 py-3 pr-1 pl-2">
        <div class="w-full grid grid-cols-1 gap-y-2 text-left">
          <div class="flex">
            <img class="rounded-full w-12 h-12 object-cover my-auto"
                 src="@/assets/stock_photo_rdev/feeling-way-too-cool-for-this-place.jpg">
            <span class="text-xl font-bold mx-2 my-auto">Ricko Tiaka</span>
          </div>
        </div>
        <div class="w-20 flex">
          <font-awesome-icon class="text-4xl text-amber-500 m-auto" icon="fa-solid fa-door-open"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCard",
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>
