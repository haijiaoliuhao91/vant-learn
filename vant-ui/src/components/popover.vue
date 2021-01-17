<template>
    <div>
        <p>基础用法</p>
        <van-popover 
            v-model="showPopover1" 
            :actions="actions" 
            trigger="click"
            @select="select"
            @open="open"
            @close="close" 
        >
            <template #reference>
                <van-button type="primary">浅色风格</van-button>
            </template>
        </van-popover>

        <p />

        <van-popover
            v-model="showPopover2"
            :actions="actions"
            trigger="click"
            theme="dark"
            @select="select"
            @open="open"
            @close="close"
            style="position: relative;"
        >
            <template #reference>
                <van-button type="primary">深色风格</van-button>
            </template>
        </van-popover>

        <p>弹出位置</p>
        <van-popup v-model="showPopup" position="bottom" round :style="{ height: '80%' }">
            <van-popover
                v-model="showPopover3"
                :actions="actions"
                theme="dark"
                :placement="placement"
                style="position: relative;top: 150px;"
            >
                <template #reference>
                    <div class="my-reference-div"></div>
                </template>
            </van-popover>
            <van-picker
                :columns="columns" 
                @change="change"
                class="my-van-picker"
            />
        </van-popup>
        <van-cell value="选择弹出位置" is-link @click="click" />

        <p>选项配置</p>
        <van-popover v-model="showPopover4" :actions="actions1" trigger="click" placement="bottom-start">
            <template #reference>
                <van-button type="primary">展示图标</van-button>
            </template>
        </van-popover>

        <p />
        <van-popover v-model="showPopover5" :actions="actions2" trigger="click">
            <template #reference>
                <van-button type="primary">禁用选项</van-button>
            </template>
        </van-popover>

        <p>自定义内容</p>
        <van-popover v-model="showPopover6" placement="top-start" trigger="click" style="position: absolute;left: 25px;">
            <van-grid :column-num="3" square :border="false" style="width: 240px;">
                <van-grid-item v-for="index in 6" :key="index" title="文本" icon="photo-o" @click="gridItemClick" />
            </van-grid>
            <template #reference>
                <van-button type="primary">自定义内容</van-button>
            </template>
        </van-popover>
    </div>
</template>

<script>
export default {
    name: 'popover',
    data: function () {
        return {
            showPopover1: false,
            showPopover2: false,
            showPopover3: false,
            showPopover4: false,
            showPopover5: false,
            showPopover6: false,
            showPopup: false,
            placement: 'bottom',
            actions: [
                {
                    text: '选项一'
                },
                {
                    text: '选项二'
                },
                {
                    text: '选项三'
                }
            ],
            actions1: [
                {
                    text: '选项一',
                    icon: 'add-o'
                },
                {
                    text: '选项二',
                    icon: 'music-o'
                },
                {
                    text: '选项三',
                    icon: 'more-o'
                }
            ],
            actions2: [
                {
                    text: '选项一',
                    disabled: true
                },
                {
                    text: '选项二',
                    disabled: true
                },
                {
                    text: '选项三'
                }
            ],
            columns: [ 'top', 'top-start', 'top-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end' ]
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
        console.log('errorcaptured')
    },

    methods: {
        // 点击选项时触发
        select: function (action, index) {
            this.$notify({
                type: 'success',
                message: JSON.stringify(action) + index
            })
            console.log(index)
        },

        // 打开菜单时触发
        open: function () {
            this.$notify({
                type: 'danger',
                message: '打开菜单'
            })
        },

        // 关闭菜单时触发
        close: function () {
            console.log('关闭菜单时触发')
        },

        // 选项改变时触发
        change: function (picker, value, index) {
            console.log(picker)
            console.log(index)
            this.showPopover3 = true
            this.placement = value
            this.$notify({
                type: 'success',
                message: value
            })
        },

        click: function () {
            this.showPopup = true
        },

        gridItemClick: function (event) {
            console.log(event)
            this.showPopover6 = false
        }
        
    }
}
</script>

<style scoped>
.my-reference-div {
    width: 80px;
    height: 80px;
    background-color: green;
    border-radius: 5px;
}

.my-van-picker {
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
}
</style>