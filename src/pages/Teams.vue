<template>
  <h1>F1 Teams</h1>
  <div class="table-container" v-if="$store.getters.isLoggedIn">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Power Unit</th>
          <th>Chassis</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(team, index) in $store.state.teams.sort()" :key="index">
          <td :style="{ 'background': `${team.hexColor}` }">{{ team.name }}</td>
          <td :style="{ 'background': `${team.hexColor}` }">{{ team.powerUnit }}</td>
          <td :style="{ 'background': `${team.hexColor}` }">{{ team.chassis }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <h2 v-if="!$store.getters.isLoggedIn">You need to be logged in to see the data!</h2>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Teams',
  data() {
    return {
      teams: []
    };
  },
  methods: {
    getTeams() {
      axios.get(`https://my-api-3de30-default-rtdb.firebaseio.com/teams.json?auth=${this.getToken()}`)
        .then((res) => {
          this.$store.commit('setTeams', res.data);
        })
        .catch((err) => {
          console.log(err.message);
        })
    },
    getToken() {
      return localStorage.getItem('f1User');
    }
  },
  created() {
    this.getTeams();
  }
}
</script>

<style scoped>
h1, h2 {
  text-align: center;
}
</style>