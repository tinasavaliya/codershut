<template>
    <div class="float-start w-100 services-block pb-0">
         <div class="container">
            <div class="headding mb-sm-5 mb-4 pb-sm-2 pb-3 text-center wow fadeInUp">
               <div class="badge badge-skyBlue mb-3 text-center">Testimonials</div>
               <h3 class="text-darkGreen fw-bold pb-2 page-title">What Our Clients Say</h3>
               <p class="text-darkGreen fw-semibold page-description opacity-70">Lorem ipsum dolor sit amet consectetur
                  adipisc <span class="d-sm-block">elit. Suspendisse varius enim.</span> </p>
            </div>
         </div>
         <div class="testimonials-wrapper">
            <TestimonialsItems :testimonials="testimonials" />
         </div>
      </div>
</template>
<script>
import TestimonialsItems from './TestimonialsItems.vue';
export default {
    name: 'TestimonialsBlock',

    components: {
        TestimonialsItems,
    },
    data (){
        return{
            testimonials:[
                {
                    image: 'Vector.png',
                    description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"',
                    client: 'Bessie Cooper'
                },
                {
                    image: 'Vector.png',
                    description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"',
                    client:'Ralph Edwards'
                },
                {
                    image: 'Vector.png',
                    description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"',
                    client:'Jacob Jones'
                },
                {
                    image: 'Vector.png',
                    description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"',
                    client:'Ralph Edwards'
                }
            ]
        }
    },
}
</script>
<style>
    .testimonials-wrapper .carousel__slide {
        display: block !important;
    }
</style>