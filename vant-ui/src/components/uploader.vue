<template>
    <div>
        <div>
            <p>基础用法</p>
            <van-uploader :after-read="afterRead" />
        </div>

        <div>
            <p>文件预览</p>
            <van-uploader  v-model="fileList1" multiple />
        </div>

        <div>
            <p>上传状态</p>
            <van-uploader v-model="fileList2" multiple :after-read="afterRead1" />
        </div>

        <div>
            <p>限制上传数量</p>
            <van-uploader v-model="fileList3" multiple :max-count="3" />
        </div>

        <div>
            <p>限制上传大小</p>
            <van-uploader v-model="fileList4" multiple :max-size="20 * 1024" @oversize="oversize" />
        </div>

        <div>
            <p>自定义上传样式</p>
            <van-uploader v-model="fileList5" multiple>
                <template>
                    <van-button type="primary" icon="plus" text="上传文件" />
                </template>
            </van-uploader>
        </div>

        <div>
            <p>自定义预览样式</p>
            <van-uploader v-model="fileList6" multiple>
                <template #preview-cover="{ file }">
                    <div class="preview-cover">{{ file.name }}</div>
                </template>
            </van-uploader>
        </div>

        <div>
            <p>上传前置处理</p>
            <van-uploader v-model="fileList7" multiple :before-read="beforeRead" />
        </div>

        <div>
            <p>文件上传前的处理</p>
            <van-uploader v-model="fileList8" :before-read="beforeRead1" />
        </div>

        <div>
            <p>禁用文件上传</p>
            <van-uploader v-model="fileList9" disabled />
        </div>

        <div>
            <p>自定义单个图片预览</p>
            <van-uploader v-model="fileList10" :deletable="false" />
        </div>
    </div>
</template>

<script>
import { Dialog, Notify } from 'vant'
export default {
    name: 'uploader',
    data: function () {
        return {
            fileList1: [
                {
                    url: 'https://img.yzcdn.cn/vant/leaf.jpg'
                },
                {
                    url: 'https://img.yzcdn.cn/vant/tree.jpg'
                }
            ],

            fileList2: [
                {
                    url: 'https://img.yzcdn.cn/vant/leaf.jpg',
                    status: 'uploading',
                    message: '上传中吖...'
                },
                {
                    url: 'https://img.yzcdn.cn/vant/tree.jpg',
                    status: 'failed',
                    message: '上传失败'
                },
                {
                    url: 'https://img.yzcdn.cn/vant/leaf.jpg'
                }
            ],

            fileList3: [],
            fileList4: [],
            fileList5: [],
            fileList6: [],
            fileList7: [],
            fileList8: [],
            fileList9: [],
            fileList10: [
                {
                    url: 'https://img.yzcdn.cn/vant/leaf.jpg'
                },
                {
                    url: 'https://img.yzcdn.cn/vant/sand.jpg',
                    deletable: true,
                    beforeDelete: function () {
                        Notify({
                            type: 'success',
                            message: '自定义单个预览图片的事件和样式'
                        })

                        return new Promise((resolve, reject) => {
                            Dialog.confirm({
                                title: '1'
                            }).then(() => {
                                resolve(true)
                            }).catch(() => {
                                reject(true)
                            })
                        })
                    }
                },
                {
                    url: 'https://img.yzcdn.cn/vant/tree.jpg',
                    deletable: true,
                    imageFit: 'fill'
                }
            ]
        }
    },

    // 生命周期钩子
    beforeCreate: function () {
        console.log('beforeCreate')
    },

    created: function () {
        console.log('created')
    },

    beforeMount: function () {
        console.log('beforeMount')
    },

    mounted: function () {
        console.log('mounted')
    },

    beforeUpdate: function () {
        console.log('beforeUpdate')
    },

    updated: function () {
        console.log('updated')
    },

    activated: function () {
        console.log('activated')
    },

    deactivated: function () {
        console.log('deactivated')
    },

    beforeDestroy: function () {
        console.log('beforeDestroy')
    },

    destroyed: function () {
        console.log('destroyed')
    },

    errorCaptured: function () {
        console.log('errorCaptured')
    },

    methods: {
        //  文件读取完成后的回调函数
        afterRead: function (file) {
            console.log(file)
        },

        afterRead1: function (file) {
            file.status = 'uploading'
            file.message = '上传中'

            setTimeout(() => {
                file.status = 'failed'
                file.message = '上传失败'
            }, 3000)
        },

        // 文件大小超过限制时触发
        oversize: function (file) {
            this.$notify({
                type: 'warning',
                message: '文件大小超过限制:' + JSON.stringify(file)
            })
            console.log(file)
        },

        // 文件上传前的回调函数
        beforeRead: function (file) {
            console.log(file)
            if (file.type != 'image/jpeg') {
                this.$notify({
                    type: 'danger',
                    message: '请上传 jpg 格式的图片!'
                })
                return false
            }
            return true
        },

        beforeRead1: function (file) {
            console.log(file)
            return new Promise((resolve, reject) => {
                if (file.type != 'image/jpeg') {
                    this.$notify({
                        type: 'danger',
                        message: '请上传 jpg 格式的图片！'
                    })
                    reject()
                } else {
                    resolve('')
                }
            })
        }
    }
}
</script>

<style scoped>
p {
    font-size: 14px;
    color: rgb(153, 153, 153);
}

.preview-cover {
    background-color: green;
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 4px;
    box-sizing: border-box;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
}
</style>