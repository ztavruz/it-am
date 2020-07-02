<template>
  <div id="app">
    <am-main-wrapper></am-main-wrapper>
  </div>
</template>

<script>
  import amMainWrapper from "./components/am-main-wrapper";

export default {
  name: 'App',
  components: {
    amMainWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.br{
  border: 1px solid black;
}
</style>
