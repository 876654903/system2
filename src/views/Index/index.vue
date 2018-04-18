<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee">
      <!--el-aside 侧边栏容器  -->
      <el-aside width="200px" style="background-color: #545c64">
        <el-menu :default-openeds="['3']" router default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

          <el-menu-item index="/index/addboard">
            <i class="el-icon-news"></i> 新增广告</el-menu-item>
          <el-menu-item index="/index/home">
            <i class="el-icon-news"></i> 首页概览</el-menu-item>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-news"></i> 广告管理</template>
            <el-menu-item index="/index/boardplan">广告计划</el-menu-item>
            <el-menu-item index="/index/boardmanage">广告管理</el-menu-item>
            <el-menu-item index="/index/boardidea">广告创意</el-menu-item>
            <el-menu-item index="/index/boardcell">广告单元</el-menu-item>
          </el-submenu>

          <el-menu-item index="/index/datacenter">
            <i class="el-icon-news"></i> 数据中心</el-menu-item>
          <el-menu-item index="/index/tool">
            <i class="el-icon-news"></i> 工具箱</el-menu-item>

        </el-menu>
      </el-aside>
      <!--el-container 外层容器  -->
      <el-container>
        <!--el-header 顶栏容器  -->
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-news" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <p>现金余额</p>
                <p>￥126,560.00</p>
              </el-dropdown-item>
              <el-dropdown-item>
                <p>今日消耗</p>
                <p>￥126,560.00</p>
              </el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <i class="el-icon-warning" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <p>如有问题,请邮件至</p>
                <p>876654903@qq.com</p>
              </el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>
          <span>{{userName}}</span>
        </el-header>

        <!--主要区域容器  -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
<!--  
    <el-container class="mark" >
      <el-row class="module">
        <el-col>
          <el-row class="title">选择模板</el-row>
          <el-row :gutter="20">
            <el-col :span="12" class="sigle  common">
              <div class="sigle-top" style="display:flex;">
                 <div class="left boxbg"></div>
                 <div class="right ">
                     <div class="right-top boxbg"></div>
                     <div class="right-bottom boxbg"></div>
                 </div>
              </div>
              <div  class="common-name">单图</div>
            </el-col>
            <el-col :span="12" class="more common">
                <div class="more-top boxbg"> </div>
                <div class="more-bottom" style="display:flex;justify-content:space-between"> 
                    <div class="boxbg"></div>
                    <div class="boxbg"></div>
                    <div class="boxbg"></div>              
                 </div>
             
              <div  class="common-name">多图</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row> 

    </el-container> -->
  </div>
</template>

<script>
import { mapState } from 'Vuex'
export default {
  name: 'App',
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }

  },

  computed: {
    ...mapState(['userName'])
  }



}
</script>

<style scoped lang="less">
html,
body {
  font-size: 0.32rem;
}

#app {
  width: 100%;
  height: 100%;
  font-size: 0.32rem;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-main {
  width: 100%;
  height: 100%;
  padding: 0;
}

.mark {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
}

.module {
 
  background: #FFFFFF;
  border: 1px solid #E8E8E8;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  width:439px;height: 282px;
  position: absolute;
  top:0;left:0;right:0;bottom:0;
  margin:auto;
  .boxbg{
    background: #E8E8E8;
  }
  .title{
    font-family: MicrosoftYaHei;
    font-size: 14px;
    padding-left: 12px;
    box-sizing: border-box;
    color: rgba(0,0,0,0.85);
    letter-spacing: 0;
    height: 76px;line-height: 76px;
  }

  .common{
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,0.05);
    width:180px ;height: 147px;
    margin-bottom: 59px;
    padding:14.9px 10.9px  23.6px 10.9px;
  }

  .sigle{
    margin-left:24px;
    .left{
      width: 60px;height: 60px;
    }
    .right{
      margin-left:10.9px;
      .right-top,.right-bottom{
        width:87.3px;height: 16.7px;
      }
      .right-bottom{
         margin-top:5.9px;
      }

    }
  }
  .more{
     margin-left:32px;
     .more-top{
       width:157.1px;height: 16.7px;
     }
     .more-bottom{
       margin-top:3.8px;
       div{
         width:50.6px;height: 46.5px;
       }
     }

  }

  .common-name{
    width:32.7px;height: 16px;
    font-family: MicrosoftYaHei;
    font-size: 12px;
    color: rgba(0,0,0,0.65);
    letter-spacing: 0;
    margin-left:73.6px;
   margin-top:33px;
  }

}
</style>
