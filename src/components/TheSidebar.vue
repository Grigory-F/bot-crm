<template>
  <div class="sidebar">
    <font-awesome-icon width="30px" :icon="['fas', 'handshake-angle']" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      datass: {
        "answer": "awdd a a dwa wdaw daw w",
      "type": "question",
      "status": "closed"
      }
    }
  },
  methods: {
    async loade() {
      /* client_type="TG|VK"&status="waiting|answered|closed"&user_id="21390"&type="undefined|bug|suggestion|question"&page=0&count=20 */
      let data = await fetch("http://10.247.0.254:5000/api/v1/feedback/?client_type=TG", {
        method: 'Get',
        /* body: JSON.stringify(this.datass), */
        headers: {
          "Authorization":  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZXhwIjoxNjYzMTA3NzIwfQ.W6X80GaweUAm1PyfhyVu9icVuCKS7hkiRYnavEKFQWk",
          /* "Content-Type": 'application/json;charset=utf-8' */
        },
      });
      let orData = await data.json(data);
      console.log(orData);
    },
  },
  mounted() {
    this.loade();
  },
};
</script>

<style>
</style>