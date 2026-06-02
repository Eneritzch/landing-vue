<script setup>
import { experience } from "../data";
import Icon from "./Icon.vue";
import Card from "./ui/Card.vue";
</script>

<template>
  <section class="section" id="experiencia">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">La experiencia</span>
        <span class="divider"></span>
        <h2>Una mesa pensada en cada detalle</h2>
        <p>Tres pilares que definen lo que vivirás en cada visita a Cure.</p>
      </div>

      <div class="grid-3">
        <Card
          v-for="e in experience"
          :key="e.title"
          :title="e.title"
          :description="e.text"
        >
          <template #icon>
            <Icon :name="e.icon" :size="28" />
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>
