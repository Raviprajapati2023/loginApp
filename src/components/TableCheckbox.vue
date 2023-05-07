<template>
  <div>
    <table>
      <thead>
        <th class="marg">Read</th>
        <th class="marg">Write</th>
        <th class="marg">Delete</th>
      </thead>
      <tbody>
        <td>
          <q-checkbox
            v-model="isChecked1"
            :val="1"
            @change="onCheckboxChange(1)"
            class="marg"
            :disable="isChecked3 || isChecked2"
          />
        </td>
        <td>
          <q-checkbox
            v-model="isChecked2"
            :val="2"
            @change="onCheckboxChange(2)"
            :disable="isChecked3"
            class="marg"
          />
        </td>
        <td>
          <q-checkbox
            v-model="isChecked3"
            :val="4"
            @change="onCheckboxChange(4)"
            class="marg"
          />
        </td>
      </tbody>
    </table>

    <p v-if="brand">brand: {{ brand }}</p>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const isChecked1 = ref(false);
const isChecked2 = ref(false);
const isChecked3 = ref(false);

watch(isChecked2, (newValue) => {
  if (newValue) {
    isChecked1.value = true;
  }
});

watch(isChecked3, (newValue) => {
  if (newValue) {
    isChecked1.value = true;
    isChecked2.value = true;
  }
});

const onCheckboxChange = (checkboxNumber) => {
  if (checkboxNumber === 2 && isChecked2.value) {
    isChecked1.value = true;
  } else if (checkboxNumber === 1 && !isChecked1.value) {
    isChecked2.value = false;
    isChecked3.value = false;
  }
};

const brand = ref(0);
watch([isChecked1, isChecked2, isChecked3], () => {
  brand.value =
    (isChecked1.value ? 1 : 0) +
    (isChecked2.value ? 2 : 0) +
    (isChecked3.value ? 4 : 0);
});
</script>
<style>
.marg {
  margin-left: 50px;
  margin-right: 50px;
  padding: 10px;
}
</style>
