<template>
  <div
    class="min-h-screen font-sans antialiased selection:bg-teal-500 selection:text-slate-900 animated-bg overflow-x-hidden"
    style="background: var(--color-background); color: var(--color-text)"
  >
    <Navbar />
    <main
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 py-8 sm:py-12 space-y-24 sm:space-y-28 lg:space-y-32"
    >
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
    <footer
      class="text-center py-8 text-sm text-slate-500 border-t border-slate-800"
    >
      {{ content.footer }}
    </footer>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";
import { useI18n } from "./i18n";

const { content } = useI18n();
</script>
