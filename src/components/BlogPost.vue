<template>
  <div>
    <slot name="header" message="Hello Header"></slot>
    <h3>Child Component</h3>
    <p>Post ID: {{ id }}</p>
    <p>Post Title: {{ title }}</p>
    <slot></slot>

    <slot name="footer" message="Hello Footer"></slot>
  </div>
</template>
<script setup>
defineProps({
  id: { type: Number, default: () => {} },
  title: { type: String, default: "" },
});
</script>
