<template>
	<div id="">
		<div class="syB"><img src="/static/images/100.jpg" alt="" /></div>
		<ul class="syImg">
			<li><img src="/static/images/15.jpg" alt="" /></li>
			<li><img src="/static/images/101.jpg" alt="" /></li>
			<li><img src="/static/images/103.jpg" alt="" /></li>
			<li><img src="/static/images/104.jpg" alt="" /></li>
		</ul>
		<div><img src="/static/images/" alt="" /></div>
	</div>
</template>

<script>
	export default{
		name:"shouyeA"
	}
</script>

<style scoped>
	.syB{
		width:100%;
		height: 18rem;
	}
	.syB>img{
		width: 100%;
		height:100%
	}
	.syImg{
		width:100%;
		display: flex;
		justify-content: space-around;
		list-style: none;
	}
	.syImg>li{
		width: 25%;
	}
	.syImg>li>img{
		width: 100%;
		height: 100%;
	}
	
</style>