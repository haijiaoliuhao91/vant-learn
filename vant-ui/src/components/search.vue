<template>
    <div>
        <p>基础用法</p>
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <p>事件监听</p>
        <van-search 
            v-model="value" 
            placeholder="请输入搜索关键词" 
            show-action 
            @search="onSearch" 
            @input="onInput"
            @focus="onFocus"
            @blur="onBlur"
            @clear="onClear"
            @cancel="onCancel" 
        />
        <p>搜索框内容对齐</p>
        <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
        <p>禁用搜索框</p>
        <van-search v-model="value" placeholder="请输入搜索关键词" disabled />
        <p>自定义背景色</p>
        <van-search v-model="value" placeholder="请输入搜索关键词" background="#4fc08d" shape="round" />
        <p>自定义按钮</p>
        <van-search v-model="value" placeholder="请输入搜索关键词" label="搜索" show-action>
            <template #left>
                <span>领券</span>
            </template>
            <template #action>
                <span @click="onSearch">搜索</span>
            </template>
        </van-search>
    </div>
</template>

<script>
export default {
    name: 'search',
    data: function () {
        return {
            tip: 'search',
            value: ''
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
        console.log('activate')
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
 
    methods: {
        // 确定搜索时触发
        onSearch: function (value) {
            console.log(value)
            this.$toast(this.value)
        },

        // 输入框内容变化时触发
        onInput: function (value) {
            this.$toast(value)
        },

        // 输入框获得焦点时触发
        onFocus: function () {
            this.$toast('获得焦点')
        },

        // 输入框失去焦点时触发
        onBlur: function () {
            this.$toast('失去焦点')
        },

        // 点击清除按钮时触发
        onClear: function () {
            this.$toast('点击清除按钮时触发')
        },

        // 点击取消按钮时触发
        onCancel: function () {
            this.$toast('取消')
        }
    }
}
</script>

<style scoped>
p {
    color: red;
}
</style>