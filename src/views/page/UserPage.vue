<template>
  <div>
    <div class="w-full bg-blue-500 text-left text-3xl px-3 py-3 text-white">
      <button><font-awesome-icon icon="fa-solid fa-arrow-left" @click="$router.back()" /></button>
    </div>
    <div class="p-8 grid grid-cols-1 gap-y-5">
      <LastPermission />
      <ListPermission />
    </div>
  </div>
</template>

<script>
import LastPermission from "@/components/Search/user_page/LastPermission";
import ListPermission from "@/components/Search/user_page/ListPermission";

export default {

  name: "UserPage",
  components: {
    LastPermission,
    ListPermission
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
