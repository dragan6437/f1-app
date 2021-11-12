<template>
  <footer>Copyright &copy; Dragan Talevski {{ new Date().getFullYear() }}</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  border-top: 1px solid #004e45;
  margin-top: 20px;
  padding: 10px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>