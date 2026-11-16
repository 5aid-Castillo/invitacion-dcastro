
<script setup lang="ts">
import { invitation } from '../../data/invitation';
import SectionTitle from '../../components/ui/SectionTitle.vue';
import { Hotel, MapPin, Phone, ExternalLink } from 'lucide-vue-next';
</script>

<template>
  <section class="invitation-section">
    <div class="section-card">

      <SectionTitle
        eyebrow="Para nuestros invitados"
        title="Opciones de hospedaje"
        subtitle="Compartimos algunas opciones de alojamiento para facilitar tu estancia."
      />

      <div class="hotels-list">

        <article
          v-for="hotel in invitation.hotels"
          :key="hotel.name"
          class="hotel-card"
        >
          <div class="hotel-icon">
            <Hotel :size="30"/>
          </div>

          <div class="hotel-info">
            <h3>{{ hotel.name }}</h3>

            <p>
              <MapPin :size="15"/>
              {{ hotel.address }}
            </p>

            <!-- <p>
              <Phone :size="15"/>
              {{ hotel.phone }}
            </p> -->

            <div class="hotel-actions">
              <a
                :href="hotel.mapsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="primary-button"
              >
                <MapPin :size="16"/>
                Ubicación
              </a>

              <a
                v-if="hotel.website"
                :href="hotel.website"
                target="_blank"
                rel="noopener noreferrer"
                class="secondary-button"
              >
                <ExternalLink :size="16"/>
                Consultar
              </a>
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<style scoped>
.hotels-list {
  display: grid;
  gap: 18px;
}

.hotel-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 25px;
  border: 1px solid rgba(185, 164, 119, 0.35);
  border-radius: 15px;
  background: rgba(248, 246, 240, 0.8);
  text-align: left;
}

.hotel-icon {
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: rgba(185, 164, 119, 0.15);
  color: var(--color-sage);
}

.hotel-info {
  flex: 1;
}

.hotel-info h3 {
  margin-bottom: 15px;
  font-family: var(--font-title);
  color: var(--color-sage-dark);
  font-size: 1.3rem;
  font-weight: 400;
}

.hotel-info p {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 10px 0;
  font-size: 0.88rem;
  line-height: 1.6;
}

.hotel-info p svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--color-sage);
}

.hotel-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.secondary-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border: 1px solid var(--color-gold);
  border-radius: 30px;
  color: var(--color-sage-dark);
  font-size: 0.9rem;
}

@media (max-width: 450px) {
  .hotel-card {
    padding: 18px;
  }

  .hotel-icon {
    display: none;
  }
}
</style>
