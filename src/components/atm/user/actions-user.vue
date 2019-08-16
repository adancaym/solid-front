<template>
    <div class="">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <credito :account="this.account" :user="this.user" v-show="!this.debit"></credito>
                </div>
                <div class="col-12">
                    <debito :account="this.account" :user="this.user" v-show="this.debit"></debito>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4" v-show="this.showRetiroButton">
                <a class="btn-primary btn-left-rounded btn btn-xl text-white xl-btn" v-on:click="showFormRetiro" >Retirar</a>
            </div>
            <div class="col-4 offset-4 text-center" v-show="this.showRetiroForm">
                <retiro-form
                        :account="this.account"
                        :debito="this.debit"
                        :user="this.user"
                        @setAccount="setAccount"
                ></retiro-form>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-4" v-show="this.showDepositoButton">
                <a class="btn-primary float-left btn-left-rounded btn btn-xl text-white xl-btn" v-on:click="showFormDeposito" >Depositar</a>
            </div>
            <div class="col-4 offset-4 text-center" v-show="this.showDepositoForm">
                <deposito-form :account="this.account"
                               :user="this.user"
                               @setAccount="setAccount"
                ></deposito-form>
            </div>
        </div>
        <div class="row" v-show="this.cancelButton">
            <div class="col-4 offset-8 mt-4">
                    <a class="btn-warning float-right btn btn-xl btn-right-rounded text-white xl-btn" v-on:click="showButtons">
                        Cancelar
                    </a>
            </div>
        </div>
        <div class="row">
            <div class="col-4 offset-8 mt-4">
                <a class="btn-danger float-right btn btn-xl btn-right-rounded text-white xl-btn" v-on:click="logout">
                    Salir
                </a>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Retiro_form from "./deposito-form";
    export default {
        name: 'actions-user',
        components: {Retiro_form},
        props:['user','account','debit'],
        data(){
          return {
              showDepositoForm:false,
              showRetiroForm:false,
              showDepositoButton:true,
              showRetiroButton:true,
              cancelButton:false,
          }
        },
        mounted(){

        },
        methods: {
            logout(){
                this.$emit('logout');
            },
            showFormRetiro(){
                this.showDepositoForm=false;
                this.showRetiroForm=true;
                this.showDepositoButton = false;
                this.showRetiroButton = false;
                this.cancelButton =true;
            },
            showFormDeposito(){
                this.showDepositoForm=true;
                this.showRetiroForm=false;
                this.showDepositoButton = false;
                this.showRetiroButton = false;
                this.cancelButton =true;

            },
            showButtons(){
                this.showDepositoForm=false;
                this.showRetiroForm=false;
                this.showDepositoButton = true;
                this.showRetiroButton = true;
                this.cancelButton =false;
            },
            setAccount(emit){
                this.$emit('setAccount',emit);
            }
        }
    }
</script>
<style type="text/css">
.xl-btn{
    padding: 20px;
    font-weight: bold;
    font-size: 2em;
}
.btn-left-rounded{
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
}

.btn-right-rounded{
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
}
</style>