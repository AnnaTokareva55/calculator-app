<template>
  <div class="calc-wrap">
    <div>
      <div class="result-field">{{ result }}</div>
    </div>
    <md-content>
      <div class="d-flex">
        <md-button class="md-primary cell cell-border" @click="allClean">AC</md-button>
        <md-button class="md-primary cell cell-border" @click="changeSign">+/-</md-button>
        <md-button class="md-primary cell cell-border" @click="percent">%</md-button>
        <md-button class="md-raised md-primary cell" @click="makeOperation('divide')">÷</md-button>
      </div>
      <div class="d-flex">
        <md-button class="cell cell-border" @click="inputNumber('7')">7</md-button>
        <md-button class="cell cell-border" @click="inputNumber('8')">8</md-button>
        <md-button class="cell cell-border" @click="inputNumber('9')">9</md-button>
        <md-button class="md-raised md-primary cell" @click="makeOperation('multiply')">×</md-button>
      </div>
      <div class="d-flex">
        <md-button class="cell cell-border" @click="inputNumber('4')">4</md-button>
        <md-button class="cell cell-border" @click="inputNumber('5')">5</md-button>
        <md-button class="cell cell-border" @click="inputNumber('6')">6</md-button>
        <md-button class="md-raised md-primary cell" @click="makeOperation('subtract')">-</md-button>
      </div>
      <div class="d-flex">
        <md-button class="cell cell-border" @click="inputNumber('1')">1</md-button>
        <md-button class="cell cell-border" @click="inputNumber('2')">2</md-button>
        <md-button class="cell cell-border" @click="inputNumber('3')">3</md-button>
        <md-button class="md-raised md-primary cell" @click="makeOperation('add')">+</md-button>
      </div>
      <div class="d-flex">
        <md-button class="cell cell-border cell-zero" @click="inputNumber('0')">0</md-button>
        <md-button class="cell cell-border" @click="decimal">,</md-button>
        <md-button class="md-raised md-primary cell" @click="calculation">=</md-button>
      </div>
    </md-content>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Calculator",
  data: () => ({
    prevResult: null,
    result: "0",
    operation: null,
    operationClicked: false
  }),
  computed: {
    ...mapGetters("history", ["operator"]),
    dateTime() {
      let date = new Date();
      return `${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
    }
  },
  methods: {
    ...mapActions("history", ["addToHistory"]),
    /**
     * Очистка вспомогательных данных после нажатия на "=".
     */
    _clean() {
      this.operationClicked = false;
      this.operation = null;
      this.prevResult = null;
    },
    /**
     * Полная очистка данных.
     */
    allClean() {
      this.result = "0";
      this.operationClicked = false;
      this.operation = null;
      this.prevResult = null;
    },
    /**
     * Изменение знака.
     */
    changeSign() {
      if (!this.result || this.result === "0") return;
      this.result = `${-1 * this.result}`;
    },
    /**
     * Расчет процента.
     */
    percent() {
      this.result = `${parseFloat(this.result) / 100}`;
    },
    /**
     * Ввод цифры.
     */
    inputNumber(value) {
      if (this.operationClicked) {
        this.result = "";
        this.operationClicked = false;
      }
      if (this.result === "0") {
        this.result = value;
      } else this.result += value;
    },
    /**
     * Ввод запятой.
     */
    decimal() {
      if (this.result === "") this.result += "0.";
      if (this.result.indexOf(".") === -1) this.result += ".";
    },
    /**
     * Начало операции - обработка нажатия на арифметический знак (+, -, *, /).
     */
    makeOperation(operation) {
      this.operationClicked = true;
      this.operation = operation;
      this.prevResult = this.result;
    },
    /**
     * Расчет - обработка нажатия на знак "=".
     */
    calculation() {
      if (!this.operation) return;
      let date = this.dateTime;
      let exp = `${this.prevResult} ${this.operator[this.operation]} ${
        this.result
      } = `;
      let res = null;
      switch (this.operation) {
        case "divide":
          res = parseFloat(this.prevResult) / parseFloat(this.result);
          break;
        case "multiply":
          res = parseFloat(this.prevResult) * parseFloat(this.result);
          break;
        case "subtract":
          res = parseFloat(this.prevResult) - parseFloat(this.result);
          break;
        case "add":
          res = parseFloat(this.prevResult) + parseFloat(this.result);
          break;
      }
      this.result = `${res}`;
      exp += this.result;
      let historyEl = date + exp;
      this.addToHistory(historyEl);
      this._clean();
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
  height: calc((100vh - 68px) / 5);
  margin: 0;
  font-size: 18px;
  background-color: lightgray;
  border: 0.5px solid gray;
  border-radius: 0;
}

.cell-zero {
  width: 50%;
}

@media screen and (max-width: 650px) {
  .result-field {
    padding: 10px;
    font-size: 34px;
  }

  .cell {
    height: calc((60vh - 54px) / 5);
    font-size: 16px;
  }
}
</style>
