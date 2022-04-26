<template>
  <div>
    <div class="h-screen w-full bg-black to-blue-500 text-white flex relative">
      <QrcodeStream class="h-full w-full z-0" @decode="onDecode" />
      <div class="absolute h-full w-full m-auto bg-white bg-opacity-20 z-50 flex">
        <div class="z-50 m-auto w-72 h-72 border-2 border-white rounded-2xl">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader"
import { Camera } from '@capacitor/camera';
import axios from "axios";
import router from "@/router";

export default {
  name: "ScanQrPage",
  data () {
    return {

    }
  },
  components: {
    QrcodeStream
  },
  created() {
    Camera.requestPermissions();
    Camera.getPhoto()
  },
  methods: {
    onDecode (result) {
      console.log(result)
      console.log(this.$store.state.qrcode.url)
      axios.put(process.env.VUE_APP_BASE_URL + result + this.$store.state.qrcode.url,{
        token: this.$store.state.auth.token
      })
      .then(resp => {
        console.log(resp)
        this.$store.state.qrcode.massage = resp.data
        console.log(this.$store.state.qrcode.url)
        router.push('/output_scan')
      })
    }
  }
}
</script>

<style scoped>

</style>
