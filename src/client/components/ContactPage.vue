<script setup>

import HeadNavBarComponent from '@/client/components/HeadNavBarComponent.vue';
import FooterComponent from '@/client/components/FooterComponent.vue';
</script>

<template>
  <HeadNavBarComponent />
  <div class="contact">
    <h1>Kontaktieren Sie uns</h1>
    <p>Cooking Club</p>
    <p>FH Campus Wien</p>
    <p>1100</p>
    <p>Österreich</p>

    <h2>Kontakt</h2>
    <p>Telefon: +43 123 456789</p>
    <p>E-Mail: info@cookingclub.at</p>
  </div>
  <FooterComponent />
</template>

<style scoped>
.contact {
  padding: 20px;
  font-size: 16px;
  line-height: 1.5;
}

h1, h2 {
  margin-top: 20px;
}
</style>