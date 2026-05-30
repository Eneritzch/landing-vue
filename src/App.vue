<script setup>
import { ref, watch } from "vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Benefits from "./components/Benefits.vue";
import Events from "./components/Events.vue";
import RegisterForm from "./components/RegisterForm.vue";
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
    <Benefits />
    <Events />
    <RegisterForm />
  </main>
  <DesignSystem v-else @navigate="navigate" />
  <Footer @navigate="navigate" />
</template>
