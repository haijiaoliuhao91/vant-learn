<template>
    <div>
        <p>基础用法</p>
        <div>
            <van-icon name="chat-o" />
        </div>
        <div>
            <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
        </div>
        <p>徽标提示</p>
        <div>
            <van-icon name="chat-o" dot />
        </div>
        <div>
            <van-icon name="chat-o" badge="10" size="40px" />
        </div>
        <div>
            <van-icon name="chat-o" badge="99+" size="40px" />
        </div>
        <p>图标颜色</p>
        <div>
            <van-icon name="cart-o" color="#1989fa" size="40px" />
        </div>
        <div>
            <van-icon name="fire-o" color="#ee0a24" size="40px" />
        </div>
        <p>图标大小</p>
        <div>
            <van-icon name="chat-o" size="40px" />
            <van-icon name="chat-o" size="3rem" @click="click" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'icon',
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
    }
}
</script>

<style scoped>
    div {
        margin: 10px;
    }
</style>