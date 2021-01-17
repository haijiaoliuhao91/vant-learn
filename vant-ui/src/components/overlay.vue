<template>
    <div class="container">
        <p>基础用法</p>
        <van-button type="primary" text="显示遮罩层" class="my-van-button" @click="show1 = true" />
        <van-overlay :show="show1" @click="show1 = false" />

        <p>嵌入内容</p>

        <van-button type="primary" text="嵌入内容" class="my-van-button" @click.stop="show2 = true" />
        <van-overlay :show="show2" @click="show2 = false">
            <div class="wrapper">
                <div class="block" />
            </div>
        </van-overlay>
    </div>
</template>

<script>
export default {
    name: 'overlay',
    data: function () {
        return {
            show1: false,
            show2: false
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

.container {
    position: absolute;
}

.my-van-button {
    left: 15px;
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.block {
    width: 120px;
    height: 120px;
    border-radius: 4px;
    background-color: #fff;
}
</style>