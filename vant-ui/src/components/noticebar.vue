<template>
    <div>
        <p>基础用法</p>
        <van-notice-bar left-icon="volume-o" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准" />
        <p>滚动播放</p>
        <van-notice-bar text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准" />
        <van-notice-bar text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准" :scrollable="false" />
        <p>多行展示</p>
        <van-notice-bar text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准" :scrollable="false" wrapable style="text-align: left;" />
        <p>通知栏模式</p>
        <van-notice-bar text="技术是开发它的人的共同灵魂。" mode="closeable" />
        <van-notice-bar text="技术是开发它的人的共同灵魂。" mode="link" />
        <p>自定义样式</p>
        <van-notice-bar text="技术是开发它的人的共同灵魂。" background="#ecf9ff" color="#1989fa" left-icon="info-o" />
        <p>自定义样式</p>
        <van-notice-bar left-icon="volume-o" :scrollable="false">
            <van-swipe
                vertical
                :autoplay="3000"
                :show-indicators="false"
                class="notice-swipe"
            >
                <van-swipe-item>内容1</van-swipe-item>
                <van-swipe-item>内容2</van-swipe-item>
                <van-swipe-item>内容3</van-swipe-item>
            </van-swipe>
        </van-notice-bar>
    </div>
</template>

<script>
export default {
    name: 'noticebar',
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

    }
}
</script>

<style scoped>
p {
    padding: 0 25px;
    text-align: left;
}

.notice-swipe {
    height: 40px;
    line-height: 40px;
}
</style>