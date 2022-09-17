<template>
  <aside class="sidebar">
    <div class="sidebar__top-place"></div>
    <nav class="sidebar__container">
      <router-link class="d-block" to="/feedback">
        <div class="border-1 border-primary d-flex gap-10 align-items-center">
          <div class="sidebar__inner-icon">
            <font-awesome-icon width="30px" :icon="['fas', 'handshake-angle']" />
          </div>
          <span class="text-uppercase sidebar__sign-menu-item" style="letter-spacing: 2px">ФИДБЕКИ</span>
        </div>
      </router-link>
      <router-link class="d-block" to="/base">
        <div class="border-1 border-primary d-flex gap-10 align-items-center">
          <div class="sidebar__inner-icon">
            <font-awesome-icon width="30px" :icon="['fas', 'envelopes-bulk']" />
          </div>
          <span class="text-uppercase sidebar__sign-menu-item" style="letter-spacing: 2px;">РАССЫЛКА</span>
        </div>
      </router-link>
    </nav>
  </aside>
</template>

<script>
/* import axios from 'axios' */
import FeedbackService from "@/api/FeedbackService.js";
export default {
  data() {
    return {
      datass: {
        email: "admin@example.com",
        password: "admin",
      },
    };
  },

  methods: {
    /* async logit() {
      FeedbackService.getOne(11)
        .then((resp) => {
          console.log(resp.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
      
    }, */
    
   
    
  },
  mounted() {
      
      /* console.log(JSON.stringify(this.datass)); */
    },
};
</script>

<style>
</style>