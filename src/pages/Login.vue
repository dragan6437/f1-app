<template>
  <h1>Login</h1>
  <div ref="alert"></div>
  <form @submit.prevent>
    <div class="form-group">
      <input type="email" v-model="user.email" placeholder="Email" required />
    </div>
    <div class="form-group">
      <input type="password" v-model="user.password" placeholder="Password" required />
    </div>
    <div class="form-group">
      <button @click="sendForm()" class="add-button">Login</button>
    </div>
  </form>
  <p class="footer-message">Don't have an account? Register <a href="#" @click="$router.push('./register')">here</a></p>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
        returnSecureToken: true
      },
    };
  },
  methods: {
    sendForm() {
      if (!this.hasEmptyFields()) {
        this.printMessage("Please fill out all the fields.", "error");
        return;
      }
      const headers = { "Content-type": "application/json" };
      axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.$store.state.webApiKey}`,
        this.user, { headers })
        .then((res) => {
          if (res.status == 200) {
            localStorage.setItem('f1User', res.data.idToken);
            this.$store.commit('loginUser', res.data.email);
            this.$router.push('/');
          } else {
            this.printMessage("Login failed.", "error");
          }
        })
        .catch((err) => {
          this.printMessage("Login failed.", "error");
          console.log(err.message);
        });
    },
    hasEmptyFields() {
      return this.user.email !== 0 && this.user.password !== 0;
    },
    printMessage(message, nameOfClass) {
      this.$refs.alert.innerHTML = message;
      this.$refs.alert.className = nameOfClass;
    }
  }
}

</script>

<style scoped>
h1 {
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

p.footer-message{
  text-align: center;
}
</style>