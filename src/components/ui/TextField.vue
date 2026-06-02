<script setup>
defineProps({
  label: String,
  error: String,
  type: { type: String, default: "text" },
  modelValue: [String, Number],
  id: String
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="form-group">
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    
    <textarea
      v-if="type === 'textarea'"
      :id="id"
      :class="['form-control', error ? 'invalid' : '']"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    <input
      v-else
      :id="id"
      :type="type"
      :class="['form-control', error ? 'invalid' : '']"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />

    <span v-if="error" class="form-error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>
