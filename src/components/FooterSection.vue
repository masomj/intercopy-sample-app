<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <p class="footer__copy">{{ t('footer.rights') }}</p>
      <p class="footer__credit">
        {{ t('footer.madeWith') }} ♥ {{ t('footer.using') }}
        <a href="https://intercopy.co.uk" target="_blank" rel="noopener">{{ t('footer.link') }}</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  padding: 2rem 1.5rem;
  background: var(--color-surface);
}
.footer__inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
}
.footer__copy, .footer__credit {
  color: var(--color-text-muted);
  font-size: 0.85rem;
}
</style>
