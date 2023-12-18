<template>
  <section class="className">
    {{ sample }}
  </section>
</template>

<script>
export default {
  name: 'MainFooter',
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
