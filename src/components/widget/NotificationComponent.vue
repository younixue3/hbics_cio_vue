<template>
  <div :class="$store.state.notification.active ? '' : 'hidden'" @click="close" class="fixed p-10 z-50 w-full">
    <div class="bg-red-400 text-white font-medium rounded-xl w-full p-5">
      {{massage}}
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationComponent",
  props: {
    actives : Boolean,
    massage : String
  },
  data () {
    return {

    }
  },
  methods: {
    close: function () {
      this.$store.state.notification.active = false
    }
  }
}
</script>

<style scoped>

</style>
