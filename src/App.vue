<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  mounted(){
    this.$store.commit('loginUser', localStorage.getItem('f1User'));
  },
  components:{
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
}
th,
td {
  padding: 10px;
}
</style>
