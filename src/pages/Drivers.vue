<template>
    <h2>F1 Drivers</h2>
    <div v-if="deleted" class="deleted">Driver deleted successfully!</div>
    <div class="table-container">
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
            axios.get('https://my-api-3de30-default-rtdb.firebaseio.com/drivers.json')
                .then((res) => {
                    this.$store.commit('setDrivers', res.data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        },
        deleteDriver(id) {
            axios.delete(`https://my-api-3de30-default-rtdb.firebaseio.com/drivers/${id}.json`)
                .then((res) => {
                    this.deleted = true;
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    },
    created() {
        this.getDrivers();
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
}
.deleted {
    width: 565px;
    margin: 10px auto;
    padding: 20px;
    border-radius: 3px;
    color: #770000;
    background-color: #f2bfbf;
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