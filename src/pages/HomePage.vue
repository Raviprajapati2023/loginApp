<template>
  <div>
    <router-link to="upload" style="text-decoration: none" class="text-red-600">
      This is home page
    </router-link>
    <RInput v-model="form.name" label="Your Name" />
    {{ form.name }}

    <div class="text-red-600 font-bold text-lg">
      Hi this is taiwind css frame work
    </div>
    <ImageUpload />
    <RBtn />
  </div>
</template>
<script setup>
import ImageUpload from "../components/ImageUpload.vue";
import RInput from "../components/RInput.vue";
// import RBtn from "src/controls/RBtn.vue";
import { ref } from "vue";
const form = ref({
  name: "",
});
</script>
