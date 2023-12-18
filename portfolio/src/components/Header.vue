<template>
  <section class="header">
    <h1 class="header-logo">
      <a href="/home"><img src="#" alt="로고" /></a>
    </h1>
    <nav class="header-nav">
      <ul class="header-nav__list">
        <li class="header-nav__item">
          <a href="/home" class="header-nav__link" :class="currentRoute === '홈' ? 'on' : ''">Home</a>
        </li>
        <li class="header-nav__item">
          <a href="/1" class="header-nav__link">1</a>
        </li>
        <li class="header-nav__item">
          <a href="/2" class="header-nav__link">2</a>
        </li>
        <li class="header-nav__item">
          <a href="/3" class="header-nav__link">3</a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'MainHeader',

  data() {
    return {
      currentRoute: this.$router.currentRoute.value.name,
      sample: 'Sample',
    };
  },

  methods: {
    doSomething() {},
  },

  mounted() {
    this.doSomething();
  },
};
</script>

<style lang="scss" scoped></style>
