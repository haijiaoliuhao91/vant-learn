<template>
    <div>
        <van-cell-group title="基础用法">
            <van-cell value="提示弹窗" is-link @click="dialog1" />
            <van-cell value="提示弹窗(无标题)" is-link @click="dialog2" />
            <van-cell value="确认弹窗" is-link @click="dialog3" />
        </van-cell-group>

        <van-cell-group title="圆角按钮样式">
            <van-cell value="提示弹窗" is-link @click="dialog4" />
            <van-cell value="提示弹窗(无标题)" is-link @click="dialog5" />
        </van-cell-group>

        <van-cell-group title="异步关闭">
            <van-cell value="异步关闭" is-link @click="dialog6" />
        </van-cell-group>

        <van-cell-group title="组件调用">
            <van-cell value="组件调用" is-link @click="show = true" />
        </van-cell-group>

        <van-dialog v-model="show" title="标题" show-cancel-button @cancel="cancel" @confirm="confirm">
            <img src="https://img.yzcdn.cn/vant/apple-3.jpg" width="90%" height="auto"  />
        </van-dialog>

    </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
    name: 'dialog1',
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
        dialog1: function () {
            Dialog.alert({ 
                title:'标题',
                message: '代码是写出来给人看的，附带能在机器上运行'
            }).then(() => { 
                this.$notify('关闭')
            })
        },

        dialog2: function () {
            Dialog.alert({
                message: '代码是写出来给人看的，附带能在机器上运行'
            }).then(() => {
                this.$notify({
                    type: 'warning',
                    message: '关闭'
                })
            })
        },

        dialog3: function () {
            Dialog.confirm({
                title: '标题',
                message: '代码是写出来给人看的，附带能在机器上运行'
            }).then(() => {
                this.$notify({
                    type: 'success',
                    message: '确认'
                })
            }).catch(() => {
                this.$notify({
                    type: 'warning',
                    message: '关闭'
                })
            })
        },

        dialog4: function () {
            Dialog.alert({
                title: '标题',
                message: '代码是写出来给人看的，附带能在机器上运行',
                theme: 'round-button'
            }).then(() => {
                this.$notify({
                    type: 'success',
                    message: '确认'
                })
            })
        },

        dialog5: function () {
            Dialog.alert({
                message: '代码是写出来给人看的，附带能在机器上运行',
                theme: 'round-button'
            }).then(() => {
                this.$notify({
                    type: 'danger',
                    message: '确认'
                })
            })
        },

        dialog6: function () {
            Dialog.confirm({
                title: '标题',
                message: '代码是写出来给人看的，附带能在机器上运行',
                beforeClose: function (action, done) {
                    if (action === 'confirm') {
                        setTimeout(done, 3000)
                    } else {
                        done()
                    }
                }
            }).then(() => {
                this.$notify({
                    type: 'success',
                    message: '确认'
                })
            }).catch(() => {
                this.$notify({
                    type: 'danger',
                    message: '关闭'
                })
            })
        },

        // 点击确认按钮时触发
        confirm: function () {
            this.$notify({
                type: 'success',
                message: '确认'
            })
        },
        
        // 点击取消按钮时触发
        cancel: function () {
            this.$notify({
                type: 'warning',
                message: '取消'
            })
        }
    }
}
</script>

<style scoped>

</style>