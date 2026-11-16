
<script setup lang="ts">
import { invitation } from '../../data/invitation';
import SectionTitle from '../../components/ui/SectionTitle.vue';
</script>

<template>
  <section class="invitation-section hero">
    <div class="hero-content section-card">

      <span class="hero-label">
        CON LA BENDICIÓN DE DIOS
      </span>

      <div class="cross">
        <span></span>
        <span></span>
        </div>

      <p class="invitation-text">
        Tenemos el honor de invitarte al
      </p>

      <SectionTitle
        eyebrow="Un día especial"
        :title="invitation.baby.name"
        subtitle="A celebrar el sacramento de su bautismo"
      />

      <p class="hero-phrase">
        "{{ invitation.baby.phrase }}"
      </p>

      <div class="hero-date">
        {{ invitation.baby.date }}
      </div>

      <p class="hero-message">
        {{ invitation.baby.message }}
      </p>

    <!--   <a href="#countdown" class="primary-button">
        Ver invitación
      </a> -->

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

.hero-label {
  color: var(--color-gold);
  font-size: 0.75rem;
  letter-spacing: 3px;
}

.cross {
  position: relative;
  width: 30px;
  height: 38px;
  margin: 30px auto;
}

.cross span {
  position: absolute;
  display: block;
  background: var(--color-gold);
  border-radius: 2px;
}

.cross span:first-child {
  width: 3px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.cross span:last-child {
  width: 22px;
  height: 3px;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
}
.invitation-text {
  margin-bottom: 25px;
  font-family: var(--font-title);
  font-size: 1.2rem;
}

.hero-phrase {
  margin: 25px 0;
  font-family: var(--font-title);
  font-style: italic;
  color: var(--color-sage);
}

.hero-date {
  margin: 30px 0;
  color: var(--color-sage-dark);
  font-weight: 600;
  letter-spacing: 2px;
}

.hero-message {
  max-width: 450px;
  margin: 0 auto 30px;
  line-height: 1.9;
}

@media (max-width: 600px) {
  .hero {
    min-height: 85vh;
  }

  .hero-content {
    padding: 40px 20px;
  }
}
</style>
