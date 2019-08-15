<template>
    <form action="">
        <div class="form-group">
            <label for="movement_deposito">Deposito</label>
            <input type="text" name="movement_deposito" id="movement_deposito" v-model="this.deposito">
        </div>
        <div class="form-group">

        </div>
    </form>
</template>

<script>
    export default {
        name: "deposito-form",
        props:['account','user'],
        data() {
            return{
                deposito:''
            }
        },
        methods: {
            setAccount(){
                let param = {
                    account: this.account
                };
                this.$emit('setAcount',param);
            }
        }
    }
</script>

<style scoped>

</style>