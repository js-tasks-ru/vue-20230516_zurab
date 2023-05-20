import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const vm = createApp({
  data() {
    return {
      arg1: null,
      arg2: null,
      operation: null,
    }
  },
  computed: {
    result() {
      switch (this.operation) {
        case 'sum':
          return this.arg1 + this.arg2;
        case 'subtract':
          return this.arg1 - this.arg2;
        case 'multiply':
          return this.arg1 * this.arg2;
        case 'divide':
          return this.arg1 / this.arg2;
      };
    },
  },
}).mount('#app');

window.vm = vm;
