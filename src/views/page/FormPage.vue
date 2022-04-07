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
  components: {
    FormCard,
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
