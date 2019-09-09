<template>
	<div>
		<div id="imgUsl">
			<img src="/static/img/ic_arrow_gray_up.png" @click="imgUslL"/>
			<img src="/static/img/ic_status_share.png"/>
		</div>
		<div id="xiangqing">
			<div>
				<img :src="'/static/images/'+id[1]"/>
			</div>
			<div style="text-indent: 1rem;">
				<h2>{{id[2]}}</h2>
				<p style="color: red;font-size: 1.5rem;">￥<span style="font-size: 2rem;">{{id[3]}}</span></p>
			</div>
		</div>
		
		<p class="fuwu"><span style="color: grey;">服务</span>&nbsp;由&nbsp;<span style="color: burlywood;">普蜂莲花 - 长沙新店</span>&nbsp;发货与售后</p>
		
		<p style="padding: 1rem 0rem;font-size: 2rem;text-align: center;">为您推荐</p>
		
		
		
		
		
		
		
		
		<div id="top">
			<div >
				<div>
					<img src="/static/img/ic_tab_profile_female_normal.png" />
					<p>客服</p>
				</div>
				<div>
					<img src="/static/img/4.png" />
					<p>购物车</p>
				</div>
			</div>
			<div>加入购物车</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"particularsB",
		data(){
			return{
				
			}
			id:[]
		},
		created(){//生命周期；里接受参数
			this.id = this.$route.query.id
		},
		methods:{
			imgUslL(){ ////返回上一级
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	#imgUsl{
		width: 100%;
		height: 4rem;
		background: white;
		display: flex;
		justify-content: space-between;
		position: fixed;
		top: 0;
		left: 0;
	}
	#imgUsl>img:first-child{
		width:1.2rem;		
		height:3.3rem;
		margin: 0.2rem 0rem 0rem 1rem;
	}
	#imgUsl>img:last-child{
		width:3rem;		
		height:3.3rem;
		margin: 0.2rem 0.5rem 0rem 0rem;
	}
	
	#xiangqing{
		width: 100%;
		height: 25rem;
		background: white;
		padding-top:4rem;
		
	}
	#xiangqing>div:first-child{
		width: 80%;
		height: 55%;
		padding: 3rem 3.2rem;
	}
	#xiangqing img{
		width: 100%;
		height: 100%;
	}
	
	.fuwu{
		padding: 1rem 0rem;
		font-size:1.3rem;
		background: white;
		margin-top: 1rem;
		text-indent: 1rem;
	}
	
	
	
	
	#top{
		height: 4rem;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		border-top: 0.1rem solid gainsboro;
		background: white;
		z-index: 10000;
		display: flex;
		justify-content: space-between;
	}
	#top img{
		width: 2.5rem;
		height: 2.2rem;
	}
	#top>div:first-child{
		width: 55%;
		display: flex;
		justify-content: space-around;
		text-align: center;
	}
	#top>div:last-child{
		width: 45%;
		background-color: red;
		text-align: center;
		font-size: 1.8rem;
		color: white;
		line-height: 4rem;
	}
	
</style>