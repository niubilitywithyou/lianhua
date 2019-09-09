<template>
	<div>
   		<Dh-topb class="db">
   			<img     slot="right"    src="/static/img/ic_reply.png"  />
   		</Dh-topb>
   		
   		
   		<div style="margin-top: 100px;">
   				
   				<router-link to="/denglu">
   					登录
   				</router-link>
   			</div>
	</div>
</template>

<script>
	import DhTopb from "@/components/top/DhTop2"    //头部
	
	
	
	
	export default{
		name:"zhongx",
		components:{
			DhTopb,
		
			
		}
	}
</script>

<style scoped>
	.db{
		background: rgb(248,44,89);
		border: none;
	}
	.db>img{
		position: absolute;
		right: 1rem;
		top: 1rem;
		width: 2rem;
	}
</style>