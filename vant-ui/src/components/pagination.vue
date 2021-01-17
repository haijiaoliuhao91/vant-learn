<template>
    <div>
        <p>基础用法</p>
        <van-pagination v-model="currentPage1" :total-items="24" :items-per-page="5" @change="onChange" />

        <p>简单模式</p>
        <van-pagination v-model="currentPage2" mode="simple" :page-count="12" />

        <p>显示省略号</p>
        <van-pagination v-model="currentPage3" :total-items="125" :show-page-size="3" force-ellipses />

        <p>自定义按钮</p>
        <van-pagination v-model="currentPage4" :total-items="130" :show-page-size="5">
            <template #prev-text>
                <van-icon name="arrow-left" />
            </template>
            <template #next-text>
                <van-icon name="arrow" />
            </template>
            <template #page="{ text }">
                {{ text }}
            </template>
        </van-pagination>
    </div>
</template>

<script>
export default {
    name: 'pagination',
    data: function () {
        return {
            currentPage1: 1,
            currentPage2: 1,
            currentPage3: 1,
            currentPage4: 1
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
        // 页码改变时触发
        onChange: function (index) {
            this.$notify({
                type: 'success',
                message: `第${index}页`
            })
        }
    }
}
</script>

<style scoped>
p {
    padding: 0 25px;
    text-align: left;
    font-size: 13px;
}
</style>