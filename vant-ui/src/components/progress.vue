<template>
    <div>
        <p>基础用法</p>
        <van-progress :percentage="50" />
        <p>线条粗细</p>
        <van-progress :percentage="50" stroke-width="10" />
        <p>置灰</p>
        <van-progress :percentage="50" inactive />
        <p>样式定制</p>
        <van-progress :percentage="30" pivot-text="橙色" color="#f2826a" />
        <br />
        <van-progress :percentage="50" pivot-text="红色" color="#ee0a24" />
        <br />
        <van-progress :percentage="80" pivot-text="紫色" pivot-color="#7232dd" color="linear-gradient(to right, #be99ff, #7232dd)" />
    </div>
</template>

<script>
export default {
    name: 'progress1',
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