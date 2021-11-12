<template>
  <header>
    <nav>
      <ul>
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
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
nav {
  text-align: center;
  background: #006f62;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  padding: 10px 0;
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
</style>