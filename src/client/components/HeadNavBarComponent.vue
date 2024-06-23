<script setup>

</script>

<template>
  <nav class="h-20 flex justify-between items-center p-3">
    <div>
      <h4 class="text-xl font-bold">Cooking Club</h4>
    </div>
    <div>
      <ul class="flex space-x-4">
        <li><a href="/meals" class="text-blue-500 hover:text-blue-700">Meals</a></li>
        <li><a href="/planner" class="text-blue-500 hover:text-blue-700">Planner</a></li>
        <li><a href="/profile" class="text-blue-500 hover:text-blue-700">Profile</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  nav {
    background-color: #c1cdcd;
  }
</style>