import Vue from 'vue';
import App from './App.vue';
import { loader } from '@guolao/vue-monaco-editor'

const app = new Vue({
  render: (h) => h(App),
});

loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs',
  },
})


app.$mount('#app')