
<script setup lang="ts">
import { invitation } from '../../data/invitation';
import { CalendarDays } from 'lucide-vue-next';
</script>

<template>
  <section
    class="invitation-section hero"
    v-reveal="{ direction: 'down', delay: 200 }"
  >
    <div class="hero-content section-card">

      <!-- Encabezado -->
      <span
        class="hero-label"
        v-reveal="{ direction: 'down', delay: 1000 }"
      >
        CON LA BENDICIÓN DE DIOS
      </span>

      <!-- Ornamento superior -->
      <div class="ornament-top" aria-hidden="true">
        <span></span>
        <i></i>
        <span></span>
      </div>

      <p
        class="invitation-text"
        v-reveal="{ direction: 'down', delay: 1000 }"
      >
        Tenemos el honor de invitarte a
      </p>

      <p
        class="eyebrow"
        v-reveal="{ direction: 'down', delay: 1000 }"
      >
        Un día especial
      </p>

      <!-- Nombre -->
      <p
        class="baby-name"
        v-reveal="{ direction: 'down', delay: 1000 }"
      >
        {{ invitation.baby.name }}
      </p>

      <!-- Ornamento botánico -->
      <div
        class="name-ornament"
        aria-hidden="true"
        v-reveal="{ direction: 'down', delay: 1000 }"
      >
        <span></span>

        <svg viewBox="0 0 100 24" fill="none">
          <path
            d="M50 19 C42 19 39 5 29 7 C22 9 24 17 32 16
               M50 19 C58 19 61 5 71 7 C78 9 76 17 68 16"
            stroke="currentColor"
            stroke-width="1"
          />
          <path
            d="M50 19 C45 12 45 5 50 3 C55 5 55 12 50 19Z"
            stroke="currentColor"
            stroke-width="1"
          />
        </svg>

        <span></span>
      </div>

      <p
        class="section-subtitle"
        v-reveal="{ direction: 'down', delay: 1000 }"
      >
        Que la luz de Dios guíe sus pasos y la Madre Tierra nutra sus sueños
      </p>

      <!-- Fecha del evento -->
      <div
        class="event-date"
        v-reveal="{ direction: 'up', delay: 1000 }"
      >
        <!-- Día de la semana -->
        <div class="date-side">
          <span class="date-line"></span>
          <span class="date-side-value">SÁBADO</span>
          <span class="date-line"></span>
        </div>

        <!-- Fecha central -->
        <div class="date-center">
          <CalendarDays
            class="calendar-icon"
            :size="22"
            :stroke-width="1.5"
          />

          <span class="date-month">DIC</span>
          <span class="date-day">19</span>
 <!--          <span class="date-year">2026</span> -->
        </div>

        <!-- Hora -->
        <div class="date-side">
          <span class="date-line"></span>
          <span class="date-side-value">2026</span>
          <span class="date-line"></span>
        </div>
      </div>

      <!-- Mensaje final -->
      <p
        class="hero-message"
        v-reveal="{ direction: 'down', delay: 1000 }"
      >
        {{ invitation.baby.message }}
      </p>

    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  width: 100%;
  padding: 55px 30px;
}

/* Encabezado */
.hero-label {
  color: var(--color-gold);
  font-size: 0.75rem;
  letter-spacing: 3px;
}

/* Ornamento superior */
.ornament-top {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 18px auto 28px;
  color: var(--color-gold);
}

.ornament-top span {
  width: 45px;
  height: 1px;
  background: currentColor;
  opacity: 0.65;
}

.ornament-top i {
  width: 7px;
  height: 7px;
  border: 1px solid currentColor;
  transform: rotate(45deg);
}

/* Texto de invitación */
.invitation-text {
  margin-bottom: 25px;
  font-family: var(--font-title);
  font-size: 1.2rem;
}

/* Subtítulo */
.eyebrow {
  display: block;
  margin-bottom: 12px;
  color: var(--color-gold);
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
}

/* Nombre */
.baby-name {
  margin: 15px 0;
  font-family: var(--font-name);
  font-size: clamp(4rem, 11vw, 7rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-sage-dark);
  overflow-wrap: anywhere;
}

/* Ornamento botánico del nombre */
.name-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--color-gold);
  margin: 5px auto 15px;
}

.name-ornament svg {
  width: 75px;
  height: 24px;
  opacity: 0.8;
}

.name-ornament span {
  width: 30px;
  height: 1px;
  background: currentColor;
  opacity: 0.5;
}

/* Subtítulo descriptivo */
.section-subtitle {
  margin: 0 auto;
  max-width: 500px;
  font-family: var(--font-title);
  line-height: 1.8;
}

/* Frase */
.hero-phrase {
  margin: 25px 0;
  font-family: var(--font-title);
  font-style: italic;
  color: var(--color-sage);
}

/* Fecha */
.hero-date {
  margin: 30px 0;
  color: var(--color-sage-dark);
  font-weight: 600;
  letter-spacing: 2px;
}

/* Mensaje final */
.hero-message {
  max-width: 450px;
  margin: 0 auto 30px;
  line-height: 1.9;
}

/* Título y separadores */
.section-title {
  margin-bottom: 35px;
}

.section-divider {
  margin: 20px auto;
}

/* Fecha del evento */
.event-date {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 28px;
  width: min(650px, 90%);
  margin: 30px auto;
  color: var(--color-sage-dark);
}

.date-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  min-width: 0;
}

.date-line {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-sage);
  opacity: 0.8;
}

.date-side-value {
  font-family: var(--font-title);
  font-size: clamp(16px, 2.5vw, 25px);
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
}

.date-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
}

.calendar-icon {
  color: var(--color-gold);
  margin-bottom: 9px;
}

.date-month {
  font-family: var(--font-title);
  font-size: 25px;
  font-weight: 600;
}

.date-day {
  font-family: var(--font-title);
  font-size: clamp(48px, 7vw, 65px);
  color: var(--color-sage);
  line-height: 0.95;
  margin: 5px 0;
}

.date-year {
  font-family: var(--font-title);
  font-size: 23px;
  font-weight: 600;
  margin-top: 8px;
}

/* Responsive */
@media (max-width: 600px) {
  .hero {
    min-height: 85vh;
  }

  .hero-content {
    padding: 40px 20px;
  }

  .ornament-top {
    margin: 15px auto 23px;
  }
}

@media (max-width: 480px) {
  .event-date {
    width: 94%;
    gap: 12px;
  }

  .date-side-value {
    font-size: 15px;
  }

  .date-month {
    font-size: 20px;
  }

  .date-day {
    font-size: 48px;
  }

  .date-year {
    font-size: 19px;
  }

  .calendar-icon {
    width: 19px;
    height: 19px;
  }

  .name-ornament svg {
    width: 65px;
  }

  .name-ornament span {
    width: 22px;
  }
}
</style>
