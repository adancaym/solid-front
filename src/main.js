import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';

window.axios = require('axios');

import MyFormLoginATM from './components/atm/form-loggin-atm.vue';
import MyActionsUser from './components/atm/user/actions-user.vue';
import MyDepositoUser from './components/atm/user/deposito-form.vue';
import MyRetiroUser from './components/atm/user/retiro-form.vue';
import credito from './components/atm/account/credit.vue';
import debito from './components/atm/account/debit';


Vue.component('form-loggin-atm', MyFormLoginATM);
Vue.component('actions-user', MyActionsUser);
Vue.component('retiro-form', MyRetiroUser);
Vue.component('deposito-form', MyDepositoUser);
Vue.component('credito', credito);
Vue.component('debito', debito);

new Vue({
  el: '#app',
  render: h => h(App)
});
