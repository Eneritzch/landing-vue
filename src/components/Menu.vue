<script setup>
import { dishes } from "../data";
</script>

<template>
  <section class="section section-surface" id="menu">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Nuestra carta</span>
        <span class="divider"></span>
        <h2>Especialidades de la casa</h2>
        <p>Una muestra de nuestro menú de temporada, que evoluciona con cada cosecha.</p>
      </div>

      <div class="menu-list">
        <article class="menu-item" v-for="d in dishes" :key="d.name">
          <div class="menu-top">
            <span class="menu-name">{{ d.name }}</span>
            <span class="menu-dots"></span>
            <span class="menu-price">${{ d.price }}</span>
          </div>
          <p class="menu-desc">{{ d.desc }}</p>
          <span class="badge">{{ d.tag }}</span>
        </article>
      </div>

      <div class="menu-foot">
        <a href="#reservar" class="btn btn-primary">Reservar mesa</a>
      </div>
    </div>
  </section>
</template>
