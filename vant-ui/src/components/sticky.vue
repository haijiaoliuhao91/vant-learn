<template>
    <div>
        <p>基础用法</p>
        <van-sticky>
            <van-button type="primary">基础用法</van-button>
        </van-sticky>

        <p>吸顶距离</p>
        <van-sticky :offset-top="50">
            <van-button type="info">吸顶距离</van-button>
        </van-sticky>

        <p>指定容器</p>
        <div ref="container" style="background-color: white;height: 150px;">
            <van-sticky :container="container">
                <van-button type="warning">指定容器</van-button>
            </van-sticky>
        </div>

        <p style="height: 900px;"></p>

    </div>
</template>

<script>
export default {
    name: 'sticky',
    data: function () {
        return {
            container: null
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
        this.container = this.$refs.container
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