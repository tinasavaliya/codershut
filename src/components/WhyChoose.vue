<template>
     <div class="float-start w-100 services-block">
         <div class="container">
            <div class="headding mb-sm-5 mb-4 pb-sm-2 pb-3 text-center wow fadeInUp">
               <h3 class="text-darkGreen fw-bold pb-3 page-title">Why Choose Codershut</h3>
               <p class="text-darkGreen fw-semibold page-description opacity-70">Lorem ipsum dolor sit amet consectetur
                  adipisc <span class="d-sm-block">elit. Suspendisse varius enim.</span> </p>
            </div>
         </div>
         <div class="container">
            <div class="row why-choose-inner">
               <div class="col-xl-3 col-lg-4 col-md-6 col-12 why-choose-box" v-for="(item, index) in items" :key="index">
                  <div class="bg-darkGreen why-choose wow fadeInUp">
                     <div class="badge bg-lightblue mb-3 text-center fw-bold">{{ item.title }}</div>
                     <p class="page-description text-white fw-semibold mb-3 pe-3 me-3">{{ item.description }}</p>
                     <div class="w-100">
                        <img :src="getImageUrl(item.image)" class="ms-auto" :alt="item.title" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>
<script>
export default {
    name: 'WhyChoose',
    data(){
      return{
         items: [
            {
               title:'Support',
               description:'Support for our client even post-development of our projects.',
               image:'Ellipse21.png'
            },
            {
               title:'Satisfaction',
               description:'Satisfaction on behalf of our employees and clients',
               image:'Ellipse2.png'
            },
            {
               title:'Equality',
               description:'Equality in our workplace, in terms of work distribution and offered communication',
               image:'Ellipse3.png'
            },
            {
               title:'Transparency',
               description:'Transparancy in our work methedology and project process.',
               image:'Ellipse4.png'
            },
         ]
      }
    },
    methods: {
      getImageUrl(image) {
         return require('../assets/images/' + image);
      }
    }
}
</script>