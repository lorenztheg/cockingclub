<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import './build.css';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
});
</script>

<style>
#app {
}
</style>
