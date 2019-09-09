
<!--
	作者：1748070171@qq.com
	时间：2019-08-25
	描述：   底部导航 
-->

<template>
	<div id="Db">
		<ul>
			<li v-for="(item,index) in lis" :id="item.ese" @click="but(index)" >
				<router-link :to="item.Usl"    >
					<img :src="item.img" alt=""  v-show="!item.bol"/>
					<img :src="item.img2" alt=""  v-show="item.bol"/>		
					<p :class="{nam:item.bol}">{{item.name}}</p>
				</router-link>
			</li>
		</ul>
		<!---->	
		<div id="li3" >
			<!--<router-link :to="/ss"></router-link>-->
				<img src="/static/img/ic_scan_gray.png" />
				<p>扫码购</p>
			
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"dbdh",
		data:function(){
			return{
				lis:[
					{name:"首页",img:"/static/img/1.png",img2:"/static/img/6.png",bol:true,Usl:"/shouye"},
					{name:"发现",img:"/static/img/2.png",img2:"/static/img/7.png",bol:false,Usl:"/faxian"},
//					{name:"扫码购",img:"/static/img/ic_scan_gray.png",img2:"/static/img/ic_scan_gray.png",bol:false ,ese:"li3",Usl:"/saoma"},
					{name:"购物车",img:"/static/img/4.png",img2:"/static/img/9.png",bol:false,Usl:"/gwc"},
					{name:"我",img:"/static/img/5.png",img2:"/static/img/10.png",bol:false,Usl:"/zhongx"}
				]
			}
		},
		methods:{
			but:function(index){
				for(let i = 0 ; i<this.lis.length ; i++){
					this.lis[i].bol = false
				}
				this.lis[index].bol = true
			}
		},
		mounted:function(){
			this.$router.push("/shouye")
		}
	}
</script>

<style scoped>
	#Db{
		width: 100%;
		height: 5rem;
		background: white;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 100;
	}
	ul{
		display: flex;
		justify-content: space-between;
		list-style: none;
		border-top: 0.12rem solid grey;
		height: 90%;
	}
	li{
		padding-top: 0.1rem;
		height: 100%;
		width: 20%;
		text-align: center;		
	}
	li:nth-child(2){
		position: relative;
		left: -5%;
	}
	li:nth-child(3){
		position: relative;
		right: -5%;
	}
	img{
		height: 3rem;
	}
	
	
	
	#li3{
		background-color: rgb(253,65,77);
		border-radius: 50%;
		height: 5rem;
		width: 5rem;
		margin: 0 auto;
		margin-top: -5.7rem;
		color: white;
		text-align: center;
		box-shadow: 0rem 0rem 0.14rem  0.2rem red;
	}
	#li3 img{
		width: 2rem;
		height: 2rem;
		/*margin-top: 0.7rem;*/
		padding-top: 0.7rem;
		margin: 0 auto;
		
	}
	
	
	
	
	.nam{
		color: rgb(253,65,77) ;
	}
	a{
		text-decoration: none;
		color: gray;
	}
</style>