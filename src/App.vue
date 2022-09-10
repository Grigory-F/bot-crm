<template>
  <div id="app">
    <div @click="createArticle">awdwwadawdwad</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      datas: [],
    };
  },
  methods: {

    async createArticle() {
      axios.get('http://10.247.0.254:5000/api/v1/', {
        
      }).then((data) => console.log(data))
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
