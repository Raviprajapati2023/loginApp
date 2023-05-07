<template>
  <div class="w-full">
    <div class="!w-full text-center p-2 m-2 text-lg">Address Form</div>
    <div class="w-full flex justify-center my-4">
      <q-form class="p-2 justify-center">
        <RInput label="Name" v-model="form.name" @update="modelValue" />
        <RInput label="Email" v-model="form.email" @update="modelValue" />
        <RInput label="Address" v-model="form.add" @update="modelValue" />
        <RBtn label="Save" class="ml-4" @click="submitForm" />
      </q-form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const emit = defineEmits(["modelValue", "save"]);
const prop = defineProps({
  modelValue: { type: Object },
});
const form = ref({});
const submitForm = () => {
  emit("save", form.value);
};
</script>
