<template>
    <div class="weatherlist">       
        <div class="nav">
            <div class="left">
                {{locations}}
                5天天气预报
            </div>
            <div class="right">
                当前气温:{{WeatherLists.wendu}}度<br>{{WeatherLists.ganmao}} 
            </div>
        </div>
        <div class="content">
            <div class="list">
                <div class="day">
                    {{LastLists.date}}
                </div>
                    {{LastLists.type}}
                <div class="temperature">
                    {{LastLists.low}}<br>{{LastLists.high}}
                </div>
                <div class="wind">
                    {{LastLists.fx}}
                </div>
            </div>
            <div class="list" v-for="(item,i) in WeatherLists.forecast" :key="i">
                <div class="day">
                {{item.date}}
                </div>
                {{item.type}}
                <div class="temperature">
                    {{item.low}}<br>{{item.high}}
                </div>
                <div class="wind">
                    {{item.fengxiang}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'WeatherList',
    data () {
        return {
        }
    },
    props: ['locations'],
    mounted () {
        var that = this
        this.$store.dispatch('getweather',that.locations)  
    },
    computed: {
         ...mapState(['WeatherLists','LastLists',])
    },
    methods: {
    }
}
</script>
<style scoped lang="less">
.weatherlist{
    background-color: rgb(47,117,167);
    height: 70%;
    width: 100%;
    .nav{
        height: 18%;
        display: flex;
        justify-content: space-between;
        cursor:default;
        .left{  
            font-size: 20px;
            font-weight: 600;
            line-height: 120px;
            text-align: left;
            padding-left: 30px;
            color: white;
        }
        .right{
            padding-top: 8%;
            padding-right: 8%;
            font-size: 14px;
            font-weight: 600;
            text-align: left;
            color: white;
        }   
    }
    .content{
        display: flex;
        justify-content: left;
        height: 82%;
        .list{
            margin-top: 3%;
            width: 25%;
            height: 80%;
            border-left: rgb(58,124,171) 1px solid;
            display: flex;
            flex-direction:column;
            justify-content:space-between;
            text-align: center;
            color: white;
            .day{
                margin-top: 50px;
            }
            .wind{
                margin-bottom: 50px;
            }
            img{
                width: 30px;
                height: 30px;
                margin: 0 auto;
            }
        }
        .list:hover{
            background-color: rgb(68,131,176);
            cursor: pointer;
        }
        .list:first-child{
            margin-left: 80px;
        }
        .list:nth-child(2){
            background-color:rgb(68,131,176);
        }
        .list:last-child{
            border-right: rgb(58,124,171) 1px solid;
            margin-right: 80px;
        }
    }
}
</style>