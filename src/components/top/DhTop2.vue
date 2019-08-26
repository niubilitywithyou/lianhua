<template>
	<div>
		<p>{{can}}</p>
		<slot name="right"></slot>
	</div>
</template>

<script>
	export default{
		name:"dhtop2",
		props:["can"]
	}
</script>

<style scoped>
	div{
		width: 100%;
		height: 4rem;
		line-height: 4rem;
		font-weight: 400;
		font-size: 2rem;
		border-bottom: 0.1rem solid gainsboro;
		background: white;
		position:fixed;
		top: 0;
		left: 0;
		z-index: 100;
		text-align: center;
	}

</style>