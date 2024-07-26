<template>
  <div class="float-start w-100 services-block pt-0">
    <div class="container">
      <div class="headding mb-sm-5 mb-4 pb-sm-2 pb-3 text-center wow fadeInUp">
        <div class="badge badge-skyBlue mb-3 text-center">Work</div>
        <h3 class="text-darkGreen fw-bold pb-2 page-title">Our Portfolio</h3>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-4 col-sm-6 col-12 mb-5" v-for="(item, index) in items" :key="index">
          <div class="w-100 wow fadeInUp">
            <img :src="getImageUrl(item.image)" class="img-fluid w-100" :alt="item.title" />
          </div>
          <div
            class="
              d-flex
              justify-content-between
              align-items-center
              pt-1
              mt-3
              wow
              fadeInUp
            "
          >
            <h6 class="page-small-description fw-bold text-blue me-2">
              {{ item.title }}
            </h6>
            <a
              href="#"
              class="
                page-short-description
                text-blue
                opacity-50
                fw-semibold
                d-block
                get-detail
              "
              >{{ item.url }}</a
            >
          </div>
        </div>
      </div>
      <div class="d-block text-center mt-sm-5 pt-1 wow fadeInUp">
        <a href="#" class="btn btn-lightGreen">Discover More</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePorfolio",
  data(){
      return{
         items: [
            {
               title:'Ecommerce academy',
               url:'Get Details',
               image:'Rectangle28.png'
            },
            {
               title:'Crisp Chat - UI Components',
               url:'Get Details',
               image:'Rectangle29.png'
            },
            {
               title:'Brand application',
               url:'Get Details',
               image:'Rectangle30.png'
            },
            {
               title:'Nexadus',
               url:'Get Details',
               image:'Rectangle31.png'
            },
            {
               title:'Haystack',
               url:'Get Details',
               image:'Rectangle32.png'
            },
            {
               title:'Visual Identity',
               url:'Get Details',
               image:'Rectangle33.png'
            },
         ]
      }
    },
    methods: {
      getImageUrl(image) {
         return require('../assets/images/' + image);
      }
    }
};
</script>