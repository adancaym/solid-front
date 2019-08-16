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
                    if (this.retiro !=0){
                        let data = new FormData();
                        data.append('iduser',this.user.iduser);
                        data.append('idaccount',this.account.idaccount);
                        data.append('movement',this.retiro);
                        if (this.debito){
                            axios.post('http://solid/account/retiroDebito',data).then((response)=>{
                                this.$emit('setAccount',response.data.data);
                            });
                        }else{
                            axios.post('http://solid/account/retiroCredito',data).then((response)=>{
                                this.$emit('setAccount',response.data.data);
                            });
                        }
                    } else{
                        this.mensajes = 'No puedes retirar 0';
                    }
                }else{
                    this.mensajes = 'El retiro sobre pasa el máximo a retirar';
                }
            }
        }
    }
</script>

<style scoped>

</style>