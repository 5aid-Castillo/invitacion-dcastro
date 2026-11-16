
<script setup lang="ts">
import { invitation } from '../../data/invitation';
import SectionTitle from '../../components/ui/SectionTitle.vue';
import { Church, MapPin, Clock, PartyPopper } from 'lucide-vue-next';

const events = [
  {
    ...invitation.event.mass,
    type: 'Ceremonia religiosa',
    icon: Church
  },
  {
    ...invitation.event.reception,
    type: 'Celebración social',
    icon: PartyPopper
  }
];
</script>

<template>
  <section class="invitation-section">
    <div class="section-card"  v-reveal="{ direction: 'down', delay:400 }">

      <SectionTitle
        eyebrow="Detalles del evento"
        title="¿Dónde nos vemos?"
        subtitle="Nos encantará contar con tu presencia."
        v-reveal="{ direction: 'down', delay:1000 }"
      />

      <div class="events-grid"  v-reveal="{ direction: 'down', delay:1000 }">

        <article
          v-for="event in events"
          :key="event.name"
          class="event-card"
        >
          <component :is="event.icon" :size="32" class="icon"/>

          <span class="event-type">{{ event.type }}</span>

          <h3>{{ event.name }}</h3>

          <div class="event-detail">
            <Clock :size="17"/>
            <span>{{ event.time }}</span>
          </div>

          <div class="event-detail">
            <MapPin :size="17"/>
            <span>{{ event.address }}</span>
          </div>

          <a
            :href="event.mapsUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="primary-button"
          >
            Ver ubicación
          </a>
        </article>

      </div>
    </div>
  </section>
</template>

<style scoped>
.events-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.event-card {
  padding: 30px 20px;
  border: 1px solid rgba(185, 164, 119, 0.4);
  border-radius: 15px;
  background: rgba(248, 246, 240, 0.8);
}

.icon {
  color: var(--color-gold);
  margin: 0 auto 15px;
}

.event-type {
  display: block;
  color: var(--color-gold);
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.event-card h3 {
  margin: 15px 0 22px;
  color: var(--color-sage-dark);
  font-family: var(--font-title);
  font-size: 1.4rem;
  font-weight: 400;
}

.event-detail {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 15px 0;
  text-align: left;
  font-size: 0.9rem;
  line-height: 1.6;
}

.event-detail svg {
  flex-shrink: 0;
  color: var(--color-sage);
}

.event-card .primary-button {
  margin-top: 15px;
}

@media (max-width: 600px) {
  .events-grid {
    grid-template-columns: 1fr;
  }
}
</style>
