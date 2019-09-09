import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let state = {   //状态      //*属性
	count : 1,
	cartList:[
		{
			"id":19,
			"name":"鱼香肉丝",
			"price":19	
		},{
			"id":19,
			"name":"麻辣水煮肉",
			"price":29	
		},{
			"id":19,
			"name":"干锅牛蛙",
			"price":59	
		},{
			"id":19,
			"name":"龙嘉小炒肉",
			"price":19	
		},{
			"id":19,
			"name":"清蒸黄花鱼",
			"price":109	
		},{
			"id":19,
			"name":"小龙虾",
			"price":99	
		}
	]
}
let getters = {  //接受器     获取值
	getCount(stare){
		return stare.count
	},
	ifEvenOrOdd(stare){
		if(stare.count %2 == 0){
			return " 偶数"
		}else{
			return "奇数"
		}
	},
	getCartList(state){
		return state.cartList
	}
}
let actions = { //活动      //触发改变    ///传参  ：can
	add({commit,state},can){
		commit('doAdd',can)
	},
	sub({commit,state},can){
		commit('doSub',can)
	},
	del({commit,state},id){
		commit('del',id)
	}
}
let mutations = {   // 变化     //执行改变
	doAdd(state,can){
		state.count+=can
	},
	doSub(state,can){
		state.count-=can
	},
	del(state,id){
		let index = state.cartList.findIndex((item)=>{
			return item.id == id
		})
		state.cartList.splice(index,1)
	}
}
let store = new Vuex.Store({
	state,getters,actions,mutations
})
export default store;