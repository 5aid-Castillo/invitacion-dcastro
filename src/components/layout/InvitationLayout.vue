
<script setup lang="ts">
import HeroView from '../sections/HeroView.vue';
import FamilyView from '../sections/FamilyView.vue';
import CountdownView from '../sections/CountdownView.vue';
import EventView from '../sections/EventView.vue';
import HotelsView from '../sections/HotelsView.vue';
import RSVPView from '../sections/RSVPView.vue';
/* import MusicPlayer from './MusicPlayer.vue'; */
</script>

<template>
  <main class="invitation-container">
    <HeroView />

    <FamilyView />

    <CountdownView />

    <EventView />

    <HotelsView />

    <RSVPView />

    <footer class="footer">
      <p>Con cariño, esperamos compartir este día contigo.</p>
      <span>♡</span>
    </footer>

   <!--  <MusicPlayer /> -->
  </main>
</template>

<style scoped>
.footer {
  padding: 45px 10px;
  text-align: center;
  font-family: var(--font-title);
  color: var(--color-sage-dark);
}

.footer span {
  display: block;
  margin-top: 12px;
  color: var(--color-gold);
  font-size: 2rem;
}
</style>
