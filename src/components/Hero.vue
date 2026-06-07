<template>
  <section
    id="hero"
    class="flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10"
  >
    <div class="space-y-6 md:w-3/5 text-center md:text-left">
      <p
        class="accent font-mono tracking-wider fade-up"
        style="animation-delay: 0.05s"
      >
        {{ hero.greeting }}
      </p>
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight fade-up text-heading"
        style="animation-delay: 0.12s"
      >
        {{ hero.name }}
      </h1>
      <h2
        class="text-2xl sm:text-3xl font-semibold fade-up text-muted flex flex-wrap items-center justify-center md:justify-start gap-3 pt-5"
        style="animation-delay: 0.22s"
      >
        <span class="whitespace-nowrap">{{ hero.rolePrefix }}</span>
        <span class="font-semibold text-heading">
          <span>{{ displayedRole }}</span>
        </span>
      </h2>
      <p
        class="leading-relaxed max-w-2xl fade-up text-muted text-base sm:text-lg"
        style="animation-delay: 0.32s"
      >
        {{ hero.description }}
      </p>
      <div class="pt-4 gap-4 flex justify-center md:justify-start">
        <a
          href="/Resume.jpg"
          target="_blank"
          class="btn-ghost btn-accent inline-flex items-center gap-3 fade-up"
          style="animation-delay: 0.42s"
        >
          {{ hero.resume }}
        </a>
        <a
          href="#contact"
          class="btn-accent fade-up"
          style="animation-delay: 0.52s"
        >
          {{ hero.contact }}
        </a>
      </div>
    </div>
    <div class="md:w-2/5 flex justify-center">
      <div class="relative group">
        <div
          class="absolute -inset-1 rounded-2xl opacity-30 group-hover:opacity-50 transition duration-300 blur glow-card"
        ></div>
        <img
          src="/profile.jpg"
          :alt="hero.imageAlt"
          class="relative rounded-2xl w-64 h-64 md:w-80 md:h-80 object-cover border-2 border-card shadow-2xl float-y"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from "vue";
import { useI18n } from "../i18n";

const { content } = useI18n();
const hero = computed(() => content.value.hero);
const roles = computed(() => hero.value.roles);

const displayedRole = ref(roles.value[0]);

let idx = 0;
let char = 0;
let deleting = false;
let interval = null;

function tick() {
  const current = roles.value[idx];
  if (!deleting) {
    char++;
    displayedRole.value = current.slice(0, char);
    if (char === current.length) {
      deleting = true;
      setTimeout(() => {}, 800);
    }
  } else {
    char--;
    displayedRole.value = current.slice(0, char);
    if (char === 0) {
      deleting = false;
      idx = (idx + 1) % roles.value.length;
    }
  }
}

watch(roles, (nextRoles) => {
  idx = 0;
  char = 0;
  deleting = false;
  displayedRole.value = nextRoles[0];
});

onMounted(() => {
  interval = setInterval(tick, 90);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
