<template>
    <div>
        <p>基础用法</p>
        <van-tabbar v-model="active1" :fixed="false" @change="change">
            <van-tabbar-item icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
            <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>

        <p>通过名称匹配</p>
        <van-tabbar v-model="active2" :fixed="false" @change="change">
            <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
            <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
            <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>

        <p>徽标提示</p>
        <van-tabbar v-model="active3" :fixed="false" @change="change">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search" dot>搜索</van-tabbar-item>
            <van-tabbar-item icon="friends-o" badge="5">好友</van-tabbar-item>
            <van-tabbar-item icon="setting-o" badge="20">设置</van-tabbar-item>
        </van-tabbar>

        <p>自定义图标</p>
        <van-tabbar v-model="active4" :fixed="false" @change="change">
            <van-tabbar-item>
                <template #icon>
                    <van-image fit="contain" :src="active4 ? icon.inactive : icon.active"   />
                </template>
                首页
            </van-tabbar-item>
            <van-tabbar-item icon="search">搜索</van-tabbar-item>
            <van-tabbar-item icon="friends-o">好友</van-tabbar-item>
            <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
        </van-tabbar>

        <p>自定义颜色</p>
        <van-tabbar v-model="active5" :fixed="false" active-color="red" inactive-color="blue" @change="change">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">搜索</van-tabbar-item>
            <van-tabbar-item icon="friends-o">好友</van-tabbar-item>
            <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
        </van-tabbar>

        <p>监听切换事件</p>
        <van-tabbar v-model="active6" :fixed="false" @change="change">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">搜索</van-tabbar-item>
            <van-tabbar-item icon="friends-o">好友</van-tabbar-item>
            <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script>
export default {
    name: 'tabbar',
    data: function () {
        return {
            active1: 0,
            active2: 'search',
            active3: 2,
            active4: 1,
            active5: 1,
            active6: 1,
            icon: {
                active: 'https://img.yzcdn.cn/vant/user-active.png',
                inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
            }
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

    beforeActivated: function () {
        console.log('beforeActivated')
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
        // 切换标签时触发
        change: function (index) {
            this.$notify(index)
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