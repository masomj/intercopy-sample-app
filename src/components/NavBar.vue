<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{
  locales: { code: string; label: string }[]
  currentLocale: string
}>()

const emit = defineEmits<{ (e: 'switch-locale', code: string): void }>()
const { t } = useI18n()
</script>

<template>
  <header class="navbar">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <div class="navbar__inner">
      <div class="navbar__brand">
        <span class="navbar__logo">◈</span>
        <span class="navbar__title">{{ t('nav.title') }}</span>
        <span class="navbar__tagline">{{ t('nav.tagline') }}</span>
      </div>
      <nav class="navbar__locales" aria-label="Language switcher">
        <button
          v-for="loc in locales"
          :key="loc.code"
          class="locale-btn"
          :class="{ 'locale-btn--active': currentLocale === loc.code }"
          :aria-pressed="currentLocale === loc.code"
          @click="emit('switch-locale', loc.code)"
        >
          {{ loc.label }}
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  background: var(--color-primary);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
  z-index: 100;
  transition: top 0.15s;
}
.skip-link:focus { top: 0; }

.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(15, 15, 19, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}
.navbar__inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.navbar__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.navbar__logo {
  font-size: 1.4rem;
  color: var(--color-primary);
}
.navbar__title {
  font-weight: 700;
  font-size: 1.05rem;
}
.navbar__tagline {
  color: var(--color-text-muted);
  font-size: 0.8rem;
  display: none;
}
@media (min-width: 640px) { .navbar__tagline { display: inline; } }

.navbar__locales {
  display: flex;
  gap: 0.4rem;
}
.locale-btn {
  padding: 0.3rem 0.75rem;
  font-size: 0.82rem;
  background: var(--color-surface-2);
  color: var(--color-text-muted);
  border-radius: 20px;
}
.locale-btn:hover { color: var(--color-text); background: var(--color-primary); }
.locale-btn--active {
  background: var(--color-primary);
  color: #fff;
  font-weight: 600;
}
</style>
