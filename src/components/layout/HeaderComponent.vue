<template>
  <div class="fixed flex justify-between h-16 bg-gray-100 bg-opacity-10 backdrop-blur w-full z-50">
    <DrawerComponent />
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
