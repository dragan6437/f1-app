<template>
  <h1>F1 Drivers</h1>
  <div ref="alert"></div>
  <div class="table-container" v-if="$store.getters.isLoggedIn">
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Country</th>
          <th>Team</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(driver, index) in $store.state.drivers" :key="index">
          <td>{{ driver.firstname }}</td>
          <td>{{ driver.lastname }}</td>
          <td>{{ driver.country }}</td>
          <td>{{ driver.team }}</td>
          <td>
            <span @click="$router.push(`/drivers/edit/${index}`)" class="edit">Edit</span>
            <span @click="deleteDriver(`${index}`)" class="delete">Delete</span>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="$router.push('/drivers/add')">Add Driver</button>
  </div>
  <h2 v-if="!$store.getters.isLoggedIn">You need to be logged in to see the data!</h2>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Drivers',
  data() {
    return {
      deleted: false
    };
  },
  methods: {
    getDrivers() {
      axios.get(`https://my-api-3de30-default-rtdb.firebaseio.com/drivers.json?auth=${this.getToken()}`)
        .then((res) => {
          this.$store.commit('setDrivers', res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    deleteDriver(id) {
      this.deleted = false;
      axios.delete(`https://my-api-3de30-default-rtdb.firebaseio.com/drivers/${id}.json?auth=${this.getToken()}`)
        .then((res) => {
          if (res.status == 200) {
            this.getDrivers();
            this.printMessage('Driver deleted successfully.', 'success');
          } else {
            this.printMessage('Driver delete failed.', 'error');
          }
        })
        .catch((err) => {
          console.log(err.message);
          this.printMessage('Driver delete failed.', 'error');
        });
    },
    printMessage(message, nameOfClass) {
      this.$refs.alert.innerHTML = message;
      this.$refs.alert.className = nameOfClass;
    },
    getToken() {
      return localStorage.getItem('f1User');
    }
  },
  created() {
    this.getDrivers();
  }
}
</script>

<style scoped>
h1, h2 {
  text-align: center;
}
.success,
.error {
  width: 565px;
  margin: 10px auto;
  padding: 20px;
  border-radius: 3px;
}
.success {
  color: #270;
  background-color: #dff2bf;
}
.error {
  color: #d8000c;
  background-color: #ffbaba;
}
span {
  padding: 5px;
  cursor: pointer;
}
span:hover {
  text-decoration: underline;
}
span.edit {
  color: blue;
}
span.delete {
  color: red;
}
button {
  display: flex;
  background: #006f62;
  color: white;
  padding: 14px 20px;
  margin: 15px auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background: #0a8a7b;
}
button:active {
  background: #004e45;
}
button:active {
  background: #004e45;
}
</style>