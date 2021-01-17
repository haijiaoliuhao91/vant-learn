<template>
    <div>
        <p>基础用法</p>
        <img class="img" v-for="(img, index) in imageList" :key="index" v-lazy="img" />
        <p>背景图懒加载</p>
        <div class="my-div" v-for="img in imageList" :key="img" v-lazy:background-image="img" />
        <p>组件懒加载</p>
        <!-- 将需要懒加载的组件放在 lazy-component 标签中，即可实现组件懒加载 -->
        <lazy-component>
            <img class="img" v-for="(img, index) in imageList" :key="img + index" v-lazy="img" />
        </lazy-component>
    </div>
</template>

<script>
export default {
    name: 'lazyload',
    data: function () {
        return {
            imageList: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg',
                'https://img.yzcdn.cn/vant/apple-3.jpg',
                'https://img.yzcdn.cn/vant/apple-4.jpg'
            ]
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

    }
}
</script>

<style scoped>
p {
    padding: 0 25px;
    text-align: left;
}

.img, .my-div {
    width: 325px;
    height: 325px;
    margin: 0 25px 10px;
    border-radius: 10px;
}

.my-div {
    background-size: cover;
}

</style>