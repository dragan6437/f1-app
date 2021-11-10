<template>
    <h1>Add Driver</h1>
    <div ref="alert"></div>
    <form @submit.prevent>
        <div class="form-group">
            <label for="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" v-model="driver.firstname" required />
        </div>
        <div class="form-group">
            <label for="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" v-model="driver.lastname" required />
        </div>
        <div class="form-group">
            <label for="firstname">Counrty</label>
            <input type="text" id="firstname" name="firstname" v-model="driver.country" required />
        </div>
        <div class="form-group">
            <label for="firstname">Team</label>
            <input type="text" id="firstname" name="firstname" v-model="driver.team" required />
        </div>
        <div class="form-group">
            <button @click="sendForm()" class="add-button">Add</button>
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
            }
        };
    },
    methods: {
        sendForm() {
            const headers = { "Content-Type": "application/json" };
            axios.post('https://my-api-3de30-default-rtdb.firebaseio.com/drivers.json', this.driver,
                { headers })
                .then((res) => {
                    this.$refs.alert.innerHTML = "Driver added succesfully";
                    this.$refs.alert.className = "success";
                    this.driver = {
                        firstname: '',
                        lastname: '',
                        country: '',
                        team: ''
                    };
                })
                .catch((err) => {
                    this.$refs.alert.innerHTML = "Driver add failed";
                    this.$refs.alert.className = "error";
                    console.log(err.message);
                });
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