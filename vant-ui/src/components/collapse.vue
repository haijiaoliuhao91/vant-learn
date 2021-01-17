<template>
    <div>
        <p>基础用法</p>
        <van-collapse v-model="activeNames">
            <van-collapse-item title="标题1" name="1">代码是写出来给人看的，附带能在机器上运行</van-collapse-item>
            <van-collapse-item title="标题2" name="2">代码是写出来给人看的，附带能在机器上运行</van-collapse-item>
            <van-collapse-item title="标题3" name="3">代码是写出来给人看的，附带能在机器上运行</van-collapse-item>
        </van-collapse>

        <p>手风琴</p>
        <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="标题1" name="4">代码是写出来给人看的，附带能在机器上运行</van-collapse-item>
            <van-collapse-item title="标题2" name="5">代码是写出来给人看的，附带能在机器上运行</van-collapse-item>
            <van-collapse-item title="标题3" name="6">代码是写出来给人看的，附带能在机器上运行</van-collapse-item>
        </van-collapse>

        <p>禁用状态</p>
        <van-collapse v-model="activeName1" accordion>
            <van-collapse-item title="标题1" name="7">代码是写出来给人看的，附带能在机器上运行</van-collapse-item>
            <van-collapse-item title="标题2" name="8" disabled>代码是写出来给人看的，附带能在机器上运行</van-collapse-item>
            <van-collapse-item title="标题3" name="9" disabled>代码是写出来给人看的，附带能在机器上运行</van-collapse-item>
        </van-collapse>

        <p>自定义标题内容</p>
        <van-collapse v-model="activeNames2">
            <van-collapse-item name="10">
                <template #title>
                    <div>标题1<van-icon name="question-o" color="blue" size="18" /></div>
                </template>
                代码是写出来给人看的，附带能在机器上运行
            </van-collapse-item>
            <van-collapse-item title="标题2" name="11" icon="shop-o">代码是写出来给人看的，附带能在机器上运行</van-collapse-item>
        </van-collapse>

    </div>
</template>

<script>
export default {
    name: 'collapse',
    data: function () {
        return {
            activeNames: [ '1', '3' ],
            activeName: '4',
            activeName1: '',
            activeNames2: [ '10' ]
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
