<template>
    <div class="register">
        <h1>欢迎注册</h1>
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
            <el-input v-model="form.name" @blur="checkusername(form.name)"></el-input>
            <span v-html="form.usermsg"></span>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="form.password" @blur="checkpassword()" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
            <el-input v-model="form.password1" @blur="checkpassword()" show-password></el-input>
            <span>{{form.msg}}</span>
        </el-form-item>
        <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
            <el-radio label="男" check="checked"></el-radio>
            <el-radio label="女"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="生日">
            <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="兴趣爱好">
            <el-checkbox-group v-model="form.type">
            <el-checkbox label="唱歌" name="type"></el-checkbox>
            <el-checkbox label="跳舞" name="type"></el-checkbox>
            <el-checkbox label="游戏" name="type"></el-checkbox>
            <el-checkbox label="读书" name="type"></el-checkbox>
            <el-checkbox label="健身" name="type"></el-checkbox>
            <el-checkbox label="聚餐" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="个人简介">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">注册</el-button>
            <el-button @click="reset">重置</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>
<script>
import api from '../api/index'
export default {
    data () {
        return {
            form: {
                name: '',
                password: '',
                password1: '',
                date1: '',
                type: [],
                sex: '',
                desc: '',
                msg:'',
                usermsg:''
            }
        }
    },
    methods: {
        onSubmit() {
            if(this.form.msg!==''||this.form.password=='' ||this.form.password1==''){
                this.$alert('请检查用户名和密码！', '提交失败', {
                confirmButtonText: '确定',
                });
            }else{
                this.subUser()
            }
        },
        async subUser(){
            let result = await api.userRegistration(this.form)
            if(result.data == '注册成功'){
                this.$message({
                    message: '注册成功',
                    type: 'success'
                });
                this.$router.push('/login')
            }else{
                this.$alert('注册失败请重试!', '注册失败', {
                confirmButtonText: '确定',
                });
            }
        }
        ,
        reset(){
            this.form.name = ''
            this.form.password = ''
            this.form.password1 = ''
            this.form.date1 = ''
            this.form.type = []
            this.form.sex = ''
            this.form.desc = ''
            this.form.msg = ''
            this.form.usermsg = ''
        },
        checkpassword(){
            if(this.form.password !==this.form.password1){
                this.form.msg = '两次输入的密码不一致!'
            }
            else if(this.form.password == ''|| this.form.password1 ==''){
                this.form.msg = '密码不能为空'
            }else{
                this.form.msg = ''
            }
        },
        async checkusername(value){
            let result = await api.verifyusername(value)
            if(value== ''){
                this.form.usermsg = '<span style="color:red">用户名不能为空</span>'
            }
            else if(result.data.length ==7){
                this.form.usermsg = '<span style="color:green">用户名可以注册</span>'
            }else{
                this.form.usermsg = '<span style="color:red">已存在该用户名,请重新输入</span>'
            }
            
        }
    }
}
</script>
<style lang="less" scoped>
.register{
    height: 100%;
    width: 50%;
    margin-left: 20%;
    h1{
        padding: 30px 0 30px 0;
    }
    span{
        color: red;
        font-size: 12px;
    }
}
</style>