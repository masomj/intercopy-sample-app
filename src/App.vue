<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import TodoSection from './components/TodoSection.vue'
import FooterSection from './components/FooterSection.vue'

const { locale } = useI18n()
const currentLocale = ref(locale.value)

const locales = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
]

function switchLocale(code: string) {
  locale.value = code as 'en' | 'fr' | 'de'
  currentLocale.value = code
}
</script>

<template>
  <div class="app">
    <NavBar :locales="locales" :current-locale="currentLocale" @switch-locale="switchLocale" />
    <main id="main-content">
      <HeroSection />
      <FeaturesSection />
      <TodoSection />
    </main>
    <FooterSection />
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}
main {
  flex: 1;
}
</style>
