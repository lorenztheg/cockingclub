<script setup>
import HeadNavBarComponent from '@/client/components/HeadNavBarComponent.vue';
import FooterComponent from '@/client/components/FooterComponent.vue';
</script>

<template>
  <HeadNavBarComponent />
  <div class="about" className="mx-32 sm:px-16 md:px-24 lg:px-32 xl:px-48">
    <h1 class="text-2xl font-bold mb-3">Über uns</h1>
    <p>Wir sind der Cooking Club, ein engagiertes Team von Studierenden der FH Campus Wien. Unser Ziel ist es, eine Plattform zu schaffen, die es Menschen ermöglicht, ihre Leidenschaft für das Kochen zu teilen und zu entdecken. Wir glauben, dass gutes Essen Menschen zusammenbringt und wir möchten diese Erfahrung mit so vielen Menschen wie möglich teilen.</p>
    <h2 class="text-xl mb-1">Unsere Mission</h2>
    <p>Unsere Mission ist es, eine benutzerfreundliche und interaktive Plattform zu schaffen, die es Benutzern ermöglicht, Rezepte zu teilen, zu entdecken und zu bewerten. Wir streben danach, eine Gemeinschaft von leidenschaftlichen Köchen zu schaffen, die bereit sind, ihre kulinarischen Fähigkeiten und Kenntnisse zu teilen.</p>
    <h2 class="text-xl mb-1">Das Team</h2>
    <ul>
      <li>Lorenz Göschl - Head of Backend</li>
      <li>Jasmin Bajric - Head of Frontend</li>
    </ul>
  </div>
  <FooterComponent />
</template>

<style scoped>
.about {
  padding: 20px;
  font-size: 16px;
  line-height: 1.5;
}

h1, h2 {
  margin-top: 20px;
}
</style>