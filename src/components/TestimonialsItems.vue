<template>
  <carousel :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
    <slide
      class="testimonials-inner wow fadeInUp"
      v-for="(testimonial, index) in testimonials"
      :key="index"
      :wrap-around="true"
    >
      <div class="testimonials-box bg-lightskyBlue w-100">
        <ul class="d-flex">
          <li v-for="(testimonial, index) in testimonials" :key="index">
            <img
              :src="getImageUrl(testimonial.image)"
              class="img-fluid"
              :alt="testimonial.client"
            />
          </li>
        </ul>
        <p
          class="
            pt-3
            mt-3
            pb-3
            page-extra-small-description
            text-blue
            fw-normal
          "
        >
          {{ testimonial.description }}
        </p>
      </div>
      <div class="client-box d-flex align-items-center pt-4">
        <p
          class="
            text-center
            fw-semibold
            text-white
            page-small-description
            ms-4
            ps-2
          "
        >
          {{ testimonial.client }}
        </p>
      </div>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  name: "TestimonialsBlock",
  props: ["testimonials"],
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 3,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      320: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // 660px and up
      660: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: "center",
      },
    },
  }),
  methods: {
    getImageUrl(image) {
      return require("../assets/images/" + image);
    },
  },
};
</script>

<style>
/* .carousel__prev, .carousel__next {
    background: transparent;
    } */
</style>