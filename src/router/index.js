import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)


//一级路由
	import Shouye from	"@/components/shouye"   //主页面
	import Faxian from	"@/components/faxian"   //发现
	import Gwc from	"@/components/gwc"   //购物车
	import Zhongx from	"@/components/zhongx"   //我的

/////////////////
	import  Particulars     from "@/components/particulars/particulars"   //商品详情页面   下架商品
	import  ParticularsB     from "@/components/particulars/particularsB"   //商品详情页面      正常商品	
	import Denglu from "@/store/api"   //登录页面
	
//首页的二级路由	
	import ShouyeA from "@/components/shouye/shouyeA"   
	

export default new Router({
  routes: [
	 {
		path:"/shouye",
		component:Shouye
    },
	{
		path:"/faxian",
		component:Faxian	
   },
    {
		path:"/gwc",
		component:Gwc	
    },
    {
		path:"/zhongx",
		component:Zhongx	
    },
    {
    	path:"/particulars",
    	component:Particulars
    },
    {
    	path:"/particularsB",
    	component:ParticularsB
    },
    {
    	path:"/denglu",
    	component:Denglu
    }
    
    
    
  ]
})
