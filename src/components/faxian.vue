<template>
	<div>
		<Dh-topb can="发现"></Dh-topb>
		<mt-swipe :auto="4000"class="img">
			<mt-swipe-item v-for="item in pic"><img :src="item.pic" /></mt-swipe-item>
		</mt-swipe>

		
	</div>
</template>

<script>
	import Vue from "vue";
	import axios from "axios";
	import { Swipe, SwipeItem } from 'mint-ui';
	
	
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	
	
	
	import DhTopb from "@/components/top/DhTop2" ; //头部
	import Data from "../api/apiIndex";  ////封装异步文件夹
//	import wx from "@/api/apiIndex";


	
	
	export default{
		name:"faxian",
		data(){
			return{
				pic:[]
			}
		},
		components:{
			DhTopb
			
		},
		created(){  //创建后
			Data.pic().then((res) =>{
					this.pic = res.data.pics
			})
//			Data.wx().then((res)=>{
////				console.log(res)
//			})
			
		}
	
		
	}
</script>

<style scopet>
	.img{
		width: 100%;
		height:17rem;
		margin-top: 4rem;
	}
	.img img{
		width: 100%;
		height:100%
	}
</style>