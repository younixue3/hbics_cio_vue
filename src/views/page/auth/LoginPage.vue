<template>
  <div>
    <NotificationComponent v-bind:massage="notifikasi.massage" />
    <div class="bg-neutral-700 h-screen relative">
      <div class="flex h-1/3">
        <img class="w-24 m-auto" src="@/assets/logo/logo_colorfull.png">
      </div>
      <div class="bg-white rounded-tl-[6rem] h-2/3 p-10 grid grid-cols-1 gap-5">
        <div class="text-3xl font-bold"><h1>Login</h1></div>
        <div class="bg-white border border-gray-100 rounded-xl shadow-md text-left px-5 py-2 flex">
          <div class="my-auto w-full">
            <label class="text-sm font-bold">Username</label>
            <div class="mt-2">
              <input type="email"
                     class="w-full border-b border-gray-200 focus:border-gray-600 focus:outline-none transition-all shrink-0"
                     name="username" placeholder="usename" v-model="username">
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
  </div>
</template>

<script>
// import axios from "axios";
import NotificationComponent from "@/components/widget/NotificationComponent";
// import * as msal from "@azure/msal-browser";
// import * as msal from "@azure/msal-browser"
// import store from "@/store/vuex";

// const msalConfig = {
//   auth: {
//     clientId: "de197cc2-98c2-4d4e-9617-0b347663698c",
//     authority: "https://login.microsoftonline.com/a658e3d4-e6e4-40ca-9be6-15edf80ee7a7",
//     knownAuthorities: [],
//     cloudDiscoveryMetadata: "",
//     redirectUri: "http://localhost:3000/login",
//     postLogoutRedirectUri: "http://localhost:3000/logout",
//     navigateToLoginRequestUrl: true,
//     clientCapabilities: ["CP1"]
//   },
//   cache: {
//     cacheLocation: "sessionStorage",
//     storeAuthStateInCookie: false,
//     secureCookies: false
//   },
//   system: {
//     loggerOptions: {
//       loggerCallback: (level, message, containsPii) => {
//         if (containsPii) {
//           return;
//         }
//         switch (level) {
//           case msal.LogLevel.Error:
//             console.error(message);
//             return;
//           case msal.LogLevel.Info:
//             console.info(message);
//             return;
//           case msal.LogLevel.Verbose:
//             console.debug(message);
//             return;
//           case msal.LogLevel.Warning:
//             console.warn(message);
//             return;
//         }
//       }
//     }
//   }
// };
//
// const msalInstance = new msal.PublicClientApplication(msalConfig);

export default {
  name: "LoginPage",
  components: {NotificationComponent},
  data() {
    return {
      notifikasi: {
        massage: null,
      }
    }
  },
  methods: {
    login() {
      this.$msalinstance.loginPopup()
          .then(this.handleResponse)
          .catch(error => {
            console.error(error);
          });
    },
    handleResponse(response) {

      /**
       * To see the full list of response object properties, visit:
       * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/request-response-object.md#response
       */

      if (response !== null) {
        this.username = response.account.username;
        this.$store.commit('auth', response.account)
        if (this.$store.state.auth.token !== null) {
          this.notifikasi.active = false
          this.notifikasi.massage = null
          this.$router.push({name: 'login', query: {redirect: '/path'}})
        } else {
          console.log('Akun atau Password Salah')
          this.$store.state.notification.active = true
          this.notifikasi.massage = 'Akun atau Password Salah'
        }
        console.log(response.account)
      } else {

        this.selectAccount();

        /**
         * If you already have a session that exists with the authentication server, you can use the ssoSilent() API
         * to make request for tokens without interaction, by providing a "login_hint" property. To try this, comment the
         * line above and uncomment the section below.
         */

        // myMSALObj.ssoSilent(silentRequest).
        //     then(() => {
        //         const currentAccounts = myMSALObj.getAllAccounts();
        //         username = currentAccounts[0].username;
        //         welcomeUser(username);
        //         updateTable();
        //     }).catch(error => {
        //         console.error("Silent Error: " + error);
        //         if (error instanceof msal.InteractionRequiredAuthError) {
        //             signIn();
        //         }
        //     });
      }
    },
    selectAccount () {

      /**
       * See here for more info on account retrieval:
       * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
       */

      const currentAccounts = this.$msalinstance.getAllAccounts();

      if (!currentAccounts  || currentAccounts.length < 1) {
        return;
      } else if (currentAccounts.length > 1) {
        // Add your account choosing logic here
        console.warn("Multiple accounts detected.");
      } else if (currentAccounts.length === 1) {
        this.username = currentAccounts[0].username;
        console.log(this.username)
      }
    }
    // login() {
    //   console.log(process.env.VUE_APP_BASE_URL + "/api/auth")
    //   axios.post( process.env.VUE_APP_BASE_URL + "/api/auth", {
    //     username: this.username,
    //     password: this.password
    //   })
    //   .then(resp => {
    //     this.$store.commit('auth', resp.data)
    //   })
    //   .catch(e => {
    //     console.log(e)
    //   })
    //   .finally(() => {
    //     if (this.$store.state.auth.token !== null) {
    //       this.notifikasi.active = false
    //       this.notifikasi.massage = null
    //       this.$router.push({name: 'login', query: {redirect: '/path'}})
    //     } else {
    //       console.log('Akun atau Password Salah')
    //       this.$store.state.notification.active = true
    //       this.notifikasi.massage = 'Akun atau Password Salah'
    //     }
    //   })
    // },
  }
}
</script>

<style scoped>

</style>
