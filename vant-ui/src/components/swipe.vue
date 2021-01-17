<template>
    <div>
        <p>基础用法</p>
        <van-swipe class="my-swipe" :autoplay="3000">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>

        <p>图片懒加载</p>
        <van-swipe>
            <van-swipe-item v-for="(image, index) in images" :key="index"><img width="100%" height="250px" v-lazy="image" /></van-swipe-item>
        </van-swipe>

        <p>监听 change 事件</p>
        <van-swipe class="my-swipe" :autoplay="3000" @change="onChange">
            <van-swipe-item v-for="index in 4" :key="index">{{ index }}</van-swipe-item>
        </van-swipe>

        <p>纵向滚动</p>
        <van-swipe style="background-color: #39a9ed;height: 200px;line-height: 200px;color: #fff;font-size: 20px;" vertical :autoplay="3000">
            <van-swipe-item v-for="index in 4" :key="index">{{ index }}</van-swipe-item>
        </van-swipe>

        <p>自定义滑块大小</p>
        <van-swipe :width="300" :height="150" :autoplay="3000" :loop="false" style="background-color:red;color: #fff;line-height: 150px;">
            <van-swipe-item v-for="index in 4" :key="index">{{ index }}</van-swipe-item>
        </van-swipe>

        <p>自定义指示器</p>
        <van-swipe class="my-swipe" :autoplay="3000" @change="change">
            <van-swipe-item v-for="index in 4" :key="index">
                {{ index }}
            </van-swipe-item>
            <template #indicator>
                <div class="custom-indicator">{{ current + 1 }}/4</div>
            </template>
        </van-swipe>

    </div>
</template>

<script>
export default {
    name: 'swipe',
    data: function () {
        return {
            current: 0,
            images: [ 'https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg', 'https://img.yzcdn.cn/vant/apple-3.jpg' ]
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
        // 每一页轮播结束后触发
        onChange: function (index) {
            this.$notify({
                type: 'success',
                message: `${index}`
            })
        },

        change: function (index) {
            this.current = index
        }
    }
}
</script>

<style scoped>
p {
    padding: 0 25px;
    text-align: left;
}

.my-swipe {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}

.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    width: auto;
    height: 20px;
    line-height: 20px;
    background-color: rgba(0, 0, 0, 0.1);
}
</style>