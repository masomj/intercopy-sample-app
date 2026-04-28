<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const features = [
  { key: 'simple', icon: '✦' },
  { key: 'fast',   icon: '⚡' },
  { key: 'global', icon: '🌍' },
]
</script>

<template>
  <section class="features">
    <div class="features__inner">
      <h2 class="features__heading">{{ t('features.heading') }}</h2>
      <div class="features__grid">
        <article v-for="f in features" :key="f.key" class="feature-card">
          <div class="feature-card__icon" aria-hidden="true">{{ f.icon }}</div>
          <h3 class="feature-card__title">{{ t(`features.cards.${f.key}.title`) }}</h3>
          <p class="feature-card__desc">{{ t(`features.cards.${f.key}.description`) }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 4rem 1.5rem;
}
.features__inner { max-width: 1100px; margin: 0 auto; }
.features__heading {
  text-align: center;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  margin-bottom: 2.5rem;
}
.features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}
.feature-card {
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 1.75rem;
  transition: border-color 0.2s, transform 0.2s;
}
.feature-card:hover {
  border-color: rgba(99,102,241,0.4);
  transform: translateY(-2px);
}
.feature-card__icon {
  font-size: 1.75rem;
  margin-bottom: 0.85rem;
}
.feature-card__title {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.feature-card__desc {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}
</style>
