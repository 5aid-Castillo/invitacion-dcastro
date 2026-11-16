
<script setup lang="ts">
import { ref } from 'vue';
import { invitation } from '../../data/invitation';
import SectionTitle from '../../components/ui/SectionTitle.vue';
import { MessageCircle, Send } from 'lucide-vue-next';

const guestName = ref('');
const attendance = ref('Sí, asistiré');
const companions = ref(0);

function confirmAttendance() {
  if (!guestName.value.trim()) {
    alert('Por favor, escribe tu nombre.');
    return;
  }

  const message = [
    '¡Hola! Quiero confirmar mi asistencia al bautizo.',
    '',
    `Nombre: ${guestName.value}`,
    `Asistencia: ${attendance.value}`,
    `Acompañantes: ${companions.value}`
  ].join('\n');

  const url = `https://wa.me/${
    invitation.rsvp.whatsappNumber
  }?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank', 'noopener,noreferrer');
}
</script>

<template>
  <section class="invitation-section">
    <div class="section-card">

      <SectionTitle
        eyebrow="Nos encantará verte"
        title="¿Nos acompañas?"
        subtitle="Tu presencia hará este día aún más especial. Por favor, confirma tu asistencia."
      />

      <form @submit.prevent="confirmAttendance">

        <div class="form-group">
          <label for="guest">Nombre completo</label>

          <input
            id="guest"
            v-model="guestName"
            type="text"
            placeholder="Escribe tu nombre"
            required
          />
        </div>

        <div class="form-group">
          <label for="attendance">¿Podrás acompañarnos?</label>

          <select id="attendance" v-model="attendance">
            <option>Sí, asistiré</option>
            <option>No podré asistir</option>
          </select>
        </div>

        <div class="form-group">
          <label for="companions">Número de acompañantes</label>

          <input
            id="companions"
            v-model.number="companions"
            type="number"
            min="0"
            max="20"
          />
        </div>

        <button type="submit" class="primary-button submit-button">
          <MessageCircle :size="19"/>
          Confirmar por WhatsApp
          <Send :size="17"/>
        </button>

      </form>

    </div>
  </section>
</template>

<style scoped>
form {
  max-width: 450px;
  margin: 0 auto;
  text-align: left;
}

.form-group {
  margin: 22px 0;
}

.form-group label {
  display: block;
  margin-bottom: 9px;
  color: var(--color-sage-dark);
  font-size: 0.9rem;
  font-weight: 600;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 14px;
  border: 1px solid rgba(185, 164, 119, 0.5);
  border-radius: 9px;
  outline: none;
  background: rgba(248, 246, 240, 0.8);
  color: var(--color-text);
}

.form-group input:focus,
.form-group select:focus {
  border-color: var(--color-sage);
  box-shadow: 0 0 0 3px rgba(83, 105, 92, 0.1);
}

.submit-button {
  width: 100%;
  margin-top: 15px;
}
</style>
