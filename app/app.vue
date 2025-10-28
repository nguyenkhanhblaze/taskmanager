<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <UApp>
    <Header />
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
    <Footer />
  </UApp>
</template>
