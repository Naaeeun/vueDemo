import axios from 'axios';

//获取天气
export function getWeather(CityName){
    return axios.get(`https://api.iyk0.com/6rtq/?city=${CityName}`)
}
//获取星座运势
export function getConstellation(consName,type){
    return axios.get(`api?consName=${consName}&type=${type}&key=fce22a76a9c39279c7f944aad0678f5f`)
}
//获取Mv列表
export function getmusicMv(msg){
    return axios.get(`https://api.iyk0.com/kgmv/?msg=${msg}`)
}
//获取mv详细信息
export function getmuiscmsg(msg,id){
    return axios.get(`mv/?msg=${msg}&n=${id}`)
}
//获取短视频
export function getshortVideo(type){
    return axios.get(`video/?type=${type}`)
}
//用户名验证
export function verifyusername(username){
    return axios({
        method:'post',
        url:'http://localhost:8000/checkusername',
        data:{username}
    }).then((res)=>{
        return res
    }).catch((err)=>{
        console.log(err)
    })
} 
//用户注册
export function userRegistration(data){
    return axios({
        method:'post',
        url:'http://localhost:8000/userregistration',
        data:{data}
    }).then((res)=>{
        return res
    }).catch((err)=>{
        console.log(err)
    })
}
//用户登录
export function userlogin(data){
    return axios({
        method:'post',
        url:'http://localhost:8000/userlogin',
        data:{data}
    }).then((res)=>{
        return res
    }).catch((err)=>{
        console.log(err)
    })

}
export default{
    getWeather,getConstellation,getmusicMv,getmuiscmsg,getshortVideo,verifyusername,userRegistration,userlogin
}