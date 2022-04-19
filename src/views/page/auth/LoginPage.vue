<template>
  <div class="bg-neutral-700 h-screen relative">
    <div class="flex h-1/3">
      <img class="w-24 m-auto" src="@/assets/logo/logo_colorfull.png">
    </div>
    <div class="bg-white rounded-tl-[6rem] h-2/3 p-10 grid grid-cols-1 gap-5">
      <div class="text-3xl font-bold"><h1>Login</h1></div>
      <div class="bg-white border border-gray-100 rounded-xl shadow-md text-left px-5 py-2 flex">
        <div class="my-auto w-full">
          <label class="text-sm font-bold">Email</label>
          <div class="mt-2">
            <input type="email"
                   class="w-full border-b border-gray-200 focus:border-gray-600 focus:outline-none transition-all shrink-0"
                   name="username" placeholder="jane.doe@example.com" v-model="username">
          </div>
        </div>
      </div>
      <div class="bg-white border border-gray-100 rounded-xl shadow-md text-left px-5 py-2 flex">
        <div class="my-auto w-full">
          <label class="text-sm font-bold">Password</label>
          <div class="mt-2">
            <input type="password"
                   class="w-full border-b border-gray-200 focus:border-gray-600 focus:outline-none transition-all shrink-0"
                   name="password" placeholder="*********" v-model="password">
          </div>
        </div>
      </div>
      <button class="bg-neutral-800 rounded-xl shadow-xl text-white text-xl text-center font-thin my-5" @click="login"
              to="/">Login
      </button>
      <div class="place-self-center justify-self-center">Forgot Your Password? Contact Support</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import store from "@/store/vuex";

export default {
  name: "LoginPage",
  components: {},
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login() {
      axios.post("http://54.236.62.247/api/auth", {
        username: this.username,
        password: this.password
      })
      .then(resp => alert(resp))
      .catch(e => {
        console.log(e)
      })
      .finally(() => {
        if (this.$store.state.auth.token !== null) {
          this.$router.push({name: 'login', query: {redirect: '/path'}})
        } else {
          console.log('Akun atau Password Salah')
        }
      })
    },
  }
}
</script>

<style scoped>

</style>
