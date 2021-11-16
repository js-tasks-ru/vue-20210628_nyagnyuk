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

  computed: {
    resultCalc: function(){
      if(this.picked == "sum"){
        this.result = this.numberFirst + this.numberSecond;
      }
      if(this.picked == "subtract"){
        this.result = this.numberFirst - this.numberSecond;
      }
      if(this.picked == "multiply"){
        this.result = this.numberFirst * this.numberSecond;
      }
      if(this.picked == "divide"){
        this.result = this.numberFirst / this.numberSecond;
      }
    },
  }
}

const app = createApp(Calc);
const vm = app.mount('#app');
