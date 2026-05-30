<script setup>
import { testimonials } from "../data";
</script>

<template>
  <section class="section" id="testimonials">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Opiniones</span>
        <h2 class="section-title">Lo que dicen nuestros clientes</h2>
        <p class="section-sub">
          Miles de mañanas mejores empiezan con una taza de Aurora.
        </p>
      </div>

      <div class="testimonials-grid">
        <article class="testimonial-card" v-for="t in testimonials" :key="t.name">
          <div class="stars" aria-label="5 de 5 estrellas">{{ t.stars }}</div>
          <p>“{{ t.quote }}”</p>
          <div class="testimonial-author">
            <div class="avatar">{{ t.initial }}</div>
            <div>
              <div class="name">{{ t.name }}</div>
              <div class="role">{{ t.role }}</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
