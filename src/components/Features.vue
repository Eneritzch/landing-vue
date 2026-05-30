<script setup>
import { features } from "../data";
</script>

<template>
  <section class="section" id="features">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Por qué Aurora</span>
        <h2 class="section-title">Café que se siente diferente</h2>
        <p class="section-sub">
          Cuidamos cada paso, desde la finca hasta tu taza, para ofrecerte una
          experiencia inolvidable.
        </p>
      </div>

      <div class="features-grid">
        <article class="feature-card" v-for="f in features" :key="f.title">
          <div class="feature-icon" aria-hidden="true">{{ f.icon }}</div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
