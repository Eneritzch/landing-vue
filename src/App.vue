<script setup>
import { ref, watch } from "vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Experience from "./components/Experience.vue";
import Menu from "./components/Menu.vue";
import ReservationForm from "./components/ReservationForm.vue";
import Footer from "./components/Footer.vue";
import DesignSystem from "./components/DesignSystem.vue";

const view = ref("landing");

watch(view, () => {
  window.scrollTo({ top: 0 });
});

function navigate(target) {
  view.value = target;
}
</script>

<template>
  <Navbar @navigate="navigate" />
  <main v-if="view === 'landing'">
    <Hero />
    <Experience />
    <Menu />
    <ReservationForm />
  </main>
  <DesignSystem v-else @navigate="navigate" />
  <Footer @navigate="navigate" />
</template>
