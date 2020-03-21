<template>
  <div id="app">
    <div class="d-flex">
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
  border: 1px solid gray;
}

.d-flex {
  display: flex;
}

.justify-content-end {
  justify-content: flex-end;
}
</style>
