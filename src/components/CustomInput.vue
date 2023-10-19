<template>
  <div>
    <input :modelValue="modelValue" @update="updateValue" />
  </div>
</template>
<script setup>
const emit = defineEmits(["update:modelValue"]);
defineProps({ modelValue: { type: String, default: "" } });
const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
