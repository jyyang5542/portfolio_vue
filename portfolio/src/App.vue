<template>
  <div class="layout">
    <MyHeader></MyHeader>
    <router-view></router-view>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/Header.vue';
import MyFooter from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style lang="scss"></style>
