<template>
  <div>
    <pre>
    {{ ipAddress }}
</pre
    >
  </div>
</template>
<script setup>
import { ref } from "vue";
const ipAddress = ref({});

fetch("http://ip-api.com/json/?fields=61439")
  .then((res) => res.json())
  .then((res) => {
    ipAddress.value = res;
  });
</script>
