<script setup>
import { benefits } from "../data";
import Icon from "./Icon.vue";
</script>

<template>
  <section class="section" id="beneficios">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Por qué registrarte</span>
        <h2>Una cuenta, todas las ventajas</h2>
        <p>Crear tu cuenta en Aforo desbloquea beneficios pensados para que nunca te quedes sin tu entrada.</p>
      </div>

      <div class="grid-4">
        <article class="card benefit-card" v-for="b in benefits" :key="b.title">
          <span class="benefit-icon"><Icon :name="b.icon" /></span>
          <h3>{{ b.title }}</h3>
          <p>{{ b.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
