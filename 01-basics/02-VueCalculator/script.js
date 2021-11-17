import { createApp } from './vendor/vue.esm-browser.js';

const Calc = {
  data() {
    return {
      numberFirst: '',
      numberSecond: '',
      picked: '',
    }
  },

  computed: {
    resultCalc: function(){
      let result;
      if(this.picked == "sum"){
        return result = this.numberFirst + this.numberSecond;
      }
      if(this.picked == "subtract"){
        return result = this.numberFirst - this.numberSecond;
      }
      if(this.picked == "multiply"){
        return result = this.numberFirst * this.numberSecond;
      }
      if(this.picked == "divide"){
        return result = this.numberFirst / this.numberSecond;
      }
    },
  }
}

const app = createApp(Calc);
const vm = app.mount('#app');
