<template>
  <h1>
    NOT FOUND
    <br />404
  </h1>
  <button @click="$router.push('/')">Back to homepage</button>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
h1 {
  text-align: center;
  color: #006f62;
  font-size: 70px;
}
button {
  display: flex;
  margin: auto;
  background: #006f62;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  padding: 20px;
  cursor: pointer;
}
button:hover {
  background: #0a8a7b;
}
button:active {
  background: #004e45;
}
</style>