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
import Header from "@/components/TheHeader.vue";
import { mapActions } from 'vuex'
export default {
  components: {
    Header,
    Sidebar
  },
  methods: {
    ...mapActions('feedback',[
            'requestAll'
        ]),
  },
  mounted() {
   this.requestAll()
  },
};
</script>
