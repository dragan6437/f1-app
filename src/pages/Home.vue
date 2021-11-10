<template>
  <h1>F1 SEASON 2021</h1>
  <div class="container">
    <span @click="openPage('/drivers')" class="drivers">DRIVERS</span>
    <span @click="openPage('/teams')" class="teams">TEAMS</span>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  methods: {
    openPage(path) {
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
span {
  color: white;
  font-size: 46px;
  font-weight: bold;
  text-shadow: 2px 2px #006f62;
  border: 7px solid #006f62;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  transition: 0.5s;
  user-select: none;
}
span:hover {
  cursor: pointer;
  padding: 25px;
  font-size: 51px;
}
.drivers {
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://tinyurl.com/4m8wn82a") center;
}
.teams {
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://tinyurl.com/kn6dh43k") center;
}
</style>