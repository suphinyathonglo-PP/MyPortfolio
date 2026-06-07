<template>
  <header
    :style="headerStyle"
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b"
  >
    <div
      class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
    >
      <div
        class="font-bold font-mono text-xl"
        :style="{ color: 'var(--color-heading)' }"
      >
        <span class="text-teal-400">&lt;</span> Suphinya Thonglo<span
          class="text-teal-400"
          >/&gt;</span
        >
      </div>
      <nav
        class="hidden md:flex items-center gap-2 text-sm font-mono"
        :style="navStyle"
      >
        <a href="#about" class="transition px-3 py-2 rounded-md hover-accent"
          >{{ nav.about }}</a
        >
        <a href="#skills" class="transition px-3 py-2 rounded-md hover-accent"
          >{{ nav.skills }}</a
        >
        <a
          href="#experience"
          class="transition px-3 py-2 rounded-md hover-accent"
          >{{ nav.work }}</a
        >
        <a href="#contact" class="transition px-3 py-2 rounded-md hover-accent"
          >{{ nav.contact }}</a
        >
        <button
          @click="toggleLanguage"
          class="px-3 py-2 rounded-md transition btn-ghost"
          :aria-label="language === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'"
        >
          {{ language === "th" ? "EN" : "TH" }}
        </button>
        <button
          @click="toggleTheme"
          :aria-pressed="isDark"
          class="ml-2 p-2 rounded-md transition text-teal-400 btn-ghost"
          :title="nav.theme"
        >
          <template v-if="isDark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              />
            </svg>
          </template>
          <template v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36l-1.42-1.42M7.05 6.64L5.64 5.22m12.02 0l-1.41 1.42M7.05 17.36l-1.41 1.42"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>
        </button>
      </nav>
      <button
        class="md:hidden p-2 rounded-md ml-2"
        @click="showMobile = !showMobile"
        :aria-expanded="showMobile"
        :aria-label="nav.menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <transition name="fade">
      <div v-if="showMobile">
        <div class="mobile-nav-backdrop" @click="showMobile = false"></div>
        <div class="mobile-nav-panel">
          <a href="#about" @click="showMobile = false">{{ nav.about }}</a>
          <a href="#skills" @click="showMobile = false">{{ nav.skills }}</a>
          <a href="#experience" @click="showMobile = false">{{ nav.work }}</a>
          <a href="#contact" @click="showMobile = false">{{ nav.contact }}</a>
          <div class="pt-2">
            <button
              @click="changeLanguageAndClose"
              class="p-2 rounded-md transition text-teal-400"
            >
              {{ language === "th" ? "English" : "ภาษาไทย" }}
            </button>
            <button
              @click="toggleTheme"
              :aria-pressed="isDark"
              class="p-2 rounded-md transition text-teal-400"
            >
              {{ nav.theme }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useI18n } from "../i18n";

const isDark = ref(true);
const showMobile = ref(false);
const { content, language, toggleLanguage } = useI18n();
const nav = computed(() => content.value.nav);

function applyTheme(dark) {
  isDark.value = dark;
  try {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch (e) {
    // ignore
  }
}

function toggleTheme() {
  applyTheme(!isDark.value);
}

function changeLanguageAndClose() {
  toggleLanguage();
  showMobile.value = false;
}

const headerStyle = computed(() => ({
  backgroundColor: isDark.value
    ? "rgba(15,23,42,0.78)"
    : "rgba(255,255,255,0.72)",
  borderColor: "var(--color-border)",
}));

const navStyle = computed(() => ({
  color: isDark.value ? "#94a3b8" : "#475569",
}));

onMounted(() => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      applyTheme(saved === "dark");
    } else {
      applyTheme(true);
    }
  } catch (e) {
    // ignore
  }
});

// close mobile menu when theme changes or route changes (basic)
function closeMobile() {
  showMobile.value = false;
}
</script>
