<template>
  <section class="header">
    <nav class="header-nav">
      <ul class="header-nav__list">
        <li v-for="(item, i) in navigation" :key="i" class="header-nav__item">
          <button class="header-nav__button" :class="isOn === item ? 'on' : ''" @click="activateSection(item)">{{ capitalize(item) }}</button>
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
      isOn: 'home',
      navigation: ['home', 'about', 'skills', 'portfolio', 'contact'],
    };
  },

  methods: {
    capitalize(string) {
      const word = string;
      const capitalized = word.charAt(0).toUpperCase() + word.slice(1);

      return capitalized;
    },
    activateSection(string) {
      this.isOn = string;
    },
  },
};
</script>

<style lang="scss" scoped></style>
