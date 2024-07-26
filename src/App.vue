<template>
  <div>
    <Header />
    <router-view></router-view>
    <FooterBottom />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import FooterBottom from './components/FooterBottom.vue';
export default {
  name: 'App',
  components: {
    Header,
    FooterBottom
},
}
</script>
