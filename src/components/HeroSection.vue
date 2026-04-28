<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <div class="hero__inner">
      <div class="hero__badge">{{ t('hero.badge') }}</div>
      <h1 class="hero__heading">
        {{ t('hero.heading') }}<br />
        <span class="hero__accent">{{ t('hero.headingAccent') }}</span>
      </h1>
      <p class="hero__description">{{ t('hero.description') }}</p>
      <a href="#todo" class="hero__cta">{{ t('hero.cta') }}</a>
    </div>
    <div class="hero__visual" aria-hidden="true">
      <div class="card-preview card-preview--1">
        <span class="card-preview__dot done"></span>
        <span class="card-preview__label">Design system</span>
      </div>
      <div class="card-preview card-preview--2">
        <span class="card-preview__dot"></span>
        <span class="card-preview__label">Add i18n keys</span>
      </div>
      <div class="card-preview card-preview--3">
        <span class="card-preview__dot done"></span>
        <span class="card-preview__label">Ship to prod</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 1.5rem 4rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}
@media (min-width: 768px) { .hero { grid-template-columns: 1fr 1fr; } }

.hero__badge {
  display: inline-block;
  background: rgba(99,102,241,0.15);
  border: 1px solid rgba(99,102,241,0.3);
  color: var(--color-primary-hover);
  padding: 0.3rem 0.9rem;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1.25rem;
}
.hero__heading {
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.15;
  font-weight: 800;
  margin-bottom: 1.25rem;
}
.hero__accent { color: var(--color-primary); }
.hero__description {
  color: var(--color-text-muted);
  font-size: 1.05rem;
  max-width: 480px;
  margin-bottom: 2rem;
}
.hero__cta {
  display: inline-block;
  background: var(--color-primary);
  color: #fff;
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.15s;
  text-decoration: none;
}
.hero__cta:hover { background: var(--color-primary-hover); text-decoration: none; color: #fff; }

/* Visual */
.hero__visual {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
}
.card-preview {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.85rem 1rem;
  animation: slideIn 0.4s ease both;
}
.card-preview--1 { animation-delay: 0.05s; }
.card-preview--2 { animation-delay: 0.15s; }
.card-preview--3 { animation-delay: 0.25s; }

@keyframes slideIn {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}

.card-preview__dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid var(--color-text-muted);
  flex-shrink: 0;
}
.card-preview__dot.done {
  background: var(--color-success);
  border-color: var(--color-success);
}
.card-preview__label {
  font-size: 0.9rem;
  color: var(--color-text-muted);
}
</style>
