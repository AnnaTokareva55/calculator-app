<template>
  <div id="app">
    <Calculator class="calc" />
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    Calculator
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
  width: 65%;
  border: 0.5px solid gray;
}

.d-flex {
  display: flex;
}

.justify-content-end {
  justify-content: flex-end;
}
</style>
<style src="./App.scss" lang="scss"></style>
