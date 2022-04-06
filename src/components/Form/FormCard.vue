<template>
  <div class="rounded-3xl bg-white grid grid-cols-2 gap-3 p-5">
    <h1 class="text-xl col-span-2">Keterangan Izin</h1>
    <div class="col-span-2">
      <textarea class="h-20 w-full resize-none bg-gray-100 p-1 rounded-xl focus:ring-2 ring-blue-600 focus:caret-blue-600 text-lg focus:outline-none transition-all ease-in-out"></textarea>
    </div>
    <button class="bg-blue-500 e rounded-lg text-xl text-white font-bold py-2">Confirm</button>
    <button class="bg-gray-50 focus:bg-red-500 focus:text-white rounded-lg text-xl text-red-600 font-bold py-2 transition-all ease-in-out">Cancel</button>
  </div>
</template>

<script>
export default {
  name: "FormCard"
}
</script>

<style scoped>

</style>
