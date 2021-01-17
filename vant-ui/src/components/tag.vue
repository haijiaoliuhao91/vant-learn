<template>
<div>
    <p>{{ tip }}</p>
    <van-cell-group title="基础用法">
        <van-cell title="primary类型" is-link><van-tag type="primary">标签</van-tag></van-cell>
        <van-cell title="success类型" is-link><van-tag type="success">标签</van-tag></van-cell>
        <van-cell title="danger类型" is-link><van-tag type="danger">标签</van-tag></van-cell>
        <van-cell title="warning类型" is-link><van-tag type="warning">标签</van-tag></van-cell>
    </van-cell-group>

    <van-cell-group title="样式风格">
        <van-cell title="空心样式" is-link><van-tag type="primary" plain>标签</van-tag></van-cell>
        <van-cell title="圆角样式" is-link><van-tag type="primary" round>标签</van-tag></van-cell>
        <van-cell title="标记样式" is-link><van-tag type="primary" mark>标签</van-tag></van-cell>
        <van-cell title="可关闭标签" is-link v-if="show"><van-tag type="primary" closeable @close="close">标签</van-tag></van-cell>
    </van-cell-group>

    <van-cell-group title="标签大小">
        <van-cell title="小号标签" is-link><van-tag type="primary" size="small">标签</van-tag></van-cell>
        <van-cell title="中号标签" is-link><van-tag type="primary" size="medium">标签</van-tag></van-cell>
        <van-cell title="大号标签" is-link><van-tag type="primary" size="large">标签</van-tag></van-cell>
    </van-cell-group>

    <van-cell-group title="自定义颜色">
        <van-cell title="背景颜色" is-link><van-tag color="#7232dd">标签</van-tag></van-cell>
        <van-cell title="文字颜色" is-link><van-tag color="#ffe1e1" text-color="#ad0000">标签</van-tag></van-cell>
        <van-cell title="空心标签" is-link><van-tag color="#7232dd" plain>标签</van-tag></van-cell>
    </van-cell-group>
</div>
</template>

<script>
export default {
    name: 'tag',
    data: function () {
        return {
            tip: 'Tag',
            show: true
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
        // 关闭标签时触发
        close: function () {
            this.$notify({
                type: 'success',
                message: '关闭标签'
            })
            this.show = false
        }
    }
}
</script>

<style scoped>
p {
    color: red;
    font-size: 18px;
    font-weight: bold;
    padding: 0 25px;
}
</style>