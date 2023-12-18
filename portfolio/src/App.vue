<template>
  <MainHeader></MainHeader>
  <router-view></router-view>
  <MainFooter></MainFooter>
</template>

<script>
import MainHeader from './components/Header.vue';
import MainFooter from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
  },
};
</script>

<style lang="scss"></style>
