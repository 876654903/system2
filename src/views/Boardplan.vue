<template>
    <div class="boardplan-page">
        <el-row class="title">
            <el-col :span="24" class="title-col">
                <b>12345</b>
                <span>单元</span>
            </el-col>
        </el-row>
        <el-row class="small-title">
            <el-col :span="24">
                <span>所有广告计划 ></span>
                <span>DD广告测试团队 ></span>
                <span>20171102-4 ></span>
                <span style="color:#000">12345</span>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" class="detial">
                <span>单元:20171102</span>
                <span>投放周期：2017/5/1-2017/5/3
                    <i class="el-icon-edit" style="color: #2873FF;"></i>
                </span>
                <span>定向:男，小学，10-16岁，北京天津上海，武汉贵州宁夏，乌鲁木齐</span>
                <span>出价方式:CPC</span>
                <span>出价:15元
                    <i class="el-icon-edit" style="color: #2873FF;"></i>
                </span>
                <span style="color: #2873FF;">全部</span>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="create-idea">
                <div>
                    <i class="el-icon-picture"></i>
                    <b>广告创意</b>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='10'>

                <div>
                    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                        <el-select v-model="select" slot="prepend" placeholder="请选择">
                            <el-option label="餐厅名" value="1"></el-option>
                            <el-option label="订单号" value="2"></el-option>
                            <el-option label="用户电话" value="3"></el-option>
                        </el-select>

                    </el-input>
                </div>
            </el-col>
            <el-col :span='6'>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="状态">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span='4' :offset="2">
                <el-button style="background:#000;color:#fff">默认按钮</el-button>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="2">
                <el-button type="primary" disabled>+新加创意</el-button>
            </el-col>
            <el-col :span="4" :offset="1">
                <el-select v-model="value2" placeholder="请选择">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4" :offset="8">
                <div class="block">
                    <el-date-picker v-model="datevalue" type="date" placeholder="请选择订单日期">
                    </el-date-picker>
                </div>
            </el-col>
            <el-col :span="3" :offset="1">
                <el-select v-model="value" placeholder="自定义列">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row style="margin-top:5px;">
            <el-table :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange" tooltip-effect="dark">

                <el-table-column type="selection" width="55"> </el-table-column>
                <el-table-column prop="switch" type="" width="55" fixed>
                    <template slot-scope="scope">
                        <el-switch v-model="switchValue2" active-color="#13ce66" inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column prop="sucai" label="创意素材" width="100"></el-table-column>
                <el-table-column prop="createId" label="创意ID" width="100"></el-table-column>
                <el-table-column prop="type" label="创意类型" width="100"> </el-table-column>
                <el-table-column prop="size" label="尺寸" width="100"> </el-table-column>
                <el-table-column prop="pageLink" label="落地页链接" width="100"> </el-table-column>
                <el-table-column prop="jiance" label="监测链接" width="100"> </el-table-column>
                <el-table-column prop="cell" label="所属单元" width="100"> </el-table-column>
                <el-table-column prop="plan" label="所属计划" width="80"> </el-table-column>
                <el-table-column prop="baoguang" label="曝光量" width="80"> </el-table-column>
                <el-table-column prop="click" label="点击量" width="80"> </el-table-column>
                <el-table-column prop="status" label="状态" width="80">
                    <template>投放中</template>
                </el-table-column>
                <el-table-column fixed="right" label="" width="120">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">
                            <i class="el-icon-edit"></i>
                            <i class="el-icon-delete" style="margin-left:20px"></i>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            options: [{
                value: '选项1',
                label: '创意ID'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value4: '',
            form: {
                name: ''
            },
            options2: [{
                value: '选项1',
                label: '批量修改'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value2: '',
            datevalue: '',
            options3: [{
                value: '选项1',
                label: '批量修改'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value3: '',
            tableData: [{
                createId: "1232",
                type: "图文(单)",
                size: "230*250",
                pageLink: "sdfdsfdsfsdfsdfs",
                jiance: "sdfdsfdsfsdfsdfs",
                cell: "12345",
                plan: "DD-广告测试团队",
                baoguang: "2000",
                click: "1000"
            }, {
                createId: "1232",
                type: "图文(单)",
                size: "230*250",
                pageLink: "sdfdsfdsfsdfsdfs",
                jiance: "sdfdsfdsfsdfsdfs",
                cell: "12345",
                plan: "DD-广告测试团队",
                baoguang: "2000",
                click: "1000"
            }],
            multipleSelection: [{

            }],
            switchValue1:true,
            switchValue2:true
        }

    },
    methods: {
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }

}
</script>
<style scoped lang="less">
.boardplan-page {
    padding-left: 24px;
    box-sizing: border-box;
}

.title {
    .title-col {
        display: flex;
        align-items: center;
    }
    b {
        display: inline-block;
        width: 71px;
        height: 31px;
        line-height: 31px;
        font-family: MicrosoftYaHei;
        font-size: 24px;
        color: rgba(0, 0, 0, 0.85);
        letter-spacing: 0;
    }
    span {
        margin-left: 8px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        text-align: center;
        color: #FFFFFF;
        background: blue;
        display: inline-block;
        width: 35px;
        height: 20px;
        line-height: 20px;
        border-radius: 10px;
    }
}

.small-title {
    margin-top: 16px;
    margin-bottom: 16px;

    span {
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.25);
        letter-spacing: -0.09px;
        line-height: 19px;
    }
}

.detial {
    height: 48px;
    line-height: 48px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    span {
        font-family: MicrosoftYaHei-Bold;
        font-size: 12px;
        color: #000000;
        letter-spacing: -0.08px;
        line-height: 16px;
        margin-right: 60px;
        &:nth-child(3) {
            display: inline-block;
            width: 329px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &:last-child {
            marign-right: 0;
        }
    }
}

.create-idea {
    >div {
        width: 100px;
        margin-top: 32px;
        margin-bottom: 10px;
        height: 21px;
        border-bottom: 1px solid #2873FF;
        font-size: 16px;
        i {
            margin-right: 6px;
            color: #2873FF;
        }
    }
}
</style>
