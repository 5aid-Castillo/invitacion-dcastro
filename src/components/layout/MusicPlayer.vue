
<script setup lang="ts">
import { ref, onUnmounted } from 'vue';
import { Music2, Pause, Play } from 'lucide-vue-next';

import backgroundMusic from '../../assets/corazón-de-niño.mp3';

const audio = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);

async function toggleMusic() {
  if (!audio.value) return;

  if (isPlaying.value) {
    audio.value.pause();
    return;
  }

  try {
    await audio.value.play();
  } catch (error) {
    console.error('No se pudo reproducir la música:', error);
    isPlaying.value = false;
  }
}

function handlePlay() {
  isPlaying.value = true;
}

function handlePause() {
  isPlaying.value = false;
}

onUnmounted(() => {
  audio.value?.pause();
});
</script>

<template>
  <div class="music-player">

    <audio
      ref="audio"
      :src="backgroundMusic"
      loop
      preload="none"
      @play="handlePlay"
      @pause="handlePause"
    />

    <span class="music-label">
      {{ isPlaying ? '' : 'Melodía' }}
    </span>

    <button
      class="music-button"
      @click="toggleMusic"
      :aria-label="isPlaying ? 'Pausar música' : 'Reproducir música'"
    >
      <Pause v-if="isPlaying" :size="21"/>
      <Play v-else :size="21"/>
    </button>

    <Music2
      v-if="isPlaying"
      :size="17"
      class="music-note"
    />

  </div>
</template>

<style scoped>
.music-player {
  position: fixed;
  left: 22px;
  bottom: 22px;
  z-index: 1000;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 8px 9px 8px 18px;
  border: 1px solid rgba(185, 164, 119, 0.5);
  border-radius: 40px;

  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 5px 20px rgba(53, 70, 59, 0.15);
}

.music-label {
  color: var(--color-sage-dark);
  font-size: 0.8rem;
}

.music-button {
  display: grid;
  place-items: center;
  width: 43px;
  height: 43px;
  border: none;
  border-radius: 50%;
  background: var(--color-sage);
  color: white;
  transition: 0.2s ease;
}

.music-button:hover {
  background: var(--color-sage-dark);
  transform: scale(1.05);
}

.music-note {
  color: var(--color-gold);
  animation: float 1.5s infinite ease-in-out;
}

@keyframes float {
  50% {
    transform: translateY(-4px);
  }
}

@media (max-width: 450px) {
  .music-player {
    left: 14px;
    bottom: 14px;
  }
}
</style>
