<template>
  <h1>Edit Driver</h1>
  <div ref="alert"></div>
  <form @submit.prevent v-if="$store.getters.isLoggedIn">
    <div class="form-group">
      <input type="text" v-model="driver.firstname" placeholder="First Name" required />
    </div>
    <div class="form-group">
      <input type="text" v-model="driver.lastname" placeholder="Last Name" required />
    </div>
    <div class="form-group">
      <input type="text" v-model="driver.country" placeholder="Counrty" required />
    </div>
    <div class="form-group">
      <input type="text" v-model="driver.team" placeholder="Team" required />
    </div>
    <div class="form-group">
      <button @click="sendForm()" class="add-button">Save</button>
      <button @click="$router.push('/drivers')" class="cancel-button">Cancel</button>
    </div>
  </form>
  <h2 v-if="!$store.getters.isLoggedIn">You need to be logged in to edit the data!</h2>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Add',
  data() {
    return {
      driver: {
        firstname: '',
        lastname: '',
        country: '',
        team: ''
      },
      success: false
    };
  },
  methods: {
    sendForm() {
      if (this.hasEmptyFields()) {
        this.printMessage("Please fill out all the fields.", "error");
        return;
      }
      const id = this.$route.params.id;
      const headers = { "Content-Type": "application/json" };
      axios.put(`https://my-api-3de30-default-rtdb.firebaseio.com/drivers/${id}.json?auth=${this.getToken()}`, this.driver,
        { headers })
        .then((res) => {
          if (res.status == 200) {
            this.printMessage("Driver edited succesfully.", "success");
          } else {
            this.printMessage("Driver edit failed.", "error");
          }
        })
        .catch((err) => {
          console.log(err.message);
          this.printMessage("Driver edit failed.", "error");
        });
    },
    hasEmptyFields() {
      if (this.driver.firstname === '' ||
        this.driver.lastname === '' ||
        this.driver.country === '' ||
        this.driver.team === '') {
        return true;
      }
      
      return false;
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
    const id = this.$route.params.id;
    axios.get(`https://my-api-3de30-default-rtdb.firebaseio.com/drivers/${id}.json?auth=${this.getToken()}`)
      .then((res) => {
        this.driver = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>

<style scoped>
h1, h2 {
  text-align: center;
}
.success,
.error {
  width: 400px;
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
form {
  width: 400px;
  border-radius: 5px;
  background-color: #e8fff2;
  padding: 20px;
  margin: 0 auto;
}
.form-group {
  padding: 15px;
}
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
}
button {
  width: 100%;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
.add-button {
  background: #006f62;
}
.add-button:hover {
  background: #0a8a7b;
}
.add-button:active {
  background: #004e45;
}
.cancel-button {
  background: #9b9b9b;
}
.cancel-button:hover {
  background: #afafaf;
}
.cancel-button:active {
  background: #6d6d6d;
}
</style>