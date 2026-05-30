<script setup>
import Icon from "./Icon.vue";

const emit = defineEmits(["navigate"]);
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="brand">
            <span class="brand-mark"><Icon name="utensils" :size="18" /></span>
            Rúbra
          </span>
          <p>Cocina de autor con producto de temporada. Reserva tu mesa y déjate sorprender en cada visita.</p>
        </div>

        <div class="footer-col">
          <h4>Restaurante</h4>
          <ul>
            <li><a href="#experiencia">Experiencia</a></li>
            <li><a href="#menu">Menú</a></li>
            <li><a href="#reservar">Reservar</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Visítanos</h4>
          <ul>
            <li><a href="#reservar">Av. de la Cocina 123, Quito</a></li>
            <li><a href="#reservar">+593 99 123 4567</a></li>
            <li><a href="#reservar">Mar a Dom, 13:00 - 23:00</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Recursos</h4>
          <ul>
            <li>
              <button class="nav-link-btn" style="color: var(--red-100)" @click="emit('navigate', 'design')">
                Design System
              </button>
            </li>
            <li><a href="#inicio">Términos</a></li>
            <li><a href="#inicio">Privacidad</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 Rúbra. Todos los derechos reservados.</span>
        <span>Hecho con Vue</span>
      </div>
    </div>
  </footer>
</template>
