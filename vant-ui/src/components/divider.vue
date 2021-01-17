<template>
    <div>
        <p>基础用法</p>
        <van-divider />
        <p>展示文本</p>
        <van-divider>文本</van-divider>
        <p>内容位置</p>
        <van-divider content-position="left">文本</van-divider>
        <van-divider content-position="right">文本</van-divider>
        <p>虚线</p>
        <van-divider dashed>文本</van-divider>
        <p>自定义样式</p>
        <van-divider :style="{color: '#1989fa', borderColor: '#1989fa', padding: '0 16px'}">文本</van-divider>
    </div>
</template>

<script>
export default {
    name: 'divider',
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
</style>