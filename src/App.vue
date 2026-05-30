<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Features from "./components/Features.vue";
import Products from "./components/Products.vue";
import Testimonials from "./components/Testimonials.vue";
import ContactForm from "./components/ContactForm.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <main>
    <Hero />
    <Features />
    <Products />
    <Testimonials />
    <ContactForm />
  </main>
  <Footer />
</template>
