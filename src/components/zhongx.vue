<template>
	<div>
		
		zhongxi
   		<Dh-topb class="db">
   			<img     slot="right"    src="/static/img/ic_reply.png"  />
   		</Dh-topb>
		
	</div>
</template>

<script>

	
	import DhTopb from "@/components/top/DhTop2"
	export default{
		name:"zhongx",
		components:{
			DhTopb
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