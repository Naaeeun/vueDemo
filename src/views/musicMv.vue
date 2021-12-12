<template>
    <div class="musicmv">
        <div class="top">
            <input type="text" placeholder="输入MV名字" v-model="musicname" @keydown.enter="checkmv"><input type="button" value="搜索" @click="checkmv"> 
        </div>
        <div class="center">
            <div class="content" v-for="(item,i) in mvlist" :key="i" @click="$router.push({name:'mvMsg',params:{msong:item.song,id:item.id}})">
                <div>{{item.singer}}-{{item.song}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../api/index.js'
export default {
    name:'musicMv',
    data () {
        return {
            mvlist:[],
            musicname:''
        }
    },
    mounted () {
        this.getmvList('一路向北')
    },
    methods: {
        async getmvList(msg){
            let result = await api.getmusicMv(msg)
            this.mvlist = result.data
        },
        checkmv(){
            this.getmvList(this.musicname)
        }
    }
}
</script>
<style lang="less" scoped>
.musicmv{
    width: 100%;
    height: 100%;
    .top{
        height: 15%;
        width: 100%;
        display: flex;
        justify-content: left;
        input[type=text]{
            height: 30%;
            width: 50%;
            margin: 50px 0 0 200px;
            font-size: 18px;
        }
        input[type=button]{
            height: 33%;
            width:8%;
            margin: 50px 0 0 0;
            cursor: pointer;
        }
    }
    .center{
        height: 85%;
        width: 100%;
        display: flex;
        flex-direction:column;
        .content{
            height: 6.5%;
            width: 100%; 
            div{
                border-bottom: 1px solid rgb(242,242,242);
                margin-left: 8%;
                line-height: 40px;
                font-size: 18px;
                padding-left: 3%;
            }
            div:hover{
                background-color: rgb(245,248,251);
                cursor: pointer;
            }
        }

    }
}
</style>