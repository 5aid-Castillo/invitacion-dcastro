
<script setup lang="ts">
import { invitation } from '../../data/invitation.ts';
import { useCountdown } from '../../composables/useCountdown.ts';
import SectionTitle from '../../components/ui/SectionTitle.vue';

const countdown = useCountdown(invitation.countdown.date);
</script>

<template>
  <section id="countdown" class="invitation-section">
    <div class="section-card">

      <SectionTitle
        eyebrow="Cuenta regresiva"
        title="Cada vez falta menos"
        subtitle="Nos llena de emoción compartir este día contigo."
      />

      <div v-if="!countdown.finished" class="timer">

        <div class="time-box">
          <strong>{{ countdown.days }}</strong>
          <span>Días</span>
        </div>

        <div class="time-box">
          <strong>{{ countdown.hours }}</strong>
          <span>Horas</span>
        </div>

        <div class="time-box">
          <strong>{{ countdown.minutes }}</strong>
          <span>Minutos</span>
        </div>

        <div class="time-box">
          <strong>{{ countdown.seconds }}</strong>
          <span>Segundos</span>
        </div>

      </div>

      <p v-else class="finished">
        ¡Hoy es el gran día!
      </p>

    </div>
  </section>
</template>

<style scoped>
.timer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  max-width: 550px;
  margin: 35px auto 0;
}

.time-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 22px 8px;
  border: 1px solid rgba(185, 164, 119, 0.4);
  border-radius: 12px;
  background: rgba(248, 246, 240, 0.8);
}

.time-box strong {
  color: var(--color-sage-dark);
  font-family: var(--font-title);
  font-size: 2rem;
  font-weight: 400;
  font-variant-numeric: tabular-nums;
}

.time-box span {
  color: var(--color-sage);
  font-size: 0.8rem;
}

.finished {
  margin-top: 30px;
  color: var(--color-sage);
  font-family: var(--font-title);
  font-size: 1.8rem;
}

@media (max-width: 450px) {
  .timer {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
