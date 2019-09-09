import axios from "axios";
import qs from "qs" ;

//1.indexpic   轮播图
const pic = () =>{
	return axios.get("/api/index/index/indexpic").then((res) =>res.data)
}
//2.post 代参     登录
const login = (params) =>{
	return axios.post("/api/index/Login/login",qs.stringify(params)).then((res) => res.data)
}
//3.大麦  type接口
const damai = () => {
	return axios.get("/damai/index/type").then((res) => res.data)
}
//4.大麦   代参
const damaiT = (par) =>{
	return axios.get("/damai/index/type",{
		params:{
			...par
		}
	})
}




const wx=()=>{
	return axios.get("http://ldy520.cn/wxshare/ts.php")
}

export default{
	login,
	pic,
	damai,
	wx
}
