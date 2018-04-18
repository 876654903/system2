<template>
    <div class="boardidea-page">
        <div class="title">广告创意</div>
        <div class="small-title">落地页</div>
        <div class="address">
            <span>着陆页地址：</span>
            <input type="text" placeholder="请设置广告名称">
            <span>预览</span>
        </div>
        <div class="small-title sendidea">上传创意</div>

        <div class="dialog">
            <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="+添加创意" name="first"> </el-tab-pane>                        
                        </el-tabs> -->
            <el-button type="text" @click="dialogVisible = true">+添加创意</el-button>
            <el-dialog title="选择模板" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
                <!-- <span>这是一段信息</span>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                        </span> -->

                <el-row :gutter="20" display="flex" >
                    <el-col :span="10" class="sigle  common" @click.native="dialogVisible = false">
                        <div class="sigle-top" style="display:flex;">
                            <div class="left boxbg"></div>
                            <div class="right ">
                                <div class="right-top boxbg"></div>
                                <div class="right-bottom boxbg"></div>
                            </div>
                        </div>
                        <div class="common-name">单图</div>
                    </el-col>
                    <el-col :span="10" class="more common" @click.native="dialogVisible = false">
                        <div class="more-top boxbg"> </div>
                        <div class="more-bottom" style="display:flex;justify-content:space-between">
                            <div class="boxbg"></div>
                            <div class="boxbg"></div>
                            <div class="boxbg"></div>
                        </div>

                        <div class="common-name">多图</div>
                    </el-col>
                </el-row>

            </el-dialog>
        </div>

        <div class="addImg">
            <el-upload class="avatar-uploader" action="http://localhost:9999/dsp-creative/creative/upload" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName: 'second',
            imageUrl: '',
            dialogVisible: false

        }
    },

    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = 'http://localhost:9999/' + res.data.value;
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        }
    }
}
</script>
<style lang="less" scoped>
.title {
    width: 206px;
    height: 45px;
    font-family: MicrosoftYaHei;
    font-size: 34px;
    color: rgba(0, 0, 0, 0.85);
    letter-spacing: 0;
    margin-top: 48px;
    margin-left: 24px;
}

.small-title {
    height: 26px;
    margin-top: 32px;
    margin-left: 24px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.85);
    letter-spacing: 0;
    font-weight: bold;
}

.address {
    margin-top: 16px;
    margin-left: 24px;
    input {
        width: 432px;
        height: 32px;
        margin-left: 8px;
        padding-left: 10px;
        box-sizing: border-box;
    }
    >&:nth-child(1) {
        margin-left: 6px;
    }
    >&:nth-child(3) {
        margin-left: 6px;
    }
}

.sendidea {
    margin-top: 61px;
}


.button {
    padding-left: 24px;
}


.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border: 1px solid #ccc;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    margin-top: 24px;
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px solid #ccc;
}

.avatar {
    width: 178px;
    height: 178px;
    border: 1px solid #ccc;
    display: block;
}

.addImg {
    margin-left: 24px;
}

.dialog {

    .common {
        background: #FFFFFF;
        border: 1px solid #E8E8E8;
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.05);
        width: 180px;
        height: 147px;
        margin-bottom: 59px;
        padding: 14.9px 10.9px 23.6px 10.9px;
    }

    .sigle {
       
       
        .left {
            width: 60px;
            height: 60px;
        }
        .right {
            margin-left: 10.9px;
            .right-top,
            .right-bottom {
                width: 87.3px;
                height: 16.7px;
            }
            .right-bottom {
                margin-top: 5.9px;
            }
        }
    }
    .more {
       
         float: right;
        .more-top {
            width: 157.1px;
            height: 16.7px;
        }
        .more-bottom {
            margin-top: 3.8px;
            div {
                width: 50.6px;
                height: 46.5px;
            }
        }
    }

    .common-name {
        width: 32.7px;
        height: 16px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.65);
        letter-spacing: 0;
        margin-left: 73.6px;
        margin-top: 33px;
    }

     .boxbg{
        background: #E8E8E8;
    }
}
</style>


