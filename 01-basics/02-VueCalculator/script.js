import { createApp } from './vendor/vue.esm-browser.js';

const Calc = {
  data() {
    return {
      numberFirst: '',
      numberSecond: '',
      result: '',
      picked: '',
    }
  },

  methods: {
    add(){
      this.result = this.numberFirst + this.numberSecond;
    },
    subtract(){
      this.result = this.numberFirst - this.numberSecond;
    },
    multiply(){
      this.result = this.numberFirst * this.numberSecond;
    },
    divide(){
      this.result = this.numberFirst / this.numberSecond;
    },

    resultCalc(){
      if(this.picked == "sum"){
        this.add();
      }
      if(this.picked == "subtract"){
        this.subtract();
      }
      if(this.picked == "multiply"){
        this.multiply();
      }
      if(this.picked == "divide"){
        this.divide();
      }
    },
  },
  watch: {
    numberFirst: {
      immediate: true,
      handler() {
        this.resultCalc();
      }
    },
    numberSecond: {
      immediate: true,
      handler() {
        this.resultCalc();
      }
    },
  }
}

const app = createApp(Calc);
const vm = app.mount('#app');
