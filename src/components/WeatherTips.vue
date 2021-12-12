<template>
    <div class="weathertips">
        <div class="nav">
            <div class="left">生活气象指数</div>
            <div class="right">下午好，天气不好，也记得让心情保持舒畅哦</div>
        </div>
        <div class="center">
            <div class="content">
                <img src="../assets/images/衣服.png">
                <div>
                    <div>穿衣:棉服类</div>
                    <div>4~8度</div>
                </div>
            </div>
            <div class="content">
                <img src="../assets/images/太阳.png">
                <div>
                    <div>感冒:易发</div>
                    <div>天气较凉</div>
                </div>
            </div>
            <div class="content">
                <img src="../assets/images/污染.png">
                <div>
                    <div>污染:戴口罩</div>
                    <div>轻度污染</div>
                </div>
            </div>
            <div class="content">
                <img src="../assets/images/出游.png">
                <div>
                    <div>出游:不适宜</div>
                    <div>中雪转小雪</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
}
</script>

<style lang="less" scoped>
.weathertips{
    width: 100%;
    height: 30%;
    background: rgb(47,117,167);
    .nav{
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: left;
        .left{
            color: white;
            font-size: 18px;
            font-weight: 600;
            margin-left: 50px;
        }
        .right{
            margin-left: 20px;
            color: rgb(204,213,221);
        }
    }
    .center{
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: space-between;
        .content{
            display: flex;
            height: 60%;
            width: 15%;
            img{
                width: 50px;
                height: 50px;
                margin-top: 20px;
            }
            div{
                cursor: default;
                margin: 0 auto;
                text-align: center;
                margin-top: 10px;
                color: white;
            }
        }
        .content:first-child{
            margin-left: 100px;
        }
        .content:last-child{
            margin-right: 100px;
        }
    }
}
</style>