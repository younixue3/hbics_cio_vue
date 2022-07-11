<template>
  <div id="app">
    <router-view></router-view>
<!--    <nav>-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </nav>-->
<!--    <router-view/>-->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  components: {},
  created() {
    if (this.$store.state.darkmode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

// Whenever the user explicitly chooses light mode
    localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem('theme')
  }
}
</script>
