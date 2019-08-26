import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)


//一级路由
	import Shouye from	"@/components/shouye"   //主页面
	import Faxian from	"@/components/faxian"   //主页面
	import Gwc from	"@/components/gwc"   //主页面
	import Zhongx from	"@/components/zhongx"   //主页面





export default new Router({
  routes: [
//  {
//    path: '/',
////    name: 'HelloWorld',
//    component: Shouye  
//  },
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
    
    
    
  ]
})
