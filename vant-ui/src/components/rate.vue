<template>
    <div>
        <p>基础用法</p>
        <van-rate v-model="value1" />

        <p>自定义图标</p>
        <van-rate v-model="value2" icon="like" void-icon="like-o" />

        <p>自定义样式</p>
        <van-rate v-model="value3" size="25" color="#ffd21e" void-icon="star" void-color="#eee" />

        <p>半星</p>
        <van-rate v-model="value4" void-icon="star" void-color="#eee" allow-half />

        <p>自定义数量</p>
        <van-rate v-model="value5" :count="8" />

        <p>禁用状态</p>
        <van-rate v-model="value6" disabled />

        <p>只读状态</p>
        <van-rate v-model="value7" readonly />

        <p>监听change事件</p>
        <van-rate v-model="value8" allow-half @change="change" />

    </div>
</template>

<script>
export default {
    name: 'rate',
    data: function () {
        return {
            value1: 3,
            value2: 0,
            value3: 1,
            value4: 3.5,
            value5: 3,
            value6: 3,
            value7: 2,
            value8: 2.5
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
        // 当前分值变化时触发的事件
        change: function (value) {
            this.$notify({
                type: 'success',
                message: '当前分值:' + value
            })
        }
    }
}
</script>

<style scoped>
p {
    padding: 0 25px;
    text-align: left;
}
</style>