<template>
  <div id="app">
    <div class="jumbotron">
      <h3 class="text-center">
        Cash Machine
      </h3>
    </div>
    <form-loggin-atm @showLoginForm="showLoginForm" v-show="showLogin"></form-loggin-atm>
    <actions-user
            :debit="this.debito" :user="this.user" :account="this.fullaccount" v-show="!showLogin"
            @logout="logout"
            @setAccount="setAccount"
    ></actions-user>
  </div>
</template>

<script>
export default {
    name: 'app',
  data(){
    return {
      showLogin:true,
      user:{},
      account:'',
      fullaccount:{},
      debito:false
    }
  },
    mounted () {
      axios.post('http://solid/user/isLogged').then((response) => {
        this.showLogin = response.data.data.isLogged === false ? true : false;
      });
    },
    methods:{
      showLoginForm(value){
        if (value.show){
          this.showLogin = false;
          this.user = value.user;
          this.account = value.account;
          var params = new FormData();
          params.append('account',value.account);
          params.append('iduser',value.user.iduser);
          axios.post('http://solid/account/getAcountByAccountAndIdUser',params).then((response)=>{
                this.fullaccount = response.data.data.account;
                this.debito = response.data.data.account.account_type === 'debito';
          });
        }
      },
      logout(){
        axios.post('http://solid/user/logout').then((response)=>{
          if (response.data.data.isLogged===false){
            this.user = {};
            this.showLogin = true;
            this.account='';
            this.fullaccount={};
          }
        })
      },
      setAccount(emit){
        this.fullaccount = emit.account;
      }
  }
  }
</script>

<style>
#form{
  margin-top: 5%;
  width: 50%;
  margin-left: 25%;
}
</style>
