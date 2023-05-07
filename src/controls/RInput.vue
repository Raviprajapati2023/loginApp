<template>
  <q-input
    square
    outlined
    v-model="text"
    :modelValue="modelValue"
    :label="label"
    :type="type"
    :rules="rules"
    :disabled="disabled"
    label-position="above"
    dense
    :hide-details="hideDetails"
    :placeholder="placeholder"
    :hint="hint"
    @update:modelValue="$emit('update:modelValue', $event)"
    class="width rounded"
  />
</template>
<script setup>
const props = defineProps({
  label: { type: String, default: "" },
  type: { type: String, default: "text" },
  value: { type: [String, Number, Array] },
  rules: { type: Array, default: undefined },
  disabled: { type: Boolean },
  hideDetails: { type: Boolean },
  placeholder: { type: String, default: "" },
  hint: { type: String, default: "" },
  debounce: { type: [String, Number], default: 0 },
});

const emit = defineEmits(["modelValue"]);
</script>
<style scoped>
.width {
  width: 40vw;
  margin: 15px;
}
</style>
