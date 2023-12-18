<template>
  <section class="home">
    <div class="content-wrap">
      <h1>Home</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyHome',

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
