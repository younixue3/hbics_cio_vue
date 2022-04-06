<template>
  <div class="fixed flex justify-between h-16 bg-gray-100 bg-opacity-10 backdrop-blur w-full z-50">
    <DrawerComponent />
    <div class="right-0 flex w-14">
      <img class="rounded-full w-10 h-10 object-cover m-auto" src="@/assets/stock_photo_rdev/feeling-way-too-cool-for-this-place.jpg">
    </div>
  </div>
</template>

<script>
import DrawerComponent from "@/components/layout/DrawerComponent";
export default {
  name: "HeaderComponent",
  components: {
    DrawerComponent,
  },
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style scoped>

</style>
