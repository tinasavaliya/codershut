<template>
  <div class="col-sm-6 wow fadeInUp mb-4" v-for="(service,index) in services" :key="index">
        <div class="services-box" :class="service.bgClass">
            <div class="services-icon mb-4 pb-1">
                <img :src="getImageUrl(service.image)" class="img-fluid" :alt="service.title" />
            </div>
            <div class="services-content">
                <h3 class="text-darkGreen fw-semibold pb-3 mb-1 page-larg-description">{{ service.title }}
                </h3>
                <p class="fw-medium text-darkGreen opacity-70">{{ service.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ServiceItem",
  props: ["services"],
  methods: {
    getImageUrl(image) {
      return require("../assets/images/" + image);
    },
  },
};
</script>
