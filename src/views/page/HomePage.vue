<template>
  <div class="p-8 grid grid-cols-1 gap-y-5">
    <HomeRecentCard />
    <HomeListCard />
  </div>
</template>

<script>
import HomeRecentCard from "@/components/Home/HomeRecentCard";
import HomeListCard from "@/components/Home/HomeListCard";

export default {
  name: "HomePage",
  components: {
    HomeRecentCard,
    HomeListCard
  },
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
