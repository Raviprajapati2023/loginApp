<template>
  <div>
    <q-btn outline :label="label" :class="css" />
  </div>
</template>
<script setup>
const props = defineProps({
  label: { type: String, default: "Submit" },
  css: { type: String },
});
</script>
