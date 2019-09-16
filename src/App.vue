<template>
  <section class="hero is-fullheight has-text-white">
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered ">
        <h1 class="title">
          <logo></logo>
        </h1>
        <h2 class="subtitle has-text-white-bis">Desenvolvedor Backend</h2>
        <div class="container is-fluid description">
          <p>
            Desenvolver produtos que são importantes para 10 ou 1 milhão de
            pessoas são o centro do que eu faço.
          </p>
          <p>
            Eu escrevo APIs para serem consumidas por pessoas, arquiteto
            sistemas escaláveis, desenvolvo pesquisas e mantenho projetos de
            código-aberto que ajudam milhares de pessoas.
          </p>
          <p>
            Quer me conhecer? Dê uma olhada no meu
            <a href="https://www.linkedin.com/in/guiscaranse/">Linkedin</a> ou
            se quiser algo mais completo veja meu currículo público. Você também
            pode me encontrar no
            <a href="https://twitter.com/guiscaranse">Twitter</a>, como todo
            mundo.
          </p>
          <p>
            Ás vezes eu publico algumas coisas no meu
            <a href="https://github.com/guiscaranse">GitHub</a>.
          </p>
        </div>
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
  },
  mounted() {
    this.$anime
      .timeline()
      .add({
        targets: ".subtitle",
        translateY: ["1.1em", 0],
        translateX: ["0.15em", 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i
      })
      .add({
        targets: ".description",
        opacity: 100,
        duration: 1000,
        easing: "easeInExpo",
        delay: 500
      });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand|Source+Sans+Pro&display=swap");

h1,
h2,
h3 {
  font-family: "Quicksand", Arial, sans-serif;
}

a {
  color: #79ff8b !important;
}

* {
  font-family: "Source Sans Pro", Arial, sans-serif;
}

body {
  background: linear-gradient(
    34deg,
    #566270,
    #492540,
    #c03546,
    #f26d5b,
    #602466,
    #566270
  );
  background-size: 1000% 1000%;

  -webkit-animation: colorchange 10s ease infinite;
  -moz-animation: colorchange 10s ease infinite;
  animation: colorchange 10s ease infinite;
}

@-webkit-keyframes colorchange {
  0% {
    background-position: 84% 0;
  }
  50% {
    background-position: 17% 100%;
  }
  100% {
    background-position: 84% 0;
  }
}

@-moz-keyframes colorchange {
  0% {
    background-position: 84% 0;
  }
  50% {
    background-position: 17% 100%;
  }
  100% {
    background-position: 84% 0;
  }
}

@keyframes colorchange {
  0% {
    background-position: 84% 0;
  }
  50% {
    background-position: 17% 100%;
  }
  100% {
    background-position: 84% 0;
  }
}

.description {
  opacity: 0;
}
</style>
