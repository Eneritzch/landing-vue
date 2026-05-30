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
            <span class="brand-mark"><Icon name="ticket" :size="20" /></span>
            Aforo
          </span>
          <p>La plataforma para registrarte, comprar entradas y guardar tu acceso digital a los mejores conciertos.</p>
        </div>

        <div class="footer-col">
          <h4>Plataforma</h4>
          <ul>
            <li><a href="#beneficios">Beneficios</a></li>
            <li><a href="#eventos">Eventos</a></li>
            <li><a href="#registro">Crear cuenta</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Soporte</h4>
          <ul>
            <li><a href="#registro">Centro de ayuda</a></li>
            <li><a href="#registro">Reembolsos</a></li>
            <li><a href="#registro">Contacto</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Recursos</h4>
          <ul>
            <li>
              <button class="nav-link-btn" style="color: var(--blue-100)" @click="emit('navigate', 'design')">
                Design System
              </button>
            </li>
            <li><a href="#inicio">Términos</a></li>
            <li><a href="#inicio">Privacidad</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 Aforo. Todos los derechos reservados.</span>
        <span>Hecho con Vue</span>
      </div>
    </div>
  </footer>
</template>
