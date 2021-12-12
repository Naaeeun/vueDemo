<template>
    <div class="mvMsg">
        <video :src="`${mvlist.link}`" controls="controls" autoplay="autoplay"></video>
        <div class="footer">
            {{mvlist.mvtitle}}-{{mvlist.singer}}
        </div>
    </div>
</template>

<script>
import api from '../api/index'
export default {
    data () {
        return {
            msong:this.$route.params.msong,
            id:this.$route.params.id,
            mvlist:[],
        }
    },
    mounted () {
        this.getdata(this.msong,this.id)
    },
    methods: {
        async  getdata(msg,id){
            let result = await api.getmuiscmsg(msg,id)
            this.mvlist = result.data
        },
    }
}
</script>

<style lang="less" scoped>
.mvMsg{
    height: 100%;
    width: 100%;
    video{
        height: 90%;
        width: 100%;
        background-color: black;
    }
    .footer{
        margin-top: 1%;
        font-size: 20px;
        font-weight: 600;
        height: 7%;
        width: 100%;
    }
}
</style>