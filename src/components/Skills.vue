<template>
  <section id="skills" class="scroll-mt-24">
    <h3 class="text-2xl font-bold text-heading mb-8 flex items-center gap-3">
      <span class="accent font-mono text-xl">02.</span> {{ skills.title }}
    </h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(skillGroup, index) in skills.groups"
        :key="index"
        class="bg-card p-6 rounded-xl border border-card hover:border-card transition duration-300 gap-y-3 flex flex-col"
      >
        <h4 class="accent font-semibold mb-6 text-lg leading-snug">
          {{ skillGroup.category }}
        </h4>
        <div class="flex flex-wrap gap-x-2 gap-y-2">
          <span v-for="item in skillGroup.items" :key="item" class="chip">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "../i18n";

const { content } = useI18n();
const skills = computed(() => content.value.skills);
</script>
