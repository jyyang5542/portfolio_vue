<template>
  <div class="layout">
    <MyHeader></MyHeader>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import MyHeader from './components/Header.vue';

export default {
  name: 'App',

  components: {
    MyHeader,
  },
};
</script>

<style lang="scss"></style>
