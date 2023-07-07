<template>
  <div>
    <div
      class="fixed inset-0 bg-gray-50 bg-opacity-30 z-50 backdrop-filter backdrop-blur-sm"
      :class="{ hidden: !isOpen }"
    ></div>
    <div
      class="fixed top-0 w-80 h-screen bg-white shadow-xl transform transition-transform duration-300 z-50"
      :class="[
        css,
        isOpen
          ? 'translate-x-0'
          : right
          ? 'translate-x-full '
          : '-translate-x-full',
        right ? 'right-0' : 'left-0',
      ]"
    >
      <div class="py-4 px-8">
        <h5 class="text-base font-semibold text-gray-800 uppercase mb-4">
          Menu
        </h5>
        <button
          @click="closeMenu"
          type="button"
          class="text-gray-800 bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close menu</span>
        </button>
        <div class="overflow-y-auto">
          <!-- Drawer content here -->
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const isOpen = ref(false);
const emit = defineEmits(["update:modelValue"]);

const closeMenu = () => {
  isOpen.value = false;
  emit("update:modelValue", false);
};

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  css: { type: String, default: "w-80" },
  right: { type: Boolean, default: false },
});

watch(
  () => props.modelValue,
  (newVal) => {
    isOpen.value = newVal;
  }
);
</script>

<style scoped>
.backdrop-blur-sm {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
</style>
