<template>
    <div>
        <van-cell-group title="基础用法">
            <van-cell value="预览图片" is-link @click="preview1" />
        </van-cell-group>

        <van-cell-group title="传入配置项">
            <van-cell value="指定初始位置" is-link @click="preview2" />
            <van-cell value="展示关闭按钮" is-link @click="preview3"/>
            <van-cell value="监听关闭事件" is-link @click="preview4" />
        </van-cell-group>

        <van-cell-group title="异步关闭">
            <van-cell value="异步关闭" is-link @click="preview5" />
        </van-cell-group>

        <van-cell-group title="组件调用">
            <van-cell title="组件调用" is-link @click="show = true" />
        </van-cell-group>
        <van-image-preview
            v-model="show"
            :images="images"
            :closeable="true"
            close-icon-position="bottom-right"
            @change="change"
        >
            <template #index>第{{ current }}页</template>
        </van-image-preview>
    </div>
</template>

<script>

import { ImagePreview } from 'vant'

export default {
    name: 'imagepreview',
    data: function () {
        return {
            show: false,
            current: 1,
            images: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg',
                'https://img.yzcdn.cn/vant/apple-3.jpg',
                'https://img.yzcdn.cn/vant/apple-4.jpg'
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
        preview1: function () {
            ImagePreview([ 
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg',
                'https://img.yzcdn.cn/vant/apple-3.jpg',
                'https://img.yzcdn.cn/vant/apple-4.jpg'
             ])
        },

        preview2: function () {
            ImagePreview({
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-3.jpg',
                    'https://img.yzcdn.cn/vant/apple-4.jpg'
                ],
                startPosition: 2,
                swipeDuration: 300,
                showIndex: true,
                loop: false,
                showIndicators: true
            })
        },

        preview3: function () {
            ImagePreview({
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-3.jpg',
                    'https://img.yzcdn.cn/vant/apple-4.jpg'
                ],
                // 是否展示关闭按钮
                closeable: true,
                // 关闭图标名称或图片链接
                closeIcon: 'clear',
                // 关闭图标位置
                closeIconPosition: 'bottom-right',
            })
        },

        preview4: function () {
            ImagePreview({
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-3.jpg',
                    'https://img.yzcdn.cn/vant/apple-4.jpg'
                ],
                onClose: function () {
                    this.$notify({
                        type: 'success',
                        message: '点击了关闭'
                    })
                }
            })
        },

        preview5: function () {
            const instance = ImagePreview({
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-3.jpg',
                    'https://img.yzcdn.cn/vant/apple-4.jpg'
                ],
                asyncClose: true
            })

            setTimeout(() => {
                instance.close()
            }, 5000)
        },

        // 切换当前图片时触发
        change: function (index) {
            this.current = index + 1
        }
    }
}
</script>

<style scoped>

</style>