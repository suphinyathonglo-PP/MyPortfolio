<template>
  <section id="contact" class="scroll-mt-24 contact-section">
    <div class="contact-heading">
      <h3 class="text-2xl font-bold text-heading flex items-center gap-3">
        <span class="accent font-mono text-xl">05.</span> {{ contact.title }}
      </h3>
      <p class="text-muted text-base sm:text-lg">
        {{ contact.description }}
      </p>
    </div>

    <div class="contact-panel bg-card border border-card">
      <div class="contact-list">
        <a
          v-for="item in contact.items"
          :key="item.label"
          :href="item.href"
          class="contact-item"
          :aria-label="item.ariaLabel"
        >
          <span class="contact-icon" aria-hidden="true">{{ item.icon }}</span>
          <span class="contact-copy">
            <span class="contact-label">{{ item.label }}</span>
            <span class="contact-value">{{ item.value }}</span>
          </span>
        </a>
      </div>

      <div class="contact-note">
        <p class="text-heading">{{ contact.noteTitle }}</p>
        <p class="text-muted">
          {{ contact.note }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "../i18n";

const { content } = useI18n();
const contact = computed(() => content.value.contact);
</script>
