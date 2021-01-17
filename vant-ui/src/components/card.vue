<template>
    <div>
        <p>基础用法</p>
        <van-card 
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            title="商品名称"
            desc="描述信息"
            price="2.00"
            num="2"
        />

        <p>营销信息</p>
        <van-card 
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            title="商品名称"
            desc="描述信息"
            price="2.00"
            origin-price="10.00"
            num="2"
            tag="标签"
        />

        <p>自定义内容</p>
        <van-card
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            title="商品名称"
            desc="描述信息"
            price="2.00"
            num="2"
        >
            <template #tags>
                <van-tag type="danger" plain>标签</van-tag>
                <van-tag type="danger" plain style="margin-left: 5px;">标签</van-tag>
            </template>

            <template #footer>
                <van-button type="default" round text="按钮" size="mini" />
                <van-button type="default" round text="按钮" size="mini" />
            </template>
        </van-card>
    </div>
</template>

<script>
export default {
    name: 'card',
    data: function () {
        return {

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