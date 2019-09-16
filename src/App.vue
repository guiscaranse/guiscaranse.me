<template>
  <section class="hero is-fullheight is-info">
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          <logo></logo>
        </h1>
        <h2 class="subtitle">
          Subtitle
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import logo from "./components/logo.vue";
export default {
  name: "app",
  components: {
    logo
  }
};
</script>

<style></style>
