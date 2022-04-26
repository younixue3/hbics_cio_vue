<template>
  <div>
    <div v-if="$store.state.qrcode.massage.type === 'success'" class="h-screen w-full bg-gradient-to-b from-cyan-400 to-blue-500 py-20 text-white">
      <div class="w-full flex mb-5">
        <!--      <font-awesome-icon class="text-6xl" icon="fa-solid fa-thumbs-up" />-->
        <img class="h-52 m-auto" src="@/assets/logo/g9699.png">
      </div>
      <h1 class="text-6xl font-thin font-sans">Horray!</h1>
      <div class="text-2xl font-light font-sans my-10 w-80 m-auto">{{$store.state.qrcode.massage.massage}}</div>
      <button @click="$router.push('/')" class="border-2 border-white text-white text-2xl py-1 px-4 rounded-2xl mt-14 font-sans font-thin">Next<font-awesome-icon class="ml-3 text-xl" icon="fa-solid fa-arrow-right" /></button>
    </div>
    <div v-if="$store.state.qrcode.massage.type === 'error'" class="h-screen w-full bg-gradient-to-b from-rose-400 to-red-500 py-20 text-white">
      <div class="w-full flex mb-5">
        <!--      <font-awesome-icon class="text-6xl" icon="fa-solid fa-thumbs-up" />-->
        <img class="h-52 m-auto" src="@/assets/logo/decline.png">
      </div>
      <h1 class="text-6xl font-thin font-sans">Rejected</h1>
      <div class="text-2xl font-light font-sans my-10 w-80 m-auto">{{$store.state.qrcode.massage.massage}}</div>
      <button @click="$router.push('/')" class="border-2 border-white text-white text-2xl py-1 px-4 rounded-2xl mt-14 font-sans font-thin">Next<font-awesome-icon class="ml-3 text-xl" icon="fa-solid fa-arrow-right" /></button>
    </div>
    <div v-if="$store.state.qrcode.massage.type === 'warning'" class="h-screen w-full bg-gradient-to-b from-yellow-400 to-amber-500 py-20 text-white">
      <div class="w-full flex mb-5">
        <!--      <font-awesome-icon class="text-6xl" icon="fa-solid fa-thumbs-up" />-->
        <img class="h-52 m-auto" src="@/assets/logo/warning.png">
      </div>
      <h1 class="text-6xl font-thin font-sans">Attention</h1>
      <div class="text-2xl font-light font-sans my-10 w-80 m-auto">{{$store.state.qrcode.massage.massage}}</div>
      <button @click="$router.push('/')" class="border-2 border-white text-white text-2xl py-1 px-4 rounded-2xl mt-14 font-sans font-thin">Next<font-awesome-icon class="ml-3 text-xl" icon="fa-solid fa-arrow-right" /></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OutputQrPage"
}
</script>

<style scoped>

</style>
