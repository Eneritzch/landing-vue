<script setup>
import { events } from "../data";
import Icon from "./Icon.vue";
</script>

<template>
  <section class="section section-surface" id="eventos">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Próximos eventos</span>
        <h2>Conciertos abiertos para compra</h2>
        <p>Inicia sesión o crea tu cuenta para reservar tu lugar en cualquiera de estos shows.</p>
      </div>

      <div class="grid-3">
        <article class="event-card" v-for="e in events" :key="e.title">
          <div class="event-date">
            <span class="day">{{ e.day }}</span>
            <span class="mon">{{ e.month }}</span>
          </div>
          <div class="event-body">
            <span class="badge">{{ e.tag }}</span>
            <h3>{{ e.title }}</h3>
            <ul class="event-meta">
              <li><Icon name="pin" :size="16" /> {{ e.venue }}, {{ e.city }}</li>
              <li><Icon name="clock" :size="16" /> {{ e.time }}</li>
            </ul>
            <div class="event-foot">
              <span class="event-price">${{ e.price }} <span>/ entrada</span></span>
              <a href="#registro" class="btn btn-primary btn-sm">Comprar</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
