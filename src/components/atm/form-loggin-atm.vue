<template>
	 <div id="form">
         {{mensajes}}
	 	<form class="form"  v-on:submit="isAccountValid" v-show="!show">
	 		<div class="form-group">
                <label for="cuenta">N° de tarjeta</label>
                <input type="text" class="form-control" name="cuenta" id="cuenta" v-model="account">
                <input type="submit" value="Enter" class="btn btn-primary float-right">
            </div>
	 	</form>
         <form class="form" v-on:submit="verifyPass" v-show="show">
             <div class="form-group">
                 <label for="pin">PIN</label>
                 <input type="password" class="form-control" name="pin" id="pin" v-model="pin">
                 <input type="submit" value="Enter" class="btn btn-primary float-right">
             </div>
         </form>
    </div>
</template>
<script type="text/javascript">
	export default {
	  name: 'form-login-atm',
      data(){
	        return {
	            account:'',
                show:false,
                mensajes:'',
                user :{},
                pin:''
            }
        },
      methods: {
            isAccountValid: function (event) {
                event.preventDefault();
                let data = new FormData();
                data.append('account',this.account);
                axios.post('http://solid/user/getUserByAccount',data).then((response) => {
                    if(response.data.data.user===false){
                        this.mensajes='No hay un usuario asignado';
                    }else{
                        this.user=response.data.data.user;
                        this.show=true;
                    }
                });
            },
            verifyPass:function (event) {
                event.preventDefault();
                if (this.pin === this.user.password){
                    let data = new FormData();
                    for(var key in this.user) {
                        var value = this.user[key];
                        data.append(key,value);
                    }
                    data.delete('login');
                    data.append('login',true);
                    axios.post('http://solid/user/auth',data).then((response)=>{
                        if(response.data.data.isLogged){
                            let params = {
                                user :this.user,
                                account:this.account,
                                show: response.data.data.isLogged,
                            };
                            this.show=false;
                            this.account = '';
                            this.pin='';
                            this.$emit('showLoginForm',params);
                        }
                    })
                } else{
                    this.mensajes = 'No entro'
                }
            }
        }
	}
</script>
<style type="text/css">
	
</style>