<template>
    <div>
        <p>基础用法</p>
        <van-steps :active="active" @click-step="clickStep">
            <van-step>买家下单</van-step>
            <van-step>商家接单</van-step>
            <van-step>买家提货</van-step>
            <van-step>交易完成</van-step>
        </van-steps>
        <van-button class="my-button" @click="click">下一步</van-button>

        <p>自定义样式</p>
        <van-steps :active="active" active-color="#38f" active-icon="success" inactive-icon="arrow" @click-step="clickStep">
            <van-step>买家下单</van-step>
            <van-step>商家接单</van-step>
            <van-step>买家提货</van-step>
            <van-step>交易完成</van-step>
        </van-steps>

        <p>竖向步骤条</p>
        <van-steps direction="vertical">
            <van-step>
                <h3>【城市】物流状态1</h3>
                <span>2016-07-12 12:40</span>
            </van-step>
            <van-step>
                <h3>【城市】物流状态</h3>
                <span>2016-07-11 10:00</span>
            </van-step>
            <van-step>
                <h3>快件已发货</h3>
                <span>2016-07-10 09:30</span>
            </van-step>
        </van-steps>

    </div>
</template>

<script>
export default {
    name: 'steps',
    data: function () {
        return {
            active: 1
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
        click: function () {
            this.active++
            if (this.active >= 4) {
                this.active = 0
            }
        },

        // 点击步骤的标题或图标时触发
        clickStep: function (index) {
            this.$notify({
                type: 'success',
                message: `index:${index}`
            })
            this.active = index
        }
    }
}
</script>

<style scoped>
p {
    padding: 0 25px;
    text-align: left;
}

.my-button {
    display: block;
    margin: 25px 0 0 25px;
}
</style>