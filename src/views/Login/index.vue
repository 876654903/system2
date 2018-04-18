<template>
    <div class="login-page">
        <el-row type="flex" justify="center" align="middle" style="height:100%">
            <el-col class="login-box" :span='10' style="padding:20px;">
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" 
                label-position="center">
                    <el-form-item label="账号" prop="name">
                        <!--prop  和v-module上的值是一致的  -->
                        <el-input type="text" v-model="ruleForm2.name" auto-complete="off" placeholder="sdfsdf"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item style="margin:0">
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { login } from '@/utils/http.js'
export default {
    data() {

        return {
            ruleForm2: {
                pass: '',
                name: ""
            },
            rules2: {

                pass: [
                    {
                        required: true,
                        message: "请输入密码"
                    }
                ],

                name: [
                    {
                        required: true,
                        message: "请输入账号",

                    },
                    {
                        type:"email",
                        message:"您输入的格式不正确"
                    }
                ]
            }
        };
    },
    methods: {
        //点击提交的时候对整个表单进行验证
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //提交登录  在action中连接登录的接口 返回的数组commit 存放在state
                    this.$store.dispatch('saveToken',{
                        name:this.ruleForm2.name,
                        pass:this.ruleForm2.pass,
                        router:this.$router
                    })                
                    
                   this.$notify({
                       title:"登陆成功，即将跳转",
                       type:"success"
                   })
                } else {
                    //失败
                    this.$notify({
                       title:"错误",
                       message:"请填写正确的用户名和密码",
                       type:"success"
                    })
                    return false;
                }
            });
        }
    }

}
</script>
<style>
.login-page {
    width: 100%;
    height: 100%;
    background: url('../../../static/img/timg.jpg') 100% 100%;
}

.login-box {
    background: #fff;
}
</style>
