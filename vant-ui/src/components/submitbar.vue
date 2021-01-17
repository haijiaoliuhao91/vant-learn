<template>
    <div>
        <p>基础用法</p>
        <van-submit-bar :price="3050" button-text="提交订单" @submit="submit" />

        <p>禁用状态</p>
        <van-submit-bar
            tip-icon="info"
            tip="你的收获地址不支持同城送，我们已为你推荐快递" 
            :price="3050"
            button-text="提交订单"
            disabled
        />

        <p>加载状态</p>
        <van-submit-bar
            :price="3050"
            loading  
            button-text="提交订单"
        />

        <p>高级用法</p>
        <van-submit-bar 
            :price="3050"
            button-text="提交订单"
            @submit="submit"
        >
            <van-checkbox v-model="checked">全选</van-checkbox>
            <template #tip>
                你的收货地址不支持同城送，<span style="color: blue;" @click="editAddress">修改地址</span>
            </template>
        </van-submit-bar>
    </div>
</template>

<script>
export default {
    name: 'submitbar',
    data: function () {
        return {
            checked: false
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
        // 按钮点击事件回调
        submit: function () {
            this.$notify({
                type: 'success',
                message: '点击了提交订单按钮'
            })
        },

        editAddress: function () {
            this.$notify({
                type: 'warning',
                message: '修改收获地址'
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

.van-submit-bar {
    position: relative;
}
</style>