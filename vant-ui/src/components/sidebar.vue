<template>
    <div>
        <p>基础用法</p>
        <van-sidebar v-model="activeKey1" @change="onChange">
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
        </van-sidebar>

        <p>禁用选项</p>
        <van-sidebar v-model="activeKey2" @change="onChange">
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" disabled />
            <van-sidebar-item title="标签名称" />
        </van-sidebar>

        <p>徽标提示</p>
        <van-sidebar v-model="activeKey3" @change="onChange">
            <van-sidebar-item title="标签名称" dot />
            <van-sidebar-item title="标签名称" badge="5" />
            <van-sidebar-item title="标签名称" badge="99+" />
        </van-sidebar>

        <p>监听切换事件</p>
        <van-sidebar v-model="activeKey4" @change="onChange">
            <van-sidebar-item title="标签名1" />
            <van-sidebar-item title="标签名2" />
            <van-sidebar-item title="标签名3" />
        </van-sidebar>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    data: function () {
        return {
            activeKey1: 0,
            activeKey2: 1,
            activeKey3: 0,
            activeKey4: 0
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
        console.log('moounted')
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

    methods: {
        // 切换导航项时触发
        onChange: function (index) {
            this.$notify({
                type: 'primary',
                message: `你切换到了 标签名${index}`
            })
        }
    }
}
</script>

<style scoped>
p {
    padding: 0 25px;
    text-align: left;
    font-size: 13px;
    font-weight: bold;
}
</style>
