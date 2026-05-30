<script setup>
import { ref } from "vue";
import { navLinks } from "../data";
import Icon from "./Icon.vue";

const emit = defineEmits(["navigate"]);
const open = ref(false);

function goHome() {
  emit("navigate", "landing");
  open.value = false;
}

function openDesign() {
  emit("navigate", "design");
  open.value = false;
}
</script>

<template>
  <header class="navbar">
    <div class="container nav-inner">
      <button class="brand" @click="goHome">
        <span class="brand-mark"><Icon name="utensils" :size="18" /></span>
        Cure
      </button>

      <nav>
        <ul class="nav-links" :class="{ open }">
          <li v-for="l in navLinks" :key="l.href">
            <a :href="l.href" @click="goHome">{{ l.label }}</a>
          </li>
          <li>
            <button class="nav-link-btn" @click="openDesign">Design System</button>
          </li>
        </ul>
      </nav>

      <div class="nav-actions">
        <a href="#reservar" class="btn btn-primary btn-sm nav-cta-desktop" @click="goHome">
          Reservar
        </a>
        <button
          class="nav-toggle"
          aria-label="Abrir menu"
          :aria-expanded="open"
          @click="open = !open"
        >
          <Icon :name="open ? 'close' : 'menu'" />
        </button>
      </div>
    </div>
  </header>
</template>
