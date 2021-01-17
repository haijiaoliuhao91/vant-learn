<template>
    <div>
        <p>基础用法</p>
        <van-switch v-model="checked1" />

        <p>禁用状态</p>
        <van-switch v-model="checked2" disabled />

        <p>加载状态</p>
        <van-switch v-model="checked3" :loading="loading" />

        <p>自定义大小</p>
        <van-switch v-model="checked4" size="24px" />

        <p>自定义颜色</p>
        <van-switch v-model="checked5" active-color="red" inactive-color="gray" />

        <p>异步控制</p>
        <van-switch :value="checked6" @input="onInput" />

        <p>搭配单元格使用</p>
        <van-cell value="标题">
            <template #right-icon>
                <van-switch v-model="checked7" size="24px" />
            </template>
        </van-cell>
    </div>
</template>

<script>
export default {
    name: 'switch1',
    data: function () {
        return {
            checked1: false,
            checked2: true,
            checked3: true,
            loading: true,
            checked4: false,
            checked5: false,
            checked6: false,
            checked7: false
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
        console.log('deactivate')
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
        onInput: function (checked) {
            this.$dialog({
                type: 'alert',
                title: '标题',
                message: '是否切换开关?',
                cancelButtonText: '取消吖',
                confirmButtonText: '确定吖',
                showCancelButton: true
            }).then(() => {
                this.checked6 = checked
            }).catch(() => {
                this.$notify({
                    type: 'success',
                    message: '点击了取消按钮'
                })
            })
        }
    }
}
</script>

<style scoped>

</style>