<template>
  <div class="main-layout">
    <Sidebar />
    <main class="main-container">
      <Header />
      <div class="wrapper-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/TheSidebar.vue";
/* import Footer from "@/components/TheFooter.vue"; */
import Header from "@/components/TheHeader.vue";
export default {
  components: {
    Header,
    /* Footer, */
    Sidebar
  },
};
</script>
