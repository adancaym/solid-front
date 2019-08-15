<template>
    <div class="">
        <h3 class="text-center text-capitalize">
            Bienvenido {{user.user}}
        </h3>
        <h4>
            Numero de cuenta: <small>{{account.account}}</small>
        </h4>
        <h4>
            Tipo de cuenta: <small>{{account.account_type}}</small>
        </h4>
        <h4>
            Crédito Máximo: <small>${{account.limit_money}}</small>
        </h4>
        <h4>
            Crédito usado: <small>${{account.monto}}</small>
        </h4>
        <h4>
            Retiro maximo: <small>${{account.monto_credito}}</small>
        </h4>
        <h4 class="text-center text-danger">
           El retiro de una cuenta de credito creará una comisión del 10%.
        </h4>
    </div>
</template>

<script>
    export default {
        name: "credit",
        props:['account','user'],
        data(){
            return {
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>