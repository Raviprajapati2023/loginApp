<template>
  <q-item clickable tag="a" target="_blank">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <router-link :to="link" style="text-decoration: none">
      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>{{ caption }}</q-item-label>
      </q-item-section>
    </router-link>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "home",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
