<template>
  <header>
    <nav>
      <div class="menu">
        <ul class="general">
          <li>
            <router-link to="/" class="nav-links">Home</router-link>
          </li>
          <li>
            <router-link to="/drivers" class="nav-links">Drivers</router-link>
          </li>
          <li>
            <router-link to="/teams" class="nav-links">Teams</router-link>
          </li>
        </ul>
        <ul class="auth">
          <li v-if="!this.$store.getters.isLoggedIn">
            <router-link to="/register" class="nav-links">Register</router-link>
          </li>
          <li v-if="!this.$store.getters.isLoggedIn">
            <router-link to="/login" class="nav-links">Login</router-link>
          </li>
          <li v-if="this.$store.getters.isLoggedIn">
            <router-link to="/login" class="nav-links" @click="logoutUser()">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logoutUser() {
      localStorage.removeItem('f1User');
      this.$store.commit('logoutUser');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
nav {
  background: #006f62;
  width: 100%;
}
.menu {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
ul {
  display: inline-block;
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  padding: 10px 0;
}
li > span {
  color: #fff;
  font-size: 20px;
}
.nav-links {
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
  color: white;
  font-weight: bold;
}
.nav-links:hover {
  background: #0a8a7b;
}
.nav-links:active {
  background: #004e45;
}
.right {
  float: right;
}
</style>