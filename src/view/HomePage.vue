<template>
  <div>
    <div class="desktop">
      <HomeBanner />
    </div>
    <HomeAboutSection />
    <Services />
    <TabSlider />
    <WhyChoose />
    <HomePortfolio />
    <TimeLine />
    <TestimonialsBlock />
    <FooterTop />
  </div>
</template>

<script>
import HomeBanner from "../components/HomeBanner.vue";
import HomeAboutSection from "@/components/HomeAboutSection.vue";
import Services from "@/components/Services.vue";
import TabSlider from "../components/TabSlider.vue";
import WhyChoose from "@/components/WhyChoose.vue";
import HomePortfolio from "@/components/HomePortfolio.vue";
import TimeLine from "@/components/TimeLine.vue";
import TestimonialsBlock from "@/components/TestimonialsBlock.vue";
import FooterTop from "@/components/FooterTop.vue";

export default {
  name: "HomePage",
  components: {
    HomeBanner,
    HomeAboutSection,
    Services,
    TabSlider,
    WhyChoose,
    HomePortfolio,
    TimeLine,
    TestimonialsBlock,
    FooterTop,
  },
};
</script>