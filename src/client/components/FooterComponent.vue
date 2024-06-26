<script setup>
</script>

<template>
  <footer class="fixed bottom-0 left-0 w-full text-center flex flex-col items-center space-y-0.5 mt-10">
    <p>&copy; 2024 Cooking Club. Alle Rechte vorbehalten.</p>
    <div class="flex justify-between space-x-2">
      <p><router-link to="/dashboard">Home</router-link></p>
      <p><router-link to="/imprint">Impressum</router-link></p>
      <p><router-link to="/legal">Datenschutz</router-link></p>
      <p><router-link to="/about">Über uns</router-link></p>
      <p><router-link to="/contact">Kontakt</router-link></p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #eee0e5;
}
</style>