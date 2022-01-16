<template>
  <addItems />
</template>

<script>
import addItems from './components/addItems.vue';

export default {
  name: 'App',
  components: {
    addItems,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
