<template>
  <div class="contents">
    <section class="content home">HOME</section>

    <MyAbout></MyAbout>
    <MySkills></MySkills>
    <MyPortfolio></MyPortfolio>
    <MyContact></MyContact>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyAbout from '../components/About.vue';
import MySkills from '../components/Skills.vue';
import MyPortfolio from '../components/Portfolio.vue';
import MyContact from '../components/Contact.vue';
import MyFooter from '../components/Footer.vue';

export default {
  name: 'MyHome',

  components: {
    MyAbout,
    MySkills,
    MyPortfolio,
    MyContact,
    MyFooter,
  },

  data() {
    return {
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
