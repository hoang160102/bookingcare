<template>
  <main>
    <the-header></the-header>
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
* {
  font-family: Montserrat, sans-serif !important;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

main {
  position: relative;
}
</style>
