<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="h-full flex">
      <div class="fixed w-full bg-gradient-to-br from-blue-800 to-blue-500 dark:from-black dark:to-gray-500 h-96 text-left pt-24 text-white px-2">
        <span class="font-light text-xl leading-3">Hi,</span>
        <span class="block text-2xl font-light w-full pr-5 truncate">{{$store.state.auth.name}}</span>
      </div>
      <div class="absolute top-72 backdrop-blur pt-10 h-full w-full">
        <div class="bg-white dark:bg-gray-700">
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
    defaultheme: function () {
      console.log('s')
      localStorage.setItem('theme', 'light')
    }
  },
  created() {
    this.defaultheme()
  }
}
</script>

<style scoped>

</style>
