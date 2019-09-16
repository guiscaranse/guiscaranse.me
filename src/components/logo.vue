<template>
  <img svg-inline src="@/assets/guilherme.svg">
</template>

<script>
export default {
  name: "logo",
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
