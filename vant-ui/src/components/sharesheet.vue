<template>
    <div>
        <van-share-sheet v-model="show1" title="立即分享给好友" :options="options1" @select="select" />
        <van-cell-group title="基础用法">
            <van-cell value="显示分享面板" is-link @click="show1 = true" />
        </van-cell-group>

        <van-share-sheet v-model="show2" :options="options2" title="立即分享给好友" @select="select" />
        <van-cell-group title="展示多行选项">
            <van-cell value="显示分享模板" is-link @click="show2 = true" />
        </van-cell-group>

        <van-share-sheet v-model="show3" :options="options3" @select="select" />
        <van-cell-group title="自定义图标">
            <van-cell value="显示分享面板" is-link @click="show3 = true" />
        </van-cell-group>

        <van-share-sheet v-model="show4" title="立即分享给好友" description="描述信息" :options="options4" @select="select" />
        <van-cell-group title="展示描述信息">
            <van-cell value="显示分享面板" is-link @click="show4 = true" />
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'sharesheet',
    data: function () {
        return {
            show1: false,
            options1: [
                {
                    name: '微信',
                    icon: 'wechat'
                },
                {
                    name: '微博',
                    icon: 'weibo'
                },
                {
                    name: '复制链接',
                    icon: 'link'
                },
                {
                    name: '分享海报',
                    icon: 'poster'
                },
                {
                    name: '二维码',
                    icon: 'qrcode'
                }
            ],
            show2: false,
            options2: [
                [
                    {
                        name: '微信',
                        icon: 'wechat'
                    },
                    {
                        name: '微博',
                        icon: 'weibo'
                    },
                    {
                        name: 'QQ',
                        icon: 'qq'
                    }
                ],
                [
                    {
                        name: '复制链接',
                        icon: 'link'
                    },
                    {
                        name: '分享海报',
                        icon: 'poster'
                    },
                    {
                        name: '二维码',
                        icon: 'qrcode'
                    },
                    {
                        name: '小程序码',
                        icon: 'weapp-qrcode'
                    }
                ]
            ],
            show3: false,
            options3: [
                {
                    name: '名称',
                    icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png'
                },
                {
                    name: '名称',
                    icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png'
                },
                {
                    name: '名称',
                    icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png'
                }
            ],
            show4: false,
            options4: [
                {
                    name: '微信',
                    icon: 'wechat'
                },
                {
                    name: '微博',
                    icon: 'weibo'
                },
                {
                    name: '复制链接',
                    description: '描述信息',
                    icon: 'link'
                },
                {
                    name: '分享海报',
                    icon: 'poster'
                },
                {
                    name: '二维码',
                    icon: 'qrcode'
                },
                {
                    name: '小程序码',
                    icon: 'weapp-qrcode'
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
        // 点击分享选项时触发
        select: function (options, index) {
            this.$notify({
                type: 'success',
                message: JSON.stringify(options) + '-' + index
            })
            this.show1 = false
            this.show2 = false
            this.show3 = false
            this.show4 = false
        }
    }
}
</script>

<style scoped>

</style>