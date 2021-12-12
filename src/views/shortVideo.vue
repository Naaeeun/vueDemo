<template>
    <div class="shortvideo">
        <div class="nav">
            <div v-for="(item,i) in list" :key="i" 
            :class="{check:i==checked}"
            @click="checkType(i)"
            >{{item.title}}</div>
        </div>
        <div class="center">
            <video :src="`${shortvideo.url}`" controls="controls" autoplay="autoplay" loop="loop"></video>
        </div>
    </div>
</template>
<script>
import api from '../api/index'
export default {
    data () {
        return {
            shortvideo:[],
            checked:0,
            list:[{title:'网红'},{title:'明星'},{title:'热舞'},{title:'风景'},{title:'游戏'},{title:'动物'}]
        }
    },
    methods: {
        async getvideo(type){
            let result = await api.getshortVideo(type)
            this.shortvideo = result.data
        },
        checkType(i){
            this.checked = i
            this.getvideo(this.list[i].title)
        },
        handleScroll(){
            this.getvideo('热舞')
        }
    },
    mounted () {
        let timer;
        let flag = true;
        this.getvideo('网红')
        window.addEventListener('mousewheel',()=>{
            if(flag){
                this.handleScroll()
            }
            flag=false
            clearTimeout(timer)
            timer = setTimeout(()=>{flag=true},300)
        },true)
    },
}
</script>
<style lang="less" scoped>
.shortvideo{
    width: 100%;
    height: 100%;
    .nav{
        cursor: pointer;
        background-color:rgb(51,51,51);
        height: 10%;
        width: 100%;
        color: white;
        display: flex;
        justify-content:space-between;
        font-size: 18px;
        line-height: 80px;
        div{
            height: 80%;
        }
        div:nth-child(1){
            margin-left: 100px;
        }
        div:nth-child(6){
            margin-right: 100px;
        }
        .check{
            border-bottom: 3px solid white;
        }
    }
    .center{
        height: 90%;
        width: 100%;
        video{
            width: 100%;
            height: 100%;
            background-color: black;
        }
    }
}
</style>