<template>
	<div id="header">
		好好学习
	    <Top></Top>
	    
	    
	    
		
		
		
		
		<!--
        	作者：1748070171@qq.com
        	时间：2019-08-25
        	描述：     导航
        -->
		 <div class="swiper-container gallery-content ">
		    <div class="swiper-wrapper " >
		      <div class="swiper-slide"  v-for="item,index in lis" :class="{SY_index:item.bol}" @click="tabClick(index)" >{{item.name}}</div>
		    </div>	   
		 </div>
		  
		
		<!--
        	作者：1748070171@qq.com
        	时间：2019-08-25
        	描述：     内容区
        -->
		<div class="swiper-container gallery-top ">
		    <div class="swiper-wrapper">
		       <div class="swiper-slide" >感恩5折日</div>
		      <div class="swiper-slide" >莲花生鲜</div>
		      <div class="swiper-slide" >精选粮油</div>
		      <div class="swiper-slide">馋嘴零食</div>
		      <div class="swiper-slide" >酒水饮料</div>
		      <div class="swiper-slide">家用电器</div>
		      <div class="swiper-slide" >家居厨卫</div>
		      <div class="swiper-slide">美妆个护</div>
		      <div class="swiper-slide" >母婴玩具</div>
		    </div>
		 </div>
	
	
		
	</div>
</template>

<script>
	import Swiper from "Swiper"
	
	
	import  Top from "@/components/top/DhTop"	//底部导航
	
	export default{
		name:"shouye",
		data(){
			return{
				lis:[
					{name:"感恩5折日",bol:true},
					{name:"莲花生鲜",bol:false},
					{name:"精选粮油",bol:false},
					{name:"馋嘴零食",bol:false},
					{name:"酒水饮料",bol:false},
					{name:"家用电器",bol:false},
					{name:"家居厨卫",bol:false},
					{name:"美妆个护",bol:false},
					{name:"母婴玩具",bol:false}	
				],
				  nowIndex:0,
			}
		},
		components:{
			Top
		},
		mounted:function(){
		 let that = this;
		 var galleryThumbs = new Swiper('.gallery-content', {
			    spaceBetween: 10,
			    slidesPerView:5,
			    freeMode: true,
			    watchSlidesVisibility: true,
			    watchSlidesProgress: true,
			 });			  
		  var galleryTop = new Swiper('.gallery-top', {
		    spaceBetween: 10,
		    thumbs: {
		      swiper: galleryThumbs
		    },
		    speed:600,
		    on:{
	    	   slideChangeTransitionStart: function() {
	    	   	  that.nowIndex = galleryTop.activeIndex
//		                $(".SY_gse>div").removeClass('SY_index');
//		                $(".SY_gse>div").eq(this.activeIndex).addClass('SY_index');
				 for(let i = 0 ; i<that.lis.length ; i++){
					that.lis[i].bol = false
					}
					that.lis[that.nowIndex].bol = true
		         }
		       }
		    
		  });
		},
		methods: {    
	      tabClick(index){       //导航的点击事件       
	        for(let i = 0 ; i<this.lis.length ; i++){
				this.lis[i].bol = false
			}
				this.lis[index].bol = true
	      },
	    },
	}
	


	
	
	
	
</script>

<style scoped>
	@import "swiper/dist/css/swiper";
	
	
	#header{
		width: 100%;
		position: absolute;
	}
	.gallery-content{
		height: 3rem;
		width: 100%;
		line-height: 3rem;
		background-color: white;
		border-bottom: 0.1rem solid silver;
		position: fixed;
		top: 4rem;
		text-align: center;
		z-index: 100;
		font-size: 1.25rem;
	}
	.gallery-top{
		margin-top: 5.8rem;
		width: 100%;
		height:100rem;
		background-color: deepskyblue;
	}
	
	.SY_index{
		border-bottom:0.2rem solid  rgba(244,66,61);
		height: 2.8rem;
		color:rgba(244,66,61) ;
	}
	
</style>