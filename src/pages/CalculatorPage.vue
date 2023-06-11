<template>
  <div class="p-8 w-full" style="height: 100vh">
    <div
      class="mt-8 ml-12 p-2 border border-gray-700 bg-gray-500 border-solid rounded-lg w-4/12 h-auto"
    >
      <!-- CALCULATOR RESULT  -->
      <div
        class="bg-orange-300 p-2 text-white w-full h-16 rounded font-bold text-lg text-right"
      >
        {{ calculatorValue || 0 }}
      </div>

      <!-- CALCULATOR BUTTON  -->
      <div class="row">
        <div
          class="col-3 p-2 font-bold text-center rounded"
          v-for="n in calculatorElement"
          :key="n"
        >
          <div
            class="text-white text-center m-2 py-3 font-bold rounded"
            :class="{
              'bg-green-400': ['C', '*', '/', '-', '+', '%', '.', '='].includes(
                n
              ),
            }"
            @click="action(n)"
          >
            {{ n }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const calculatorValue = ref("");
const previousCalculatorValue = ref("");
const operator = ref(null);

const calculatorElement = ref([
  "C",
  "*",
  "/",
  "-",
  7,
  8,
  9,
  "+",
  4,
  5,
  6,
  "%",
  1,
  2,
  3,
  "=",
  0,
  ".",
]);
const action = (n) => {
  // APPEND VALUE
  if (!isNaN(n) || n === ".") {
    calculatorValue.value += n + "";
  }
  // CLEAR VALUE
  if (n === "C") {
    calculatorValue.value = "";
  }
  if (n === "%") {
    calculatorValue.value = calculatorValue.value / 100 + "";
  }
  if (["+", "-", "*", "/"].includes(n)) {
    operator.value = n;
    previousCalculatorValue.value = calculatorValue.value;
    calculatorValue.value = "";
  }
  if (n === "=") {
    calculatorValue.value = eval(
      previousCalculatorValue.value + operator.value + calculatorValue.value
    );
    previousCalculatorValue.value = "";
    operator.value = null;
  }
};
</script>
