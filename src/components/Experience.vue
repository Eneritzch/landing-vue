<script setup>
import { experience } from "../data";
import Icon from "./Icon.vue";
</script>

<template>
  <section class="section" id="experiencia">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">La experiencia</span>
        <span class="divider"></span>
        <h2>Una mesa pensada en cada detalle</h2>
        <p>Tres pilares que definen lo que vivirás en cada visita a Rúbra.</p>
      </div>

      <div class="grid-3">
        <article class="exp-card" v-for="e in experience" :key="e.title">
          <span class="exp-icon"><Icon :name="e.icon" :size="28" /></span>
          <h3>{{ e.title }}</h3>
          <p>{{ e.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
