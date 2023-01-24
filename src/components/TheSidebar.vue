<template>
  <aside class="sidebar">
    <div class="sidebar__top-place"></div>
    <nav class="sidebar__container">
      <router-link class="d-block" to="/feedback">
        <div class="border-1 border-primary d-flex gap-10 align-items-center">
          <div class="sidebar__inner-icon">
            <div v-if="getStatusCount != 0" class="sidebar__count-message">{{getStatusCount}}</div>
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
import { mapActions, mapState, mapMutations } from "vuex";
import FeedbackService from "@/api/FeedbackService.js";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState("feedback", ["data"]), 
    getStatusCount() {
            let countStatus = 0
            this.data.forEach(element => {
                if (element.status === "waiting") {
                    countStatus++
                }
            });
            if (countStatus >= 10) {
              return "10+"
            }
            return countStatus
        }
  },
  methods: {
   
  },
  mounted() {
  },
  
};
</script>

<style>
</style>