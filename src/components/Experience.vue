<template>
  <section id="experience" class="scroll-mt-24">
    <h3 class="text-2xl font-bold text-heading mb-8 flex items-center gap-3">
      <span class="accent font-mono text-xl">03.</span>
      {{ experience.title }}
    </h3>
    <div class="space-y-20 md:space-y-28 lg:space-y-36">
      <div
        v-for="job in experience.jobs"
        :key="job.role"
        class="bg-card p-5 sm:p-6 rounded-xl border border-card space-y-3 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-transform duration-200"
      >
        <div
          class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-card pb-4"
        >
          <div>
            <h4 class="text-xl font-bold text-heading">
              {{ job.role }}
            </h4>
            <p class="text-muted">
              {{ job.company }}
            </p>
          </div>
          <span
            class="text-sm font-mono accent"
            style="
              background: rgba(20, 184, 166, 0.08);
              padding: 0.25rem 0.6rem;
              border-radius: 9999px;
            "
            >{{ job.period }}</span
          >
        </div>
        <p v-if="job.project" class="font-medium text-muted">
          {{ job.project }}
        </p>
        <p class="text-sm sm:text-base text-muted">
          {{ job.description }}
        </p>
        <ul class="list-disc pl-5 space-y-2 text-sm sm:text-base text-muted">
          <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </div>

      <div class="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mt-10 md:mt-12">
        <div
          v-for="project in experience.miniProjects"
          :key="project.title"
          class="bg-card p-5 rounded-xl border border-card space-y-2 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-transform duration-200"
        >
          <span class="text-xs font-mono text-muted">{{ project.period }}</span>
          <h4 class="text-lg font-bold text-heading">{{ project.title }}</h4>
          <p class="text-sm text-muted">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Projects grid: real projects showcase -->
    <div class="mt-12">
      <h3 class="text-2xl font-bold text-heading mb-6 flex items-center gap-3">
        <span class="accent font-mono text-xl">04.</span>
        {{ experience.projectTitle }}
      </h3>

      <div class="project-grid">
        <div
          v-for="project in experience.projects"
          :key="project.id"
          class="project-card bg-card p-4 rounded-xl border border-card"
        >
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener"
            class="project-thumb"
          >
            <template v-if="project.image">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover"
              />
            </template>
            <template v-else>
              <div>{{ project.initials }}</div>
            </template>
          </a>
          <div v-else class="project-thumb" aria-hidden="true">
            <template v-if="project.image">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover"
              />
            </template>
            <template v-else>
              <div>{{ project.initials }}</div>
            </template>
          </div>
          <div class="project-meta">
            <div>
              <h4 class="text-lg font-semibold text-heading">
                {{ project.title }}
              </h4>
              <div class="description">{{ project.description }}</div>
            </div>
            <!-- <div class="text-sm font-mono text-muted">{{ project.range }}</div> -->
          </div>
          <div class="project-tech">
            <span v-for="tech in project.tech" :key="tech" class="chip">{{
              tech
            }}</span>
          </div>
          <div class="project-actions pt-2">
            <a
              v-if="project.live"
              :href="project.live"
              target="_blank"
              class="btn-accent"
              >Live</a
            >
            <a
              v-if="project.repo"
              :href="project.repo"
              target="_blank"
              class="btn-ghost"
              >Repo</a
            >
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
const experience = computed(() => content.value.experience);
</script>
