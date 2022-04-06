<template>
  <div class="p-8 grid grid-cols-1 gap-y-5">
    <FormCard />
    <HomeListCard />
  </div>
</template>

<script>
import FormCard from "@/components/Form/FormCard";
import HomeListCard from "@/components/Home/HomeListCard";

export default {
  name: "FormPage",
  data() {
    return {

    }
  },
  components: {
    FormCard,
    HomeListCard
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
