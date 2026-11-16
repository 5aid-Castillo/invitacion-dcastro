
import { computed, onMounted, onUnmounted, ref } from 'vue';

export function useCountdown(targetDate: string) {
  const now = ref(Date.now());

  let interval: ReturnType<typeof setInterval> | undefined;

  const remaining = computed(() => {
    const difference = Math.max(
      0,
      new Date(targetDate).getTime() - now.value
    );

    return {
      days: Math.floor(difference / 86400000),
      hours: Math.floor((difference / 3600000) % 24),
      minutes: Math.floor((difference / 60000) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      finished: difference === 0
    };
  });

  onMounted(() => {
    interval = setInterval(() => {
      now.value = Date.now();
    }, 1000);
  });

  onUnmounted(() => {
    if (interval) clearInterval(interval);
  });

  return remaining;
}
