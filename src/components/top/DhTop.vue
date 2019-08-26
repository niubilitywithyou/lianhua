<template>
	<div id="Top">
		<div class="left">
			<img src="/static/img/ic_channel_content_location_flag.png" />
		</div>
		<div class="right">
			<input type="text" placeholder="搜索商品名称"/>
			<img src="/static/img/ic_search.png" />
		</div>
	</div>
</template>

<script>
	export default{
		name:"DhTop"
	}
</script>

<style scoped>
	#Top{
		height: 4rem;
		width: 100%;
		/*border-bottom: 0.1rem solid gainsboro;*/
		background: white;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		z-index: 100;
		/*justify-content: space-between;*/
	}
	.left{		
		width: 30%;
		/*background-color: yellow;*/
	}
	.left>img{
		width: 2rem;
		position: relative;
		top: 0.7em;
		left: 1rem;
	}
	
	
	.right{
		width: 70%;
		/*background-color: #42B983;*/	
		position: relative;	
	}
	input{
		height: 75%;
		width: 95%;
		border: none;
		border-radius: 2rem;
		background: gainsboro;
		margin-top: 2.5%;
		outline: none;
		text-indent: 4rem;
		overflow: hidden;
		font-size: 1.2rem;
	}
	.right img{
		position: absolute;
		left: 1.2rem;
		top: 1.15rem;
		width: 2rem;
	}
</style>