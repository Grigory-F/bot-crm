<template>
  <header class="header d-flex align-items-center">
    <div class="d-flex justify-content-end wp-100">
      <div class="dropdown">
        <button
          class="btn btn-outline-muted dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <font-awesome-icon width="30px" :icon="['fas', 'gear']" />
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <span @click="logoutButtonSwitch" class="dropdown-item" href="#"
              >Выйти</span
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {},
  methods: {
    ...mapActions("auth", ["logout"]),
    logoutButtonSwitch() {
      this.logout();
      this.$router.push("auth/");
    },
  },
};
</script>
