import type { Directive } from 'vue';

interface RevealOptions {
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  once?: boolean;
}

const vReveal: Directive<HTMLElement, RevealOptions | undefined> = {
  mounted(el, binding) {
    const options = {
      direction: 'up',
      delay: 0,
      duration: 800,
      once: true,
      ...binding.value
    };

    el.classList.add('reveal');
    el.dataset.reveal = options.direction;

    el.style.setProperty(
      '--reveal-delay',
      `${options.delay}ms`
    );

    el.style.setProperty(
      '--reveal-duration',
      `${options.duration}ms`
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          el.classList.add('is-visible');

          if (options.once) {
            observer.unobserve(el);
          }
        } else if (!options.once) {
          el.classList.remove('is-visible');
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(el);

    (el as HTMLElement & {
      _revealObserver?: IntersectionObserver;
    })._revealObserver = observer;
  },

  unmounted(el) {
    const element = el as HTMLElement & {
      _revealObserver?: IntersectionObserver;
    };

    element._revealObserver?.disconnect();
  }
};

export default vReveal;