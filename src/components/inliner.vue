<template>
  <span class="inliner"></span>
</template>

<script>
let cache = new Map();

export default {
  name: "inliner",
  props: {
    src: { type: String, required: true },
  },

  async mounted() {
    if (!cache.has(this.src)) {
      cache.set(this.src, await fetch(this.src).then(r => r.text()));
    }
    this.$el.innerHTML = cache.get(this.src);
  }
};
</script>

<style scoped></style>
