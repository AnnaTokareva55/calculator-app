<template>
  <div id="app">
    <div class="app d-flex">
      <Calculator class="calc" />
      <History class="hist" />
    </div>
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";
import History from "./components/History.vue";

export default {
  name: "App",
  components: {
    Calculator,
    History
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

.calc {
  width: 60%;
  border: 0.5px solid gray;
}

.hist {
  width: 40%;
  overflow: auto;
  border: 1px solid gray;
}

.d-flex {
  display: flex;
}

.justify-content-center {
  justify-content: center;
}

.justify-content-end {
  justify-content: flex-end;
}

@media screen and (max-width: 650px) {
  .app {
    flex-direction: column;
  }

  .calc {
    width: 100%;
  }

  .hist {
    width: 100%;
  }
}
</style>
