<template>
    <div>
        <p>基础用法</p>
        <van-nav-bar 
            title="标题"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />

        <p>使用插槽</p>
        <van-nav-bar 
            title="标题"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        >
            <template #right>
                <van-icon name="search" size="20" />
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    data: function () {
        return {
            tip: 'NavBar'
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

    },

    methods: {
        // 点击左侧按钮时触发
        onClickLeft: function () {
            this.$notify('点击左侧按钮时触发')
        },

        // 点击右侧按钮时触发
        onClickRight: function () {
            this.$notify({
                type: 'success',
                message: '点击右侧按钮时触发'
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