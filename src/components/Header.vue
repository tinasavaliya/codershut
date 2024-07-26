<template>
  <div>
    <header class="header float-start w-100" :class="{ 'fixed-top': scrollPosition > 100 }">
         <div class="container">
            <div class="header-inner">
               <nav class="p-0 navbar navbar-expand-lg">
                  <router-link class="p-0 navbar-brand d-flex align-items-center logo" :to="{ name: 'home' }">
                    <img src="../assets/images/logo.svg" class="img-fluid" alt="logo">
                  </router-link>
                  <button class="p-0 border-0 shadow-none navbar-toggler" type="button" data-bs-toggle="collapse"
                     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                     aria-expanded="false" aria-label="Toggle navigation">
                     <span class="w-auto h-auto navbar-toggler-icon"><img src="../assets/images/menu.png"
                           alt="Menu"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav ms-auto align-items-lg-center">
                        <li class="nav-item">
                           <router-link class="p-0 nav-link" :to="{ name: 'home' }">home</router-link>
                        </li>
                        <li class="nav-item">
                           <router-link class="p-0 nav-link" :to="{ name: 'about' }">about</router-link>
                        </li>
                        <li class="nav-item">
                           <router-link class="p-0 nav-link" :to="{ name: 'portfolio' }">portfolio</router-link>
                        </li>
                        <li class="nav-item">
                           <router-link class="p-0 nav-link" :to="{ name: 'career' }">career</router-link>
                        </li>
                        <li class="nav-item">
                              <router-link class="border-0 shadow-none header-btn btn btn-skin w-100" :to="{ name: 'contact' }">Get In
                              Touch</router-link>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
         </div>
      </header>
  </div>
</template>

<script>

import { ref, onMounted } from 'vue';

export default {
  name: 'PageHeader',
  setup() {
    const scrollPosition = ref(null);

    const updateScroll = () => {
      scrollPosition.value = window.scrollY;
    };

    onMounted(() => {
      window.addEventListener('scroll', updateScroll);
      return () => {
        window.removeEventListener('scroll', updateScroll);
      };
    });

    return {
      scrollPosition,
    };
  },
};
</script>
