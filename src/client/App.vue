<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  /* Responsive designs for various screen widths */
  @media (max-width: 600px) {
    #app {
    }
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    #app {
    }
  }

  @media (min-width: 1025px) {
    #app {
    }
  }
}
</style>
