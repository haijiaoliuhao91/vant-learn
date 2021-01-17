<template>
    <div>
        <van-nav-bar title="ActionSheet" />
        <van-action-sheet v-model="show1" :actions="actions1" close-on-click-action @select="select" />
        <van-action-sheet v-model="show2" :actions="actions2" close-on-click-action cancel-text="取消" @select="select" />
        <van-action-sheet v-model="show3" :actions="actions3" close-on-click-action cancel-text="取消" title="这是标题" description="这是一段描述信息" @select="select" />
        <van-action-sheet v-model="show4" :actions="actions4" close-on-click-action cancel-text="取消" @select="select" />
        <van-action-sheet v-model="show5" close-on-click-action cancel-text="取消" title="标题">
            <div class="content">内容</div>
        </van-action-sheet>

        <van-cell-group title="基础用法">
            <van-cell value="基础用法" is-link @click="show1 = true" />
            <van-cell value="展示取消按钮" is-link @click="show2 = true" />
            <van-cell value="展示描述信息" is-link @click="show3 = true" />
        </van-cell-group>

        <van-cell-group title="选项状态">
            <van-cell value="选项状态" is-link @click="show4 = true" />
        </van-cell-group>

        <van-cell-group title="自定义面板">
            <van-cell value="自定义面板" is-link @click="show5 = true" />
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'actionsheet',
    data: function () {
        return {
            show1: false,
            actions1: [
                {
                    name: '选项一',
                },
                {
                    name: '选项二'
                },
                {
                    name: '选项三'
                }
            ],
            show2: false,
            actions2: [
                {
                    name: '选项一'
                },
                {
                    name: '选项二'
                },
                {
                    name: '选项三'
                }
            ],
            show3: false,
            actions3: [
                {
                    name: '选项一'
                },
                {
                    name: '选项二'
                },
                {
                    name: '选项三',
                    subname: '描述信息'
                }
            ],
            show4: false,
            actions4: [
                {
                    name: '着色选项',
                    color: 'red'
                },
                {
                    name: '禁用选项',
                    disabled: true
                },
                {
                    name: '选项三',
                    loading: true
                }
            ],
            show5: false
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
        // 点击选项时触发，禁用或加载状态下不会触发
        select: function (action, index) {
            console.log(index)
            this.$notify({
                type: 'success',
                message: JSON.stringify(action)
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

.content {
    padding: 16px 16px 160px;
    text-align: left;
}
</style>