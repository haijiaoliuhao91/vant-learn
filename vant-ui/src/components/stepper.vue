<template>
    <div>
        <div class="wrapper">
            <span>基础用法</span>
            <van-stepper v-model="value1" @plus="plus" @minus="minus" @change="change" />
        </div>

        <div class="wrapper">
            <span>步长设置</span>
            <van-stepper v-model="value2" step="2" @plus="plus" @minus="minus" @change="change" />
        </div>

        <div class="wrapper">
            <span>限制输入范围</span>
            <van-stepper v-model="value3" min="1" max="10" @plus="plus" @minus="minus" @change="change" />
        </div>

        <div class="wrapper">
            <span>限制输入整数</span>
            <van-stepper v-model="value4" integer @plus="plus" @minus="minus" @change="change" />
        </div>

        <div class="wrapper">
            <span>禁用状态</span>
            <van-stepper v-model="value4" disabled />
        </div>

        <div class="wrapper">
            <span>禁用输入框</span>
            <van-stepper v-model="value5" disable-input @plus="plus" @minus="minus" @change="change" />
        </div>

        <div class="wrapper">
            <span>固定小数点位数</span>
            <van-stepper v-model="value6"  decimal-length="1" step="0.2" @plus="plus" @minus="minus" @change="change" />
        </div>

        <div class="wrapper">
            <span>自定义大小</span>
            <van-stepper v-model="value7" input-width="40px" button-size="32px" @plus="plus" @minus="minus" @change="change" />
        </div>

        <div class="wrapper">
            <span>异步变更</span>
            <van-stepper :value="value8" async-change @plus="plus" @minus="minus" @change="asyncChange" />
        </div>

        <div class="wrapper">
            <span>圆角风格</span>
            <van-stepper v-model="value9" theme="round" @plus="plus" @minus="minus" @change="change" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'stepper',
    data: function () {
        return {
            value1: 1,
            value2: 1,
            value3: 1,
            value4: 2,
            value5: 2,
            value6: 3,
            value7: 2,
            value8: 3,
            value9: 2
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
        console.log('beforeUpdate')
    },

    activated: function () {
        console.log('activated')
    },

    deactivated: function () {
        console.log('deactivated')
    },

    beforeDestroy: function () {
        console.log('destroy')
    },

    destroyed: function () {
        console.log('destroyed')
    },

    errorCaptured: function () {
        console.log('errorCaptured')
    },

    methods: {
        // 点击增加按钮时触发
        plus: function () {
            this.$notify({
                type: 'success',
                message: '点击增加按钮'
            })
        },

        // 点击减少按钮时触发
        minus: function () {
            this.$notify({
                type: 'warning',
                message: '点击减少按钮'
            })
        },

        // 当绑定值变化时触发的事件
        change: function (value, deatil) {
            console.log(value)
            console.log(deatil)
        },

        // 异步变更
        asyncChange: function (value) {
            const toast = this.$toast({
                type: 'loading',
                forbidClick: true,
                duration: 0
            })

            console.log('123')

            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                toast.clear()
                this.value8 = value
            }, 3000)
        }
    }
}
</script>

<style scoped>
.wrapper {
    margin: 30px;
    display: flex;
    justify-content: space-between;
}
</style>