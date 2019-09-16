<template>
  <inliner src="/static/teste.svg"></inliner>
</template>

<script>
import inliner from "./inliner.vue";
export default {
  name: "logo",
  components: {
    inliner
  },
  mounted() {
    const targets = this.$el.querySelectorAll(".path");
    this.$anime({
      targets,
      direction: "normal",
      strokeDashoffset: [this.$anime.setDashoffset, 0],
      easing: "easeInOutSine",
      autoplay: true,
      duration: 700,
      delay: (el, i) => {
        return i * 500;
      }
    });
  }
};
</script>

<style scoped></style>
