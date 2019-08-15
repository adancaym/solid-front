<template>
    <div class="">
        <div class="jumbotron">
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
                Retiro Máximo: <small>{{account.limit_money}}</small>
            </h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: "debit",
        props:['account','user'],
    }
</script>

<style scoped>

</style>