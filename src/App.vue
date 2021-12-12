<template>
  <div id="app">
    <div class="leftNav">
      <div class="nav">
        <img src="./assets/images/秋天.png">
        <router-link to="/">
          <div>首页</div>
        </router-link>
        <router-link to="/register">
          <div>注册</div>
        </router-link>
        <router-link :to="`/weather?name=${LocationCity}`">
          <div>天气</div>
        </router-link>
        <img src="./assets/images/列表.png">
      </div>
      <div class="center">
        <div class="first">天青色等烟雨</div><img src="./assets/images/咖啡.png">
        <div class="second"><img src="./assets/images/身份证.png"><div @click="$router.push('/login')">登录</div><div @click="$router.push('/register')">注册</div></div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Home from './views/Home.vue'
import BMap from 'BMap'
export default {
  data () {
      return {
          LocationCity:'',
      }
  },
  components: {
    Home
  },
  mounted () {
    this.city()
  },
  methods: {
    city(){    //定义获取城市方法
        const geolocation = new BMap.Geolocation();
        var _this = this
        geolocation.getCurrentPosition(function getinfo(position){
            let city = position.address.city;             //获取城市信息
            let province = position.address.province;    //获取省份信息
            _this.LocationCity = city
        }, function(e) {
              _this.LocationCity = "定位失败"
            }, {provider: 'baidu'});		
    },
  }

}
</script>
<style scoped lang="less">
#app{
  display: flex;
  .leftNav{
    width: 30vw;
    height: 100vh;
    .nav{
      display: flex;
      justify-content: left;
      padding-left: 20px;
      margin-top: 20px;
      font-size: 18px;
      a{
        text-decoration: none;
        color: black;
        line-height: 30px;
        font-weight:600;
        margin-left: 25px;
      }
      .router-link-active{
        color:green
      }
      img{
        height: 30px;
        width: 30px;
      }
      img:last-child{
        margin-left: 150px;
      }
    }
    .center{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-top: 310px;
      height: 100px;
      .first{
        height: 50px;
        font-size: 25px;
        font-weight:900;
        margin-left: 80px;
        line-height: 50px;
      }
      .second{
        img{
          height: 30px;
          width: 30px;
        }
        color: rgb(0,168,98);
        display: flex;
        height: 30px;
        font-size: 18px;
        margin-left: 80px;
        line-height: 30px;
        margin-top: 20px;
        div{
          font-size: 16px;
          cursor:pointer;
        }
        div:last-child{
          margin-left: 30px;
          border: 1px solid rgb(0,168,98);
          height: 30px;
          width: 60px;
          text-align: center;
          border-radius:15px;
        }
      }
    }
  }
  .content{
    width:70vw;
    height:100vh;
  }
}

</style>
