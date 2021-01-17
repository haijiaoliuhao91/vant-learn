<template>
    <div>
        <p>基础用法</p>
        <van-empty description="描述文字" />
        <p>图片类型</p>
        <van-tabs animated swipeable>
            <van-tab title="通用错误">
                <van-empty image="error" description="描述文字" />
            </van-tab>
            <van-tab title="网络错误">
                <van-empty image="network" description="网络错误" />
            </van-tab>
            <van-tab title="搜索提示">
                <van-empty image="search" description="搜索提示" />
            </van-tab>
        </van-tabs>
        <p>自定义图片</p>
        <van-empty image="https://img.yzcdn.cn/vant/custom-empty-image.png" image-size="100" />
        <p>底部内容</p>
        <van-empty description="描述文字">
            <van-button type="danger" round class="bottom-button">按钮</van-button>
        </van-empty>
    </div>
</template>

<script>
export default {
    name: 'empty',
    data: function () {
        return {

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

    errorCaptured: function () {
        console.log('errorCaptured')
    },

    methods: {

    }
}
</script>

<style scoped>
p {
    padding: 0 25px;
    text-align: left;
}

.bottom-button {
    width: 160px;
    height: 40px;
}
</style>