<template>
  <div class="layout" :class="{ home: isHome }">
    <MyHeader></MyHeader>
    <MySide v-if="!isHome"></MySide>
    <router-view class="content"></router-view>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/Header.vue';
import MySide from './components/Side.vue';
import MyFooter from './components/Footer.vue';
export default {
  name: 'App',

  components: {
    MyHeader,
    MySide,
    MyFooter,
  },

  data() {
    return {
      currentRoute: 'Home',
      isHome: false,
    };
  },

  methods: {
    checkHome(route) {
      if (route === 'Home' || route === 'NotFound') {
        this.isHome = true;
      } else {
        this.isHome = false;
      }
    },
  },

  watch: {
    $route(to) {
      this.checkHome(to.name);
      return (this.currentRoute = to.name);
    },
  },
};
</script>

<style lang="scss"></style>
