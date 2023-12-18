<template>
  <section class="header">
    <h1 class="header-logo">
      <a href="/home"><img src="#" alt="로고" /></a>
    </h1>
    <nav class="header-nav">
      <ul class="header-nav__list">
        <li class="header-nav__item">
          <a href="/home" class="header-nav__link" :class="currentRoute === 'Home' ? 'on' : ''">Home</a>
        </li>
        <li class="header-nav__item">
          <a href="/about" class="header-nav__link" :class="currentRoute === 'About' ? 'on' : ''">About</a>
        </li>
        <li class="header-nav__item">
          <a href="/portfolio" class="header-nav__link" :class="currentRoute === 'Portfolio' ? 'on' : ''">Portfolio</a>
        </li>
        <li class="header-nav__item">
          <a href="/contact" class="header-nav__link" :class="currentRoute === 'Contact' ? 'on' : ''">Contact</a>
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
      currentRoute: this.$router.currentRoute.value.name,
    };
  },
};
</script>

<style lang="scss" scoped></style>
