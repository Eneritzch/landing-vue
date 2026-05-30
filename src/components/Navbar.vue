<script setup>
import { ref } from "vue";
import { navLinks } from "../data";

const open = ref(false);
</script>

<template>
  <header class="navbar">
    <div class="container nav-inner">
      <a href="#top" class="nav-logo">
        <span class="dot" /> Aurora<span style="color: var(--accent-dark)">Café</span>
      </a>

      <nav>
        <ul class="nav-links" :class="{ open }">
          <li v-for="l in navLinks" :key="l.href">
            <a :href="l.href" @click="open = false">{{ l.label }}</a>
          </li>
        </ul>
      </nav>

      <div class="nav-actions">
        <a href="#contact" class="btn btn-primary nav-cta-desktop">Pre-ordenar</a>
        <button
          class="nav-toggle"
          aria-label="Abrir menú"
          :aria-expanded="open"
          @click="open = !open"
        >
          {{ open ? "✕" : "☰" }}
        </button>
      </div>
    </div>
  </header>
</template>
