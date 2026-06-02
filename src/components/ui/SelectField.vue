<script setup>
defineProps({
  label: String,
  error: String,
  placeholder: String,
  options: { type: Array, default: () => [] },
  modelValue: [String, Number],
  id: String
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="form-group">
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <select
      :id="id"
      :class="['form-control', error ? 'invalid' : '']"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    >
      <option v-if="placeholder" value="">{{ placeholder }}</option>
      <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
    </select>
    <span v-if="error" class="form-error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>
