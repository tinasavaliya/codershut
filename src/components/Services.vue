<template>
     <div class="float-start w-100 services-block">
         <div class="container">
            <div class="row align-items-center" id="services">
               <div class="col-lg-5 col-12 wow fadeInUp">
                  <div class="badge badge-skyBlue mb-3">Services</div>
                  <h3 class="text-darkGreen fw-bold pb-2 page-title">What You Will Get?</h3>
                  <p class="fw-semibold text-darkGreen page-description">Lorem ipsum dolor sit amet, consectetur adipisc
                     <span class="d-sm-block d-inline">elit. Suspendisse varius enim.</span>
                  </p>
               </div>
               <div class="col-lg-7 col-12">
                  <div class="row">
                     <ServiceItem :services="services" />
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>
<script>
import ServiceItem from './ServiceItem.vue';
export default {
    name : 'HomeServices',
    components: {
      ServiceItem,
    },
    data() {
      return {
         services: [
            { title: 'Web Development', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem otam rem aperiam eaque ipsa quae ab.', image: 'Web-Development.png', bgClass: 'web-devlopment-bg' },
            { title: 'Mobile Development', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem otam rem aperiam eaque ipsa quae ab.', image: 'Mobile-Development.png', bgClass: 'mobile-development-bg' },
            { title: 'UI,UX Design', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem otam rem aperiam eaque ipsa quae ab.', image: 'Ui-UX-Design.png', bgClass: 'ui-ux-design-bg' },
            { title: 'Digital Marketing', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem otam rem aperiam eaque ipsa quae ab.', image: 'Degital-Marketing.png', bgClass: 'degital-marketing' },
         ],
      }
    },
}

</script>