<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>

		<dbdh v-if="Dbdh"></dbdh>
  </div>
</template>

<script>




import  dbdh from "@/components/bottom/Dibu_dh"	//底部导航
export default {
  name: 'App',
  data(){
  	return{
  		Dbdh : true 
  	}
  },
  components:{
				dbdh
  },
  watch:{   //监听
  	'$route':function(a){
//		console.log(a)
  		if(a.path == "/faxian" || a.path=="/shouye" || a.path == "/gwc" || a.path == "/zhongx"){
  			this.Dbdh = true 
  		}else{
  			this.Dbdh = false
  		}
  	}
  },
  beforeMount(){   //即将挂载
  	this.$router.push("/denglu")
  }
  
  
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
*{
	margin: 0;
	padding: 0;
}
html,
body,
#app{
	/*height: 100%;
	width: 100%;*/
	/*background-color: rgba(220,220,220,0.1);*/
}

@media only screen and (max-width:400px) and (min-width: 320px){html,body{font-size: 11.25px;}}
@media only screen and (max-width:470px) and (min-width: 400px){html,body{font-size: 12.5px;}} 
@media only screen and (max-width:480px) and (min-width: 470px){html,body{font-size: 14.68px;}} 
@media only screen and (max-width:540px) and (min-width: 480px){html,body{font-size: 15px;}} 
@media only screen and (max-width:560px) and (min-width: 540px){html,body{font-size: 16.875px;}} 
@media only screen and (max-width:570px) and (min-width: 560px){html,body{font-size: 17.5px;}}  
@media only screen and  (min-width: 640px){html,body{font-size: 25px;}} 
 

















</style>
