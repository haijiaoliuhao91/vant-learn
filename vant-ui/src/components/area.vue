<template>
    <div>
        <p>基础用法</p>
        <van-area 
            :area-list="areaList" 
            title="标题" 
            @confirm="confirm"
            @cancel="cancel"
            @change="change"
        />

        <p>选中省市区</p>
        <van-area
            :area-list="areaList" 
            title="标题"
            value="220102"
            @confirm="confirm"
            @cancel="cancel"
            @change="change"
        />

        <p>配置显示列</p>
        <van-area 
            :area-list="areaList"
            columns-num="2"
            title="标题"
            @confirm="confirm"
            @cancel="cancel"
            @change="change"
        />

        <p>配置列占位提示文字</p>
        <van-area 
            :area-list="areaList"
            :columns-placeholder="[ '请选择', '请选择', '请选择' ]"
            title="标题"
            @confirm="confirm"
            @cancel="cancel"
            @change="change"
        />

    </div>
</template> 

<script>

import areaList from '../assets/js/area'

export default {
    name: 'area1',
    data: function () {
        return {
            areaList
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
        // 点击右上方完成按钮时触发
        confirm: function (items) {
            this.$notify({
                type: 'success',
                message: '点击完成按钮:' + JSON.stringify(items)
            })
        },

        // 点击取消按钮时触发
        cancel: function () {
            this.$notify({
                type: 'success',
                message: '点击取消按钮时触发'
            })
        },

        // 选项改变时触发
        change: function (area, items, column) {
            console.log(area)
            this.$notify({
                type: 'warning',
                message: '选项改变时触发:' + JSON.stringify(items) + '-' + column
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
</style>