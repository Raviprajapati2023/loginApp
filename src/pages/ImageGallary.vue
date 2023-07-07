<template>
  <div class="p-4 my-8">
    <p>Has published books:</p>
    <input type="text " v-model="x" />
    <h2>Watch effect</h2>
    <input ref="input" />
    <div>
      Todo :
      <input type="text " v-model="todoId" class="border-1 bg-gray-200" />
    </div>
    <q-btn label="Open Drawer" class="my-4 ml-64" @click="openDrawer = true" />
    <DemoDrawer v-model="openDrawer" right>
      <div class="py-6">
        <q-btn label="close" @click="openDrawer = false" />
        draewr content goes here ......
      </div>
    </DemoDrawer>
  </div>
</template>

<script setup>
import DemoDrawer from "src/components/DemoDrawer.vue";
import { ref, computed, watch, watchEffect, onMounted } from "vue";
const todoId = ref(1);
const openDrawer = ref(false);
const input = ref(null);
const data = ref(null);
watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  data.value = await response.json();
});
onMounted(() => {
  input.value.focus();
});
</script>
<style>
input {
  border: 1px solid;
}
</style>
