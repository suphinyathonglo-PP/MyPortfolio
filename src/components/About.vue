<template>
  <section id="about" class="scroll-mt-24">
    <h3 class="text-2xl font-bold text-heading mb-8 flex items-center gap-3">
      <span class="accent font-mono text-xl">01.</span> {{ about.title }}
    </h3>
    <div class="grid md:grid-cols-2 gap-12">
      <div class="space-y-5 leading-relaxed text-muted text-base sm:text-lg">
        <p v-for="paragraph in about.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>

      <div class="bg-card p-6 rounded-xl border border-card">
        <h4 class="text-lg font-semibold text-heading mb-4">
          {{ about.educationTitle }}
        </h4>
        <div class="space-y-4">
          <div
            v-for="item in about.education"
            :key="item.degree"
            class="relative pl-6 border-l-2 border-teal-500/30"
          >
            <div
              class="absolute w-3 h-3 rounded-full -left-[7px] top-1.5"
              :class="item.active ? 'bg-teal-400' : 'bg-slate-600'"
            ></div>
            <p
              class="text-sm font-mono"
              :class="item.active ? 'text-teal-400' : 'text-muted'"
            >
              {{ item.period }}
            </p>
            <h5 class="font-medium text-heading">{{ item.degree }}</h5>
            <p class="text-sm text-muted">{{ item.school }}</p>
            <p class="text-xs accent mt-1" style="opacity: 0.8">
              {{ item.gpa }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "../i18n";

const { content } = useI18n();
const about = computed(() => content.value.about);
</script>
