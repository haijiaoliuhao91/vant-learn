<template>
    <div>
        <p>{{ tip }}</p>
        <p>基础用法</p>
        <van-grid>
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
        </van-grid>

        <p>自定义列数</p>
        <van-grid :column-num="3"> 
            <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
        </van-grid>

        <p>自定义内容</p>
        <van-grid :column-num="3" :border="false">
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
            </van-grid-item>
        </van-grid>

        <p>正方形格子</p>
        <van-grid :border="false" square>
            <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文本" />
        </van-grid>

        <p>格子间距</p>
        <van-grid :gutter="10">
            <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文本" />
        </van-grid>

        <p>内容横排</p>
        <van-grid direction="horizontal" :column-num="3">
            <van-grid-item v-for="value in 3" :key="value" icon="photo-o" text="文本" />
        </van-grid>

        <p>页面导航</p>
        <van-grid :column-num="2">
            <van-grid-item icon="home-o" text="路由跳转" to="/" />
            <van-grid-item icon="search" text="URL跳转" url="/home/index.html" />
        </van-grid>

        <p>徽标提示</p>
        <van-grid :column-num="2">
            <van-grid-item icon="home-o" text="文字" dot />
            <van-grid-item icon="search" text="文字" badge="99+" />
        </van-grid>
    </div>
</template>

<script>
export default {
    name: 'grid',
    data: function () {
        return {
            tip: 'Grid 宫格'
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
    }
}
</script>

<style scoped>
p {
    text-align: left;
    padding: 0 25px;
}
</style>