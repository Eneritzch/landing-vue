<script setup>
import Icon from "./Icon.vue";
</script>

<template>
  <section class="hero" id="inicio">
    <div class="container hero-inner">
      <div>
        <span class="eyebrow">Entradas de conciertos</span>
        <h1>
          Crea tu cuenta y asegura tu lugar en el <span class="hl">próximo concierto</span>
        </h1>
        <p class="hero-sub">
          Regístrate en Aforo para comprar entradas con preventa exclusiva,
          pago seguro y tu acceso digital listo al instante.
        </p>
        <div class="hero-cta">
          <a href="#registro" class="btn btn-primary">Crear cuenta gratis</a>
          <a href="#eventos" class="btn btn-ghost">Ver eventos</a>
        </div>
        <div class="hero-points">
          <span class="hero-point"><span class="ic"><Icon name="check" :size="16" /></span> Sin costos ocultos</span>
          <span class="hero-point"><span class="ic"><Icon name="check" :size="16" /></span> Preventa exclusiva</span>
          <span class="hero-point"><span class="ic"><Icon name="check" :size="16" /></span> Entrada con QR</span>
        </div>
      </div>

      <div class="ticket" aria-hidden="true">
        <div class="ticket-top">
          <span class="badge">Preventa</span>
          <h3>Nova Sound Fest</h3>
          <span>Estadio Olímpico · Quito</span>
        </div>
        <div class="ticket-perf"></div>
        <div class="ticket-body">
          <div class="ticket-field">
            <span>Fecha</span>
            <strong>12 Jul · 19:00</strong>
          </div>
          <div class="ticket-field">
            <span>Zona</span>
            <strong>General A</strong>
          </div>
          <div class="ticket-field">
            <span>Precio</span>
            <strong>$45</strong>
          </div>
          <div class="ticket-qr">
            <Icon name="qr" :size="56" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
