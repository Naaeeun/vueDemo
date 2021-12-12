<template>
  <div class="home">
    <div class="top">
      <swiper></swiper>
    </div>
    <div class="center">
      <div class="img" @click="$router.push('/constellation')">
        <img src="../assets/images/星座.jpeg">
      </div>
      <div class="img">
        <img src="../assets/images/mv.jpeg" @click="$router.push('/musicmv')">
      </div>
      <div class="img">
        <img src="../assets/images/短视频.jpg" @click="$router.push('/shortvideo')">
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../components/Swiper.vue';
export default {
  name: 'Home',
  methods: {
    
  },
  components: {
    Swiper
  }
}
</script>
<style scoped lang="less">
  .home{
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .top{
      height: 65%;
      width: 100%;
    }
    .center{
      height: 35%;
      width: 100%;
      background:rgb(247,247,247);
      display: flex;
      justify-content: space-between;
      .img{
        width: 30%;
        height: 80%;
        margin-top: 25px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .img:hover{
        cursor: pointer;
        transition: 0.5s;
        transform:translateY(-5px);
      }
      .img:first-child{
        margin-left: 25px;
      }
      .img:last-child{
        margin-right: 25px;
      }
    }
  }
</style>>


</style>
