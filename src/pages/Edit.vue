<template>
  <h1>Edit Driver</h1>
  <div v-if="success" class="success">Driver edited successfully!</div>
  <form @submit.prevent>
    <div class="form-group">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" name="firstname" v-model="driver.firstname" />
    </div>
    <div class="form-group">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" name="lastname" v-model="driver.lastname" />
    </div>
    <div class="form-group">
      <label for="firstname">Counrty</label>
      <input type="text" id="firstname" name="firstname" v-model="driver.country" />
    </div>
    <div class="form-group">
      <label for="firstname">Team</label>
      <input type="text" id="firstname" name="firstname" v-model="driver.team" />
    </div>
    <div class="form-group">
      <button @click="sendForm()" class="add-button">Save</button>
      <button @click="$router.push('/drivers')" class="cancel-button">Cancel</button>
    </div>
  </form>
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
      const id = this.$route.params.id;
      const headers = { "Content-Type": "application/json" };
      axios.put(`https://my-api-3de30-default-rtdb.firebaseio.com/drivers/${id}.json`, this.driver,
        { headers })
        .then((res) => {
          this.success = true;
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  },
  created() {
    const id = this.$route.params.id;
    axios.get(`https://my-api-3de30-default-rtdb.firebaseio.com/drivers/${id}.json/`)
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
h1 {
  text-align: center;
}
.success {
  width: 450px;
  margin: 10px auto;
  padding: 20px;
  border-radius: 3px 3px 3px 3px;
  color: #270;
  background-color: #dff2bf;
}
form {
  width: 450px;
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