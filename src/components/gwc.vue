<template>
	<div>
		<Dh-topb can="购物车"></Dh-topb>
		
		<div style="margin-top:4rem">
			<button @click="sub(10)">-</button>
			<span>{{this.$store.state.count}}</span>
			<button @click="add(10)">+</button>
			<p>{{ifEvenOrOdd}}</p>
		</div>
		<h1>购物车</h1>
		<ul>
			<li>
				<span>序号</span>
				<span>名称</span>
				<span>价格</span>
				<span>删除</span>
			</li>
			<li v-for="item in getCartList">
				<span>{{item.id}}</span>
				<span>{{item.name}}</span>
				<span>{{item.price}}</span>
				<span><button @click="del">删除</button></span>
			</li>
		</ul>
			
	</div>
</template>

<script>
	
	import DhTopb from "@/components/top/DhTop2";  //头部导航
	
	import store from "../store/index.js";
	import {mapStare,mapGetters,mapActions} from "vuex"
	
	export default{
		name:"gwc",
		store,
		components:{
			DhTopb
		},
		computed:mapGetters(['getCount','ifEvenOrOdd','getCartList']),
		methods:{
			...mapActions(['sub','add','del'])
		}
	}
</script>

<style scoped>
	li{
		display: flex;
		padding: 1rem ;
		border-top:0.1rem solid black;
		border-bottom:0.1rem solid black;
		margin-top: 0.2rem ;
	}
	li>span{
		flex:1
	}
</style>