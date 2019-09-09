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
		      <div class="swiper-slide"  style="margin-right:0px !important;" v-for="item,index in lis" :class="{SY_index:item.bol}" @click="tabClick(index)">{{item.name}}</div>
		    </div>	   
		 </div>
		  
		
		<!--
        	作者：1748070171@qq.com
        	时间：2019-08-25
        	描述：     内容区
        -->
		<div class="swiper-container gallery-top ">
		    <div :class="{'swiper-wrapper':true,'swiper-wrapperA':false}">	    	
		       <div class="swiper-slide"  >         <!---------  主页1         --------->
		       	<div id="zuyeone"  > 
		       		<ul >
		       			<li  v-for="item in arrayone" @click="arra(item)"   >
		       				<img :src="'/static/images/'+item[1]"/>
		       			</li>
		       		</ul>
		       		<ul >
		       			<li v-for="item in arraytwo"  @click="arra(item)">
		       				<img :src="'/static/images/'+item[1]"/>
		       			</li>
		       		</ul>
		       		<ul >
		       			<li v-for="item in arraythere"  @click="arra(item)">
		       				<img :src="'/static/images/'+item[1]"/>
		       			</li>
		       		</ul>
		       	</div>
		       		<h3 style="text-align: center;" v-show="wen">没有了</h3>
		       </div>
		       
		       
		      <div class="swiper-slide" >
		      	<Shouye-a></Shouye-a>
		      	
		      	莲花生鲜
		      </div>
		      <div class="swiper-slide" >精选粮油</div>
		      <div class="swiper-slide">馋嘴零食</div>
		      <div class="swiper-slide" >酒水饮料</div>
		      <div class="swiper-slide">家用电器</div>
		      <div class="swiper-slide" >家居厨卫</div>
		      <div class="swiper-slide">美妆个护</div>
		      <div class="swiper-slide" >母婴玩具</div>
		    </div>
		 </div>
	
	
		
		
		<a href="#"style="position: fixed;right: 2rem;bottom: 10rem;z-index: 100;"  v-show="wen"><img src="/static/img/rd__move.png"style="width: 4rem;"/></a>
	</div>
</template>

<script>
	import Swiper from "Swiper"
	import axios from "axios"

	
	import  Top from "@/components/top/DhTop"	//底部导航
	import ShouyeA from "@/components/shouye/shouyeA"
	
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
				  nowIndex:0, //导航滑动下标
				  arrayone:[] ,   ///   储存数据    arrayone
				  arraytwo:[] ,   ///   储存数据    arraytwo
				  arraythere:[],    ///   储存数据     arraythere
				  
				  wen:false//控制文字隐藏
			
				  
			}
		},
		components:{
			Top,
			ShouyeA
  		
				
		},
		mounted:function(){
		 let that = this;
		 
		 //页面的滑动效果
			 var galleryThumbs = new Swiper('.gallery-content', {
				    spaceBetween: 10,
				    slidesPerView:4,
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
					 for(let i = 0 ; i<that.lis.length ; i++){
						that.lis[i].bol = false
						}
						that.lis[that.nowIndex].bol = true
			         }
			       }
			    
			  });
		
		
		
	//		get   请求数据    //数据渲染
			axios.get("/indexone/LianhuaGO/Shouye/day.php",{params:{id:1}})
			.then(function(rel){
	//			console.log(rel.data);
				that.arrayone = rel.data
			})
			axios.get("/indextwo/LianhuaGO/Shouye/dayone.php",{params:{id:2}})
			.then(function(rel){
	//			console.log(rel.data);
				that.arraytwo = rel.data ;				
			})
			
			//、监听滚动事件       利用VUE写一个在控制台打印当前的scrollTop,      首先，在mounted钩子中给window添加一个滚动滚动监听事件，
			  window.addEventListener('scroll', this.handleScroll)//
		},
		
		
		
		methods: {    
		    tabClick(index){       //导航的点击事件         样式变化
		        for(let i = 0 ; i<this.lis.length ; i++){
					this.lis[i].bol = false
				}
					this.lis[index].bol = true   
		    },
		    arra(item){
				if(item[5] == 0){
					this.$router.push({path:'/particulars',query:{id:item}})  //空页面
				}else{
					this.$router.push({path:'/particularsB',query:{id:item}})   //商品详情页面					
				}
		    },

	    	handleScroll () {  //滚动监听事件
			 	let that = this 
			      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
// 					 console.log(scrollTop)
			    if(scrollTop ==500){
			    	axios.get("/indextwo/LianhuaGO/Shouye/daythere.php",{params:{id:3}})
					.then(function(rel){
//						console.log(rel.data);
						that.arraythere = rel.data ;
			    		that.wen = true		    	
						
					})
			    }else if(scrollTop <500){
			    	this.wen = false
			    	
			    }
		 	}
	    },  
	    destroyed () {
	      window.removeEventListener('scroll', this.handleScroll)//关闭滚动监听
	    },
	     
	    	
	}
	


	
	
	
	
</script>

<style scoped>
	@import "swiper/dist/css/swiper";
	
	*{
		margin: 0;
		padding: 0;

	}
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
		/*height:100rem;*/
		/*background-color: deepskyblue;*/
		padding-bottom: 6rem;	
	}
	
	.SY_index{
		border-bottom:0.2rem solid  rgba(244,66,61);
		height: 2.8rem;
		color:rgba(244,66,61) ;
	}
	
	
	
	#zuyeone{
		width: 100%;
	}
	li{
		display: inline-block;
		list-style: none;
		width: 100%;
		font-size: 0;	
	}
	#zuyeone li>img{
		width: 100%;
		height: 100%;
	}
	.swiper-wrapperA{
		transition-duration: 0ms;
		transform: translate3d(-296px, 0px, 0px);
	}
</style>