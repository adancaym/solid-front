<template>
    <form action="" v-on:submit="deposito">
        <div class="form-group">
            <label for="movement_deposito">Deposito</label>
            <input type="text" name="movement_deposito" id="movement_deposito" v-model="montoDeposito">
        </div>
        <div class="form-group">
            <input type="submit" value="Depositar">
        </div>
    </form>
</template>

<script>
    export default {
        name: "deposito-form",
        props:['account','user'],
        data() {
            return{
                montoDeposito:''
            }
        },
        methods: {
            deposito(event){
                event.preventDefault();
                if (this.montoDeposito != 0){
                    let data = new FormData();
                    data.append('iduser',this.user.iduser);
                    data.append('idaccount',this.account.idaccount);
                    data.append('movement',this.montoDeposito);
                    axios.post('http://solid/account/deposito',data).then((response)=>{
                        this.$emit('setAccount',response.data.data);
                    });
                }else{
                    this.mensajes ='No puedes depositar 0';
                }
            },
            setAccount(emit){
                this.$emit('setAcount',emit);
            }
        }
    }
</script>

<style scoped>

</style>