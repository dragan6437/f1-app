<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import CryptoJS from 'crypto-js';

export default {
  name: 'App',
  data() {
    return {
      encData: 'U2FsdGVkX18kZnf4+Vf+6TX2Mp1/YQ5DoTC8mepa9ggLKCszigtjPVPJHEIpyHbbd5zE0OphK+VMmyTW6t85BA==',
      secret: 'dAnJlEwGvG'
    };
  },
  methods: {
    decryptData() {
      const decryptData = CryptoJS.AES.decrypt(this.encData, this.secret);
      this.$store.commit('setWebApiKey', decryptData.toString(CryptoJS.enc.Utf8));
    }
  },
  mounted() {
    this.$store.commit('loginUser', localStorage.getItem('f1User'));
  },
  created() {
    this.decryptData();
  },
  components: {
    Header,
    Footer
  }
}

</script>

<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>

  <Footer />
</template>

<style>
body {
  margin: 0;
  font-family: "Jost", sans-serif;
  background: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    url("https://cdn.pixabay.com/photo/2016/05/16/15/40/texture-1395982_960_720.jpg");
  background-size: 200px;
}
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
main {
  flex: 1;
}
.table-container {
  margin: 20px;
}
table,
th,
td {
  border: 1px solid #004e45;
  border-collapse: collapse;
  margin: 0 auto;
  background: #fff;
}
th,
td {
  padding: 10px;
}
</style>
