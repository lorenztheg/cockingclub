<script setup>

function main() {
  window.onload = function () {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
      let bodyElement = document.querySelector('body');
      if (xhr.status === 200) {
        alert('Success!');
        console.log("Data loaded successfully");
        console.log(bodyElement);
        // Here can the DOM be loaded with the data from the server
        // buildDashboard(xhr.responseText);
      } else {
        alert('Error');
        console.error("Error loading data")
      }
    }
    xhr.open("GET", "/server");
    xhr.send();
  }
}
main();
</script>

<template>
  <div class="user-dashboard">
    <h1>Dashboard</h1>
    <p>Welcome to the Cooking Club dashboard!</p>
  </div>
</template>

<style scoped>

</style>