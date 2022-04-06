<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="bg-gradient-to-br from-blue-800 to-blue-500 h-screen">
      <div class="text-left pt-16  text-white px-2">
        <span class="font-light text-sm leading-3">Welcome,</span>
        <span class="block text-xl font-bold -mt-2 w-full pr-5 truncate">Ricko Caesar Aprilla Tiaka</span>
      </div>
      <div class="mt-40 bg-gray-100 h-full z-10 relative">
        <NavbarComponent />
        <div class="pt-5">
          <router-view></router-view>
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
