<template>
  <section class="header">
    <nav class="header-nav">
      <ul class="header-nav__list">
        <li v-for="(item, i) in navigation" :key="i" class="header-nav__item">
          <a :href="item === 'home' ? '/' : '/' + item" class="header-nav__link" :class="currentRoute === capitalize(item) ? 'on' : ''">{{ capitalize(item) }}</a>
        </li>
      </ul>
    </nav>
    <h1 class="header-logo">
      <a href="/" class="header-logo__link">
        <img src="#" alt="로고" class="header-logo__img" />
      </a>
    </h1>
  </section>
</template>

<script>
export default {
  name: 'MyHeader',

  data() {
    return {
      currentRoute: 'Home',
      navigation: ['home', 'about', 'skills', 'portfolio', 'contact'],
    };
  },

  methods: {
    capitalize(string) {
      const word = string;
      const capitalized = word.charAt(0).toUpperCase() + word.slice(1);

      return capitalized;
    },
  },

  watch: {
    $route(to) {
      return (this.currentRoute = to.name);
    },
  },
};
</script>

<style lang="scss" scoped></style>
