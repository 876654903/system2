<template>
    <div class="addBoard-page">
        <el-container style="height: 100%; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: #545c64 height: 100%;">
                <el-row >
                     <el-col :span="24">
                        <el-menu default-active="2" class="el-menu-vertical-demo" router :default-openeds="['1']">
                             <el-submenu index="1">
                                <template slot="title">
                                    建立广告计划
                                </template>
                                 <el-menu-item index="/index/addboard/chooseplan">选择计划</el-menu-item>
                               
                            </el-submenu> 
                             <el-submenu index="2">
                                <template slot="title">
                                    <span>广告单元</span>
                                </template>
                                 <el-menu-item index="/index/addboard/infomation">基本信息</el-menu-item>
                                 <el-menu-item index="/index/addboard/direction">定向</el-menu-item>
                                 <el-menu-item index="/index/addboard/paymoney">出价</el-menu-item>                              
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                    <span>广告创意</span>
                                </template>
                                 <el-menu-item index="/index/addboard/floorpage">落地页</el-menu-item>
                                 <el-menu-item index="/index/addboard/sendidea">上传创意</el-menu-item>                               
                            </el-submenu> 
                        </el-menu>
                    </el-col> 
                 </el-row>
            </el-aside>
            
            <el-main style="background-color: #545c64 height: 100%;padding:0">
               <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
<script>

export default {
    name: "addBoard",
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="less">
.addBoard-page {
    width: 100%;
    height: 100%;
}
</style>

