<script setup>
import FooterComponent from '@/client/components/FooterComponent.vue';
import HeadNavBarComponent from '@/client/components/HeadNavBarComponent.vue';
</script>

<template>
  <HeadNavBarComponent />
  <div class="imprint" className="sm:px-16 md:px-24 lg:px-32 xl:px-48">
    <h1 class="text-2xl font-bold">Impressum</h1>
    <h2 class="text-xl mb-1">Cooking Club </h2>
    <p>FH Campus Wien</p>
    <p>1100 Wien</p>
    <p>Österreich</p>

    <h2 class="text-xl mb-1">Kontakt</h2>
    <p>Telefon: +43 123 456789</p>
    <p>Fax: +43 123 456789</p>
    <p>E-Mail: info@cookingclub.at</p>

    <h2 class="text-xl mb-1">Registereintrag</h2>
    <p>Eintragung im Handelsregister.</p>
    <p>Registergericht:Amtsgericht XYZ</p>
    <p>Registernummer: HRB 12345</p>

    <h2 class="text-xl mb-1">Umsatzsteuer-ID</h2>
    <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: AT 123456789</p>

    <h2 class="text-xl mb-1">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
    <p>Max Mustermann</p>
    <p>FH Campus Wien</p>
    <p>1100 Wien</p>
  </div>
  <FooterComponent />
</template>

<style scoped>
.imprint {
  padding: 20px;
  font-size: 16px;
  line-height: 1.5;
}

h1, h2 {
  margin-top: 20px;
}
</style>