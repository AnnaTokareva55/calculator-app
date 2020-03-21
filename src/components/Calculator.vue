<template>
  <div class="calc-wrap">
    <md-content>
      <div class="result-field">{{ result || 0 }}</div>
    </md-content>
    <div class="d-flex">
      <md-button class="md-primary cell cell-border" @click="allClean"
        >AC</md-button
      >
      <md-button class="md-primary cell cell-border">+/-</md-button>
      <md-button class="md-primary cell cell-border">%</md-button>
      <md-button class="md-raised md-primary cell">÷</md-button>
    </div>
    <div class="d-flex">
      <md-button class="cell cell-border" @click="inputNumber('7')"
        >7</md-button
      >
      <md-button class="cell cell-border" @click="inputNumber('8')"
        >8</md-button
      >
      <md-button class="cell cell-border" @click="inputNumber('9')"
        >9</md-button
      >
      <md-button class="md-raised md-primary cell">×</md-button>
    </div>
    <div class="d-flex">
      <md-button class="cell cell-border" @click="inputNumber('4')"
        >4</md-button
      >
      <md-button class="cell cell-border" @click="inputNumber('5')"
        >5</md-button
      >
      <md-button class="cell cell-border" @click="inputNumber('6')"
        >6</md-button
      >
      <md-button class="md-raised md-primary cell">-</md-button>
    </div>
    <div class="d-flex">
      <md-button class="cell cell-border" @click="inputNumber('1')"
        >1</md-button
      >
      <md-button class="cell cell-border" @click="inputNumber('2')"
        >2</md-button
      >
      <md-button class="cell cell-border" @click="inputNumber('3')"
        >3</md-button
      >
      <md-button class="md-raised md-primary cell">+</md-button>
    </div>
    <div class="d-flex">
      <md-button class="cell cell-border cell-zero" @click="inputNumber('0')"
        >0</md-button
      >
      <md-button class="cell cell-border">,</md-button>
      <md-button class="md-raised md-primary cell">=</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data: () => ({
    result: ""
  }),
  methods: {
    allClean() {
      this.result = "";
    },
    inputNumber(value) {
      if (this.result === "0") {
        this.result = value;
      } else this.result += value;
    }
  }
};
</script>

<style scoped>
.result-field {
  padding: 15px;
  text-align: right;
  font-size: 38px;
  background-color: grey;
  color: white;
}

.cell {
  width: 25%;
  margin: 0;
  font-size: 18px;
  background-color: lightgray;
  border: 0.5px solid gray;
  border-radius: 0;
}

.cell-zero {
  width: 50%;
}
</style>
