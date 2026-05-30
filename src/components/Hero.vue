<script setup>
import Icon from "./Icon.vue";
</script>

<template>
  <section class="hero" id="inicio">
    <div class="container hero-inner">
      <div>
        <span class="eyebrow">Cocina de Eli</span>
        <h1>
          Reserva tu mesa y vive una <span class="hl">velada memorable</span>
        </h1>
        <p class="hero-sub">
          En Cure cuidamos cada detalle: producto de temporada, maridajes
          precisos y un ambiente íntimo. Asegura tu lugar en pocos segundos.
        </p>
        <div class="hero-cta">
          <a href="#reservar" class="btn btn-primary">Reservar mesa</a>
          <a href="#menu" class="btn btn-ghost">Ver el menú</a>
        </div>
        <div class="hero-points">
          <span class="hero-point"><span class="ic"><Icon name="check" :size="18" /></span> Confirmación inmediata</span>
          <span class="hero-point"><span class="ic"><Icon name="check" :size="18" /></span> Sin costo de reserva</span>
        </div>
      </div>

      <div class="rescard" aria-hidden="true">
        <div class="rescard-bar"></div>
        <div class="rescard-top">
          <span class="name">Cure</span>
          <span class="badge">Confirmada</span>
        </div>
        <div class="rescard-body">
          <div class="rescard-field">
            <span>Fecha</span>
            <strong>Vie 12 Jun</strong>
          </div>
          <div class="rescard-field">
            <span>Hora</span>
            <strong>20:30</strong>
          </div>
          <div class="rescard-field">
            <span>Personas</span>
            <strong>4</strong>
          </div>
          <div class="rescard-field">
            <span>Mesa</span>
            <strong>Salón principal</strong>
          </div>
        </div>
        <div class="rescard-foot">
          <span>Reserva #RB-2048</span>
          <span>A nombre de Ana P.</span>
        </div>
      </div>
    </div>
  </section>
</template>
