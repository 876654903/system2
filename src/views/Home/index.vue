<template>
    <div class="home-page">
        <el-row :gutter="12" style="margin-bottom:12px">
            <el-col :span="8">
                <el-card shadow="always"> HAHA  </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="always"> XIXIX </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="24" style="margin-bottom:12px;">
            <el-col :span="8" style="height:40px;line-height:40px">整体情况 </el-col>

            <el-col :span="13">
                <el-row :gutter="24">
                    <el-col :span="12">
                        <el-tabs v-model="activeName">
                            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                        </el-tabs>
                    </el-col>
                    <el-col :span="12">
                        <el-row :span="24">
                            <el-col :span="12">
                                <div class="block">

                                    <el-date-picker v-model="value" type="month" placeholder="选择月">
                                    </el-date-picker>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="block">

                                    <el-date-picker v-model="value2" type="month" placeholder="选择月">
                                    </el-date-picker>
                                </div>
                            </el-col>
                        </el-row>

                    </el-col>
                </el-row>
            </el-col>
        </el-row>

        <el-row :gutter="24">
            <el-col :span="5">
                <el-card shadow="never" @click.native="changeEchart">从不显示 </el-card>
            </el-col>
            <el-col :span="5">
                <el-card shadow="never">从不显示 </el-card>
            </el-col>
            <el-col :span="5">
                <el-card shadow="never" >从不显示 </el-card>
            </el-col>
            <el-col :span="5">
                <el-card shadow="never">从不显示 </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <div id="main" style="width: 100%;height:300px;background:#fff"></div>
        </el-row>
    </div>
</template>
<script>
import echarts from 'echarts'


export default {
    name: "addBoard",
    data() {
        return {
            option: {
                xAxis: {
                    type: 'category',
                    data:[1,2,3,4,5,6]
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            },
            value: '',
            value2: '',
            myChart:null
        }
    },
    methods: {
        //格式化日期
        formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),

                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;

            return [year, month].join('/');
        },
        //将选择的日期形成一个数组
         getDateArea(start, end) {
            let startYear = start.split('/')[0]
            let startMounth = start.split('/')[1]
            let endYear = end.split('/')[0]
            let endMounth = end.split('/')[1]
            let arr = []
            function double(i) {
                return i < 10 ? '0' + i : i
            }
            while (startYear <= endYear) {
                if (startYear == endYear) {
                    for (let i = 1; i <= endMounth; i++) {
                        arr.push(`${startYear}/${double(i)}`)
                    }
                } else if (startYear <= endYear) {
                    for (let i = startMounth; i <= 12; i++) {
                        arr.push(`${startYear}/${double(i)}`)
                    }
                }
                startYear = Number(startYear) + 1
            }
            return arr
        },

        //点击修改
        changeEchart(){
            const This=this
              this.$http.post('/dsp-report/index').then((res)=>{
                  console.log(res.data.dataY1)
                  //纵轴的数据
                  This.option={
                        xAxis: {
                            type: 'category',
                            data:This.getDateArea(This.value, This.value2)
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data:res.data.dataY1,
                            type: 'line'
                        }]
                    }
                    This.myChart.setOption(This.option);
              })
       
           
        }
    },
    mounted() {
        this.myChart = echarts.init(document.getElementById('main'));
        this.myChart.setOption(this.option);
        const This=this
        window.onresize=()=>{
            This.myChart.resize()
        }
    
    },
    
    watch: {
        //第一个日期
        value(n, o) {
            this.value = this.formatDate(n)
           
        },
         //第二个日期
        value2(n, o) {
            this.value2 = this.formatDate(n)
           
        }
    }
}
</script>
<style scoped lang="less">
.bg-purple {
    background: #fff;
    padding: 23px;
    box-shadow: 0px 0px 25px #cac6c6;
}
</style>
