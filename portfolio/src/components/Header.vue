<template>
  <section class="header">
    <h1 class="header-logo">
      <a href="/home"><img src="#" alt="로고" /></a>
    </h1>
    <nav class="header-nav">
      <ul class="header-nav__list">
        <li class="header-nav__item" :class="currentRoute === 'Home' ? 'on' : ''">
          <a href="/home" class="header-nav__link">Home</a>
        </li>
        <li class="header-nav__item" :class="currentRoute === 'About' ? 'on' : ''">
          <a href="/about" class="header-nav__link">About</a>
        </li>
        <li class="header-nav__item" :class="currentRoute === 'Portfolio' ? 'on' : ''">
          <a href="/portfolio" class="header-nav__link">Portfolio</a>
        </li>
        <li class="header-nav__item" :class="currentRoute === 'Contact' ? 'on' : ''">
          <a href="/contact" class="header-nav__link">Contact</a>
        </li>
        <li class="header-nav__item" :class="currentRoute === 'Study' ? 'on' : ''">
          <a href="/study" class="header-nav__link">Study</a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'MyHeader',

  data() {
    return {
      currentRoute: '',
    };
  },

  watch: {
    $route(to) {
      return (this.currentRoute = to.name);
    },
  },
};
</script>

<style lang="scss" scoped></style>
