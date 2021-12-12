<template>
    <div class="constellation">
        <el-container>
        <el-aside width="200px">
            <div class="top">
                <div>{{daydata.name}}</div>
            </div>
            <div class="content">
                <div>今日运势:</div>
                <div>日期:{{daydata.datetime}}</div>
                <div>综合指数:{{daydata.all}}</div>
                <div>幸运色:{{daydata.color}}</div>
                <div>健康指数:{{daydata.health}}</div>
                <div>爱情指数:{{daydata.love}}</div>
                <div>财运指数:{{daydata.money}}</div>
                <div>幸运数字:{{daydata.number}}</div>
                <div>速配星座:{{daydata.QFriend}}</div>
                <div>工作指数:{{daydata.work}}</div>
                <div>今日概述:{{daydata.summary}}</div>
            </div>
        </el-aside>
        <el-container>
            <el-header height="20%">
                <input type="text" placeholder="请输入要查询的星座" v-model="conname" @keydown.enter="checkcon"><input type="button" value="查询" @click="checkcon">
            </el-header>
            <el-main>
                <div class="week">
                    <div>本周运势</div>
                    <div>健康:{{weekdata.health}}</div>
                    <div>工作:{{weekdata.job}}</div>
                    <div>恋情:{{weekdata.love}}</div>
                    <div>财运:{{weekdata.money}}</div>
                </div>
                <div class="month">
                    <div>本月运势</div>
                    <div>总体运势{{month.all}}</div>
                    <div>健康{{month.health}}</div>
                    <div>工作{{month.work}}</div>
                    <div>恋情{{month.love}}</div>
                    <div>财运{{month.money}}</div>
                </div>
                <div class="year">
                    <div>年度运势</div>
                    <div>年度密码:{{year.mima.info}}</div>
                    <div>总体运势:{{year.mima.text[0]}}</div>
                    <div>工作:{{year.career[0]}}</div>
                    <div>恋情:{{year.love[0]}}</div>
                    <div>财运:{{year.finance[0]}}</div>
                </div>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>
<script>
import api from '../api/index.js'
export default {
    name:'Constellation',
    data () {
        return {
            daydata:[],weekdata:[],month:[],year:{mima:{text:[]},career:[],love:[],finance:[]},yeari:[],
            conname:''
        }
    },
    mounted () {
       this.getdata('白羊座')
    },
    methods: {
        async getdata(consName){
            let todayResult = await api.getConstellation(consName,'today')
            let weekResult = await api.getConstellation(consName,'week')
            let monthResult = await api.getConstellation(consName,'month')
            let yearResult = await api.getConstellation(consName,'year')
            this.daydata = todayResult.data
            this.weekdata = weekResult.data
            this.month = monthResult.data
            this.year = yearResult.data
        },
        checkcon(){
            this.getdata(this.conname)
        }
    }
}
</script>

<style lang="less" scoped>
.constellation{
    width: 100%;
    height: 100%;  
    .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    display: flex;
    justify-content:left;
    input[type=text]{
        width: 50%;
        height: 30px;
        margin: 60px 0 0 200px;
    }
    input[type=button]{
        height: 34px;
        width: 68px;
        margin-top: 60px;
        cursor:pointer;
    }
  }
  .el-aside {
    background-color: #D3DCE6;
    color: black;
    text-align: center;
    .top{
        margin-top: 68px;
        width: 100%;
        height: 40px;
        font-size: 20px;
        font-weight: 600;
    }
    .content{
        text-align: left;
        margin-left: 30px;
        div{
            margin-top: 25px;
        }
        div:nth-child(1){
            margin-left: -25px;
        }
        div:last-child{
            font-size: 12px;
        }
    }
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    display: flex;
    flex-direction: column;
    .week{
        height: 25%;
        width: 100%;
        font-size: 12px;
    }
    .month{
        height: 25%;
        width: 100%;
        font-size: 12px;
    }
    .year{
        height: 50%;
        width: 100%;
        font-size: 12px;
    }
  } 

  .el-container {
    height: 100%;
    width: 100%;
  }
}
</style>