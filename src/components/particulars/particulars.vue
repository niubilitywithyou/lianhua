<template>
	<div id="">
		<img src="/static/img/ic_arrow_gray_up.png" @click="imgUslL"/>
		<h1 style="margin: 0 auto;margin-top: 0.3rem;">页面详情</h1>
		
		
	</div>
</template>

<script>
	export default{
		name:"particulars",
		data(){
			return{
				
			}
			id:[]
		},
		created(){//生命周期；里接受参数
			this.id = this.$route.query.id
			if(this.id[5]==0){
				alert("商品已停售")
			}
		},
		methods:{
			imgUslL(){ ////返回上一级
				this.$router.go(-1)
			}
		}
	}
	
</script>

<style scoped>
	div{
		height: 4rem;
		width: 100%;
		border-bottom: 0.1rem solid grey;
		background-color: white;
		position: fixed;
		display: flex;
	}
	img{
		width:1.2rem;		
		height:3.3rem;
		margin: 0.2rem 0rem 0rem 1rem;
	}
</style>