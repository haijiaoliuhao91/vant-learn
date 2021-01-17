<template>
    <div>
        <p>按钮类型</p>
        <div class="container">
            <van-button type="primary">主要按钮</van-button>
            <van-button type="info">信息按钮</van-button>
            <van-button type="default">默认按钮</van-button>
            <van-button type="danger">危险按钮</van-button>
            <van-button type="warning">警告按钮</van-button>
        </div>
        <p>朴素按钮</p>
        <div class="container">
            <van-button plain type="primary">朴素按钮</van-button>
            <van-button plain type="info">朴素按钮</van-button>
        </div>
        <p>细边框按钮</p>
        <div class="container">
            <van-button plain hairline type="primary" >细边框按钮</van-button>
            <van-button plain hairline type="info">细边框按钮</van-button>
        </div>
        <p>禁用状态</p>
        <div class="container">
            <van-button disabled type="primary">禁用状态</van-button>
            <van-button disabled type="info">禁用状态</van-button>
        </div>
        <p>加载状态</p>
        <div class="container">
            <van-button loading type="primary" />
            <van-button loading type="primary" loading-type="spinner" />
            <van-button loading type="info" loading-text="加载中..." />
        </div>
        <p>按钮形状</p>
        <div class="container">
            <van-button square type="primary">方形按钮</van-button>
            <van-button round  type="info">圆形按钮</van-button>
        </div>
        <p>图标按钮</p>
        <div class="container">
            <van-button icon="plus" type="primary" />
            <van-button icon="plus" type="info">按钮</van-button>
            <van-button plain icon="https://img.yzcdn.cn/vant/user-active.png" type="info">按钮</van-button>
            <van-button icon="plus" type="primary" icon-position="right">按钮</van-button>
        </div>
        <p>按钮尺寸</p>
        <div class="container">
            <van-button type="primary" size="large">大号按钮</van-button>
            <van-button type="info" size="normal">普通按钮</van-button>
            <van-button type="primary" size="small">小型按钮</van-button>
            <van-button type="info" size="mini">迷你按钮</van-button>
        </div>
        <p>块级元素</p>
        <div class="container">
            <van-button block type="info">块级元素</van-button>
        </div>
        <p>页面导航</p>
        <div class="container">
            <van-button type="primary" url="https://www.baidu.com">URL 跳转</van-button>
            <van-button type="info" to="/Hi">路由跳转</van-button>
        </div>
        <p>自定义颜色</p>
        <div class="container">
            <van-button color="#7232dd">单色按钮</van-button>
            <van-button color="#7233dd" plain>单色按钮</van-button>
            <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" @touchstart="touchstart">渐变色按钮</van-button>
            <van-button color="linear-gradient(to bottom right, red, blue)" @click="click">渐变色按钮</van-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Button',
    methods: {
        click: function () {
            this.$toast({
                message: '点击了按钮',
                position: top
            })
        },

        touchstart: function () {
            this.$toast({
                message: '开始触摸按钮时触发',
                overlay: true
            })
        }
    }
}
</script>

<style scoped>
p {
    text-align: left;
    color: gray;
    font-size: 18px;
}
.container {
    display: flex;
    flex-direction: column;
}

</style>