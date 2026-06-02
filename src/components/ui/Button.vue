<script setup>
defineProps({
  variant: { type: String, default: "primary" },
  size: { type: String, default: "" },
  as: { type: [String, Object], default: "button" }
});
</script>

<template>
  <component :is="as" :class="['btn', `btn-${variant}`, size ? `btn-${size}` : '']">
    <slot />
  </component>
</template>
