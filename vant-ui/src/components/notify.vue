<template>
    <div>
        <p>Notify</p>
        <van-cell-group title="基础用法">
            <van-cell value="基础用法" is-link @click="notify1" />
        </van-cell-group>

        <van-cell-group title="通知类型">
            <van-cell value="主要通知" is-link @click="notify2" />
            <van-cell value="成功通知" is-link @click="notify3" />
            <van-cell value="危险通知" is-link @click="notify4" />
            <van-cell value="警告通知" is-link @click="notify5" />
        </van-cell-group>

        <van-cell-group title="自定义配置">
            <van-cell value="自定义颜色" is-link @click="notify6" />
            <van-cell value="自定义时长" is-link @click="notify7" />
        </van-cell-group>

        <van-cell-group title="组件调用">
            <van-cell value="组件调用" is-link @click="showNotify" />
        </van-cell-group>

        <van-notify v-model="show" type="success">
            <van-icon name="bell" style="margin-right: 4px;" />
            <span>组件调用</span>
        </van-notify>
    </div>
</template>

<script>
import { Notify } from 'vant'
export default {
    name: 'notify',
    data: function () {
        return {
            show: false
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
        notify1: function () {
            Notify('通知内容')
        },

        notify2: function () {
            Notify({
                type: 'primary',
                message: '主要通知'
            })
        },

        notify3: function () {
            Notify({
                type: 'success',
                message: '成功通知'
            })
        },

        notify4: function () {
            Notify({
                type: 'danger',
                message: '危险通知'
            })
        },

        notify5: function () {
            Notify({
                type: 'warning',
                message: '警告通知'
            })
        },

        notify6: function () {
            Notify({
                message: '自定义颜色',
                background: '#ffe1e1',
                color: '#ad0000'
            })
        },

        notify7: function () {
            Notify({
                type: 'danger',
                message: '自定义时长',
                duration: 1000
            })
        },

        showNotify: function () {
            this.show = true
            setTimeout(() => {
                this.show = false
            }, 1000)
        }
    }
}
</script>

<style scoped>

</style>