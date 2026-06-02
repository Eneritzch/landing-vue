<script setup>
defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <article class="exp-card">
    <span v-if="$slots.icon" class="exp-icon">
      <slot name="icon" />
    </span>
    <h3 v-if="title">{{ title }}</h3>
    <p v-if="description">{{ description }}</p>
  </article>
</template>
