<template>
    <div>
        <p>加载类型</p>
        <van-loading />
        <br />
        <van-loading type="spinner" />

        <p>自定义颜色</p>
        <van-loading color="#1989fa" />
        <br />
        <van-loading type="spinner" color="#1989fa" />

        <p>自定义大小</p>
        <van-loading size="24" />
        <br />
        <van-loading type="spinner" size="24px" />

        <p>加载文案</p>
        <van-loading size="24px">加载中...</van-loading>

        <p>垂直排列</p>
        <van-loading size="24px" color="#fe4b28" vertical>加载中...</van-loading>
    </div>
</template>

<script>
export default {
    name: 'loading',
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

</style>