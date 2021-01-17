<template>
    <div>
        <p>基础用法</p>
        <van-badge content="5">
            <div class="child" />
        </van-badge>
        
        <br />

        <van-badge content="10">
            <div class="child" />
        </van-badge>

        <br />

        <van-badge content="Hot">
            <div class="child" />
        </van-badge>

        <br />

        <van-badge dot>
            <div class="child" />
        </van-badge>

        <p>最大值</p>
        <van-badge max="9" content="20">
            <div class="child" />
        </van-badge>

        <br />

        <van-badge max="20" content="25">
            <div class="child" />
        </van-badge>

        <br />

        <van-badge max="99" content="121">
            <div class="child" />
        </van-badge>

        <p>自定义颜色</p>
        <van-badge content="5" color="#1989fa">
            <div class="child" />
        </van-badge>

        <br />

        <van-badge content="10" color="#1989fa">
            <div class="child" />
        </van-badge>

        <br />

        <van-badge dot color="#1989fa">
            <div class="child" />
        </van-badge>

        <p>自定义徽标内容</p>
        <van-badge>
            <div class="child" />
            <template #content>
                <van-icon name="success" class="badge-icon" />
            </template>
        </van-badge>

        <br />

        <van-badge>
            <div class="child" />
            <template #content>
                <van-icon name="cross" class="badge-icon" />
            </template>
        </van-badge>

        <br />

        <van-badge>
            <div class="child" />
            <template #content>
                <van-icon name="down" class="badge-icon" />
            </template>
        </van-badge>

        <p>独立展示</p>
        <van-badge content="20" />
        <br />
        <van-badge content="100" max="99" />

    </div>
</template>

<script>
export default {
    name: 'badge',
    data: function () {
        return {

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

.child {
    width: 40px;
    height: 40px;
    background-color: #f2f3f5;
    border-radius: 4px;
}

.badge-icon {
    display: block;
    font-size: 10px;
    line-height: 16px;
}
</style>