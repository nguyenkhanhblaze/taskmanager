<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui"
import ParticleImage from "@/components/LogoHeader/ParticleImage.vue"

const items: NavigationMenuItem[] = [
  {
    label: "Figma Kit",
    to: "https://go.nuxt.com/figma-ui",
    target: "_blank",
  },
  {
    label: "Playground",
    to: "https://stackblitz.com/edit/nuxt-ui",
    target: "_blank",
  },
  {
    label: "Releases",
    to: "https://github.com/nuxt/ui/releases",
    target: "_blank",
  },
];
</script>

<template>
  <USeparator icon="svg-spinners:wind-toy" type="dashed" class="h-px" />
  <UFooter>
    <template #left>
      <ParticleImage />
    </template>
    <template #right>
      <UButton
        icon="i-simple-icons-discord"
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/discord"
        target="_blank"
        aria-label="Discord"
      />
      <UButton
        icon="i-simple-icons-x"
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/x"
        target="_blank"
        aria-label="X"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/nuxt/nuxt"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
