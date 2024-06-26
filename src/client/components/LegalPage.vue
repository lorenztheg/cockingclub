<script setup>
import HeadNavBarComponent from '@/client/components/HeadNavBarComponent.vue';
import FooterComponent from '@/client/components/FooterComponent.vue';

</script>

<template>
  <HeadNavBarComponent />
  <div class="legal" className="mx-32">
    <h1 class="text-2xl font-bold mb-3">Datenschutzerklärung</h1>
    <p>Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der Cooking Club. Eine Nutzung der Internetseiten der Cooking Club ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.</p>
    <h2 class="text-xl mb-1">Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO)</h2>
    <p>Cooking Club</p>
    <p>FH Campus Wien</p>
    <p>1100 Wien</p>
    <p>Österreich</p>
    <h2 class="text-xl mb-1">Erhebung von allgemeinen Daten und Informationen</h2>
    <div>Die Internetseite der Cooking Club erfasst mit jedem Aufruf der Internetseite durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden können die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über ein zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8) sonstige ähnliche Daten und Informationen, die der Gefahrenabwehr im Falle</div>
  </div>
  <FooterComponent />
</template>

<style scoped>
.legal {
  padding: 20px;
  font-size: 16px;
  line-height: 1.5;
}

h1, h2 {
  margin-top: 20px;
}
</style>