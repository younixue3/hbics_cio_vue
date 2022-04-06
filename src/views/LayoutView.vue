<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="h-full flex">
      <div class="fixed w-full bg-gradient-to-br from-blue-800 to-blue-500 h-96 text-left pt-24 text-white px-2">
        <span class="font-light text-xl leading-3">Hi,</span>
        <span class="block text-2xl font-light w-full pr-5 truncate">Ricko Caesar Aprilla Tiaka</span>
      </div>
      <div class="absolute top-72 backdrop-blur pt-10 h-full w-full ">
        <div class="bg-gray-100">
          <NavbarComponent />
          <div class="pt-5">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/layout/NavbarComponent";
import HeaderComponent from "@/components/layout/HeaderComponent";

export default {
  name: "LayoutView",
  data() {
    return {

    }
  },
  components: {
    HeaderComponent,
    NavbarComponent
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
