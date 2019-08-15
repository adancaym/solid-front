<template>
    <div class="">
        <h3 class="text-danger">
            {{this.mensajes}}
        </h3>
        <form action="" v-on:submit="verifiRetiro">
            <div class="form-group">
                <label for="movement_retiro">Retiro </label>
                <input type="text" name="movement_retiro" id="movement_retiro" v-model="retiro">
            </div>
            <div class="form-group">
                <input type="submit" value="Retirar">
            </div>
        </form>
    </div>

</template>

<script>
    export default {
        name: "retiro-form",
        props:['account','user','debito'],
        data(){
            return{
                retiro:'',
                mensajes:''
            }
        },methods:{
            verifiRetiro(event){
                event.preventDefault();
                if (this.account.maximo >= this.retiro) {
                    this.mensajes = '';
                    console.log('retiro');
                    if (this.debito){
                        console.log('retiro debito');
                        //axios a llamada retiro
                    }else{

                        //axios a llamada retiro credito
                        console.log('retiro credito');
                    }

                    //axios a llamada obtenemos los nuevos paramaetros de la cuenta
                    let param = {
                        account: this.account
                    };
                    this.$emit('setAcount',param);
                }else{
                    this.mensajes = 'El retiro sobre pasa el máximo a retirar';
                }

            }
        }
    }
</script>

<style scoped>

</style>