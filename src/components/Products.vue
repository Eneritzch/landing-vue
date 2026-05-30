<script setup>
import { products } from "../data";
</script>

<template>
  <section class="section section-alt" id="products">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Nuestra selección</span>
        <h2 class="section-title">Encuentra tu café ideal</h2>
        <p class="section-sub">
          Tres perfiles distintos, una misma obsesión por la calidad.
        </p>
      </div>

      <div class="products-grid">
        <article class="product-card" v-for="p in products" :key="p.name">
          <div class="product-media">
            <span class="product-tag">{{ p.tag }}</span>
            <span role="img" :aria-label="p.name">{{ p.emoji }}</span>
          </div>
          <div class="product-body">
            <h3>{{ p.name }}</h3>
            <p>{{ p.desc }}</p>
            <div class="product-foot">
              <span class="product-price">
                {{ p.price }} <small>{{ p.unit }}</small>
              </span>
              <a href="#contact" class="btn btn-primary" style="padding: 9px 18px">
                Comprar
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
