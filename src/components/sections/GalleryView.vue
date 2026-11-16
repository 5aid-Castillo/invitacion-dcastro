
<script setup lang="ts">
import { ref, computed } from 'vue';
import SectionTitle from '@/components/ui/SectionTitle.vue';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Images
} from 'lucide-vue-next';
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'

const photos = [
  {
    src: image1,
    alt: 'Fotografía especial 1'
  },
  {
    src: image2,
    alt: 'Fotografía especial 2'
  },
  {
    src: image3,
    alt: 'Fotografía especial 3'
  },
  {
    src: image4,
    alt: 'Fotografía especial 4'
  },
  {
    src: image5,
    alt: 'Fotografía especial 5'
  }
];

const selectedPhoto = ref<number | null>(null);

function openPhoto(index: number) {
  selectedPhoto.value = index;
}

function closePhoto() {
  selectedPhoto.value = null;
}

function nextPhoto() {
  if (selectedPhoto.value === null) return;

  selectedPhoto.value =
    (selectedPhoto.value + 1) % photos.length;
}

function previousPhoto() {
  if (selectedPhoto.value === null) return;

  selectedPhoto.value =
    (selectedPhoto.value - 1 + photos.length) % photos.length;
}

const currentPhoto = computed(() => {
    if(selectedPhoto.value === null) return null;
    return photos[selectedPhoto.value] ?? null;
})
</script>

<template>
  <section class="invitation-section gallery-section">
    <div class="section-card" v-reveal="{ direction: 'down', delay:400 }">

      <SectionTitle
        eyebrow="Momentos especiales"
        title="Galería"
        subtitle="Pequeños momentos que llenan nuestro corazón de felicidad."
        v-reveal="{ direction: 'down', delay:1000 }"
      />


      <div class="gallery-icon" v-reveal="{ direction: 'down', delay:1000 }">
        <Images :size="25"/>
      </div>

      <div class="gallery-grid">

        <button
          v-for="(photo, index) in photos"
          :key="photo.src"
          class="gallery-item"
          :class="`photo-${index + 1}`"
          type="button"
          @click="openPhoto(index)"
          :aria-label="`Ver fotografía ${index + 1}`"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            loading="lazy"
          />

          <div class="photo-overlay">
            <Images :size="25"/>
          </div>
        </button>

      </div>

      <p class="gallery-footer" v-reveal="{ direction: 'down', delay:1000 }">
        Recuerdos que guardaremos por siempre ♡
      </p>

    </div>

    <!-- Visor de fotografías -->
    <Teleport to="body">
      <div
        v-if="selectedPhoto !== null"
        class="lightbox"
        @click.self="closePhoto"
      >

        <button
          class="lightbox-close"
          @click="closePhoto"
          aria-label="Cerrar fotografía"
        >
          <X :size="27"/>
        </button>

        <button
          class="lightbox-arrow previous"
          @click="previousPhoto"
          aria-label="Fotografía anterior"
        >
          <ChevronLeft :size="30"/>
        </button>

        <div class="lightbox-content">
          <img
            :src="currentPhoto?.src"
            :alt="currentPhoto?.alt"
          />

          <span class="photo-counter">
            {{ selectedPhoto + 1 }} / {{ photos.length }}
          </span>
        </div>

        <button
          class="lightbox-arrow next"
          @click="nextPhoto"
          aria-label="Fotografía siguiente"
        >
          <ChevronRight :size="30"/>
        </button>

      </div>
    </Teleport>

  </section>
</template>

<style scoped>
.gallery-icon {
  display: flex;
  justify-content: center;
  margin: -10px 0 25px;
  color: var(--color-gold);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 180px;
  gap: 14px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  padding: 0;
  border: 4px solid white;
  border-radius: 12px;
  background: var(--color-ivory);
  box-shadow: var(--shadow-soft);
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.08);
}

.photo-1 {
  grid-column: span 2;
  grid-row: span 2;
}

.photo-4 {
  grid-column: span 2;
}

.photo-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(53, 70, 59, 0);
  color: white;
  opacity: 0;
  transition: 0.3s ease;
}

.gallery-item:hover .photo-overlay {
  background: rgba(53, 70, 59, 0.25);
  opacity: 1;
}

.gallery-footer {
  margin-top: 30px;
  color: var(--color-sage);
  font-family: var(--font-title);
  font-size: 1.3rem;
  font-style: italic;
}

/* Visor de fotografías */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 65px 55px;
  background: rgba(25, 32, 27, 0.94);
}

.lightbox-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  max-height: 100%;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border: 4px solid white;
  border-radius: 8px;
}

.photo-counter {
  margin-top: 15px;
  color: white;
  font-size: 0.9rem;
}

.lightbox-close,
.lightbox-arrow {
  position: absolute;
  display: grid;
  place-items: center;
  width: 45px;
  height: 45px;
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
  color: white;
  transition: 0.2s ease;
}

.lightbox-close:hover,
.lightbox-arrow:hover {
  background: var(--color-sage);
}

.lightbox-close {
  top: 20px;
  right: 20px;
}

.lightbox-arrow {
  top: 50%;
  transform: translateY(-50%);
}

.previous {
  left: 20px;
}

.next {
  right: 20px;
}

@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 145px;
    gap: 10px;
  }

  .photo-1 {
    grid-column: span 2;
    grid-row: span 2;
  }

  .photo-4 {
    grid-column: span 1;
  }

  .lightbox {
    padding: 60px 45px;
  }

  .lightbox-arrow {
    width: 38px;
    height: 38px;
  }

  .previous {
    left: 5px;
  }

  .next {
    right: 5px;
  }
}
</style>
