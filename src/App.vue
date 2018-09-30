<template>
  <div id="app">
    <router-view/>
    <BackTop :bottom="80"></BackTop>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
  },
  mounted () {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;,
  height:100%;
}
</style>
