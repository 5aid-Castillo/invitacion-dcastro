
<script setup lang="ts">
import { invitation } from '../../data/invitation';
import SectionTitle from '../../components/ui/SectionTitle.vue';
import { Heart, Users, Sparkles } from 'lucide-vue-next';
</script>

<template>
  <section class="invitation-section">
    <div class="section-card">

      <SectionTitle
        eyebrow="Nuestra familia"
        title="Un momento para compartir"
        subtitle="Las personas que nos acompañan en este camino tan especial."
      />

      <Heart :size="28" class="icon"/>

      <div class="family-group">
        <h3>Con amor, sus padres</h3>

        <div class="names">
          <p v-for="parent in invitation.family.parents" :key="parent">
            {{ parent }}
          </p>
        </div>
      </div>

      <div class="family-group">
        <Users :size="27" class="icon"/>

        <h3>Madrina</h3>

        <div class="names">
          <p v-for="godparent in invitation.family.godparents" :key="godparent">
            {{ godparent }}
          </p>
        </div>
      </div>

      <div class="dedication">
        <Sparkles :size="22" class="icon"/>

        <p>{{ invitation.family.dedication }}</p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.icon {
  color: var(--color-gold);
  margin: 15px auto;
}

.family-group {
  margin: 35px 0;
}

.family-group h3 {
  margin-bottom: 18px;
  font-family: var(--font-title);
  color: var(--color-sage-dark);
  font-size: 1.35rem;
  font-weight: 400;
}

.names {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 17px;
}

.names p {
  color: var(--color-sage);
  font-size: 1.1rem;
}

.dedication {
  max-width: 500px;
  margin: 35px auto 0;
  padding: 25px;
  border-top: 1px solid rgba(185, 164, 119, 0.4);
  line-height: 1.9;
  font-family: var(--font-title);
  font-style: italic;
}
</style>
