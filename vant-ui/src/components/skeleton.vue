<template>
    <div>
        <p>基础用法</p>
        <van-skeleton title :row="3" />

        <p>显示头像</p>
        <van-skeleton title avatar :row="3" round />

        <p>显示子组件</p>
        <van-switch v-model="checked" />
        <van-skeleton title avatar :row="3" :loading="!checked">
            <div>实际内容</div>
        </van-skeleton>
    </div>
</template>

<script>
export default {
    name: 'skeleton',
    data: function () {
        return {
            checked: true
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
    color: rgb(153, 153, 153);
    padding: 0 25px;
    text-align: left;
}
</style>