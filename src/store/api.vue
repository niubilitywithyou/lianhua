<template>
		<div>
			<h1>用户登录</h1>
			<mt-field label="用户名" placeholder="用户名" v-model="username"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
			<mt-button type="primary" size="large" v-on:click="loging()" style="margin-top:10px" >登陆</mt-button>
		</div>
</template>

<script>
 import Vue from "vue";
 import { Field,Button} from 'mint-ui'; 

 
 Vue.component(Field.name, Field);
 Vue.component(Button.name, Button);
 
 import Data from "@/api/apiIndex";
 
	
export  default{
	name:"denglu",
	data(){
		return {
			username:"",
			password:""
		}
	},
	methods:{
		loging(){
			let LonginTo = {
				password:this.password,
				smscode:'',
				country_code:'88',
				phonel:this.username,
				login_type:1,
			}
			Data.login(LonginTo).then((res) =>{
				console.log(res)
				if(res.error == 0){
					this.$router.push("/shouye")
				}
			})
		}
	}
	
	
	
}
	
	
</script>

<style scoped>
	div{
		text-align:center;
	}
</style>