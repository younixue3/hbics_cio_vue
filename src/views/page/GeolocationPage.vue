<template>
  <div>
    Halo
  </div>
</template>

<script>
import {Geolocation} from '@capacitor/geolocation'
export default {
  name: "GeolocationPage",
  mounted() {
    this.getLocation()
  },
  methods: {
    getLocation: function () {
      console.log(Geolocation.getCurrentPosition())
      alert(Geolocation.getCurrentPosition())
    }
  }
}
</script>

<style scoped>

</style>
