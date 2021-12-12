<template>
    <div class="login">
        <div class="content">
            <h1>欢迎回来</h1>
            <el-input v-model="form.username" placeholder="请输入账号" class="username"></el-input>
            <el-input placeholder="请输入密码" v-model="form.password" show-password class="password"></el-input>
            <el-button type="primary" round class="btn" @click="submit">登录</el-button>
            <el-button type="text" class="btn1" @click="$router.push('/register')">新用户注册</el-button>
        </div>
    </div>
</template>
<script>
import api from '../api/index'
export default {
    data () {
        return {
            form:{
                username:'',
                password:''
            }
        }
    },
    methods: {
        submit(){
            if(this.username ==''||this.password ==''){
                this.$alert('请检查用户名和密码！', '登录失败', {
                confirmButtonText: '确定',
                });
            }else{
                this.check()
            }
        },
        async check(){
            let result = await api.userlogin(this.form)
            if(result.data == "用户名或密码错误"){
                this.$message.error('用户名或密码错误');
                this.form.username = ''
                this.form.password = ''
            }else{
                this.$message({
                    message: '登录成功',
                    type: 'success'
                });
                this.$router.push('/')
            }
        }
    }
    
}
</script>
<style lang="less" scoped>
.login{
    width: 100%;height: 100%;
    position: relative;
    background-color: white;
    .content{
        background-color:white;
        box-shadow: 0 0 10px #888888;
        border-radius: 5%;
        height: 400px;
        width: 400px;
        position: absolute;
        top: 20%;
        left: 30%;
        h1{
            margin: 40px 0 0 50px;
        }
        .username{
            width: 280px;
            margin: 40px 0 0 50px;
        }
        .password{
            width: 280px;
            margin: 30px 0 0 50px;
        }
        .btn{
            width: 280px;
            margin: 50px 0 0 50px;
        }
        .btn1{
            margin: 5px 0 0 260px;
        }
    }
}
</style>