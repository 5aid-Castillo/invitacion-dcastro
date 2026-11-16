
<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="section-title">
    <span v-if="eyebrow" class="eyebrow">
      {{ eyebrow }}
    </span>

    <h2 class="section-heading">
      {{ title }}
    </h2>

    <div class="section-divider"></div>

    <p v-if="subtitle" class="section-subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>

<style scoped>
.section-title {
  margin-bottom: 35px;
}

.eyebrow {
  display: block;
  margin-bottom: 12px;
  color: var(--color-gold);
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.section-divider {
  margin: 20px auto;
}
</style>
