<template>
  <div class="q-pa-md">
    <q-carousel swipeable animated v-model="slide" thumbnails infinite>
      <div v-for="img in images" :key="img.name">
        <q-carousel-slide :name="img.name" :img-src="img.photo" />
      </div>
    </q-carousel>
    <div class="text-center text-white">
      <h2 class="font-bold text-center">CodeUps</h2>
      <p>Biweekly coding meetups on new technologies</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      images: [
        {
          name: 1,
          photo: "https://cdn.quasar.dev/img/mountains.jpg",
        },
        {
          name: 2,
          photo: "https://cdn.quasar.dev/img/parallax1.jpg",
        },
        {
          name: 3,
          photo: "https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
          name: 4,
          photo: "https://cdn.quasar.dev/img/quasar.jpg",
        },
      ],
    };
  },
};
</script>
