import Vue from 'vue'
import App from './App.vue'

Vue.config.productionHelp = false

import './assets/css/main1.css';

new Vue({
    render: h => h(App), 

}).$mount('#app')