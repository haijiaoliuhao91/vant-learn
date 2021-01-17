<template>
    <div>
        <van-tabs swipeable>
            <van-tab title="基础用法">
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                    <div class="wrapper">刷新次数:{{ count }}</div>
                </van-pull-refresh>
            </van-tab>
            <van-tab title="成功提示">
                <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
                    <div class="wrapper">刷新次数:{{ count }}</div>
                </van-pull-refresh>
            </van-tab>
            <van-tab title="自定义提示">
                <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
                    <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
                    <template #pulling="props">
                        <img 
                            class="doge" 
                            src="https://img.yzcdn.cn/vant/doge.png" 
                            :style="{ transform: `scale(${props.distance / 80})` }" 
                        />
                    </template>

                    <!-- 释放提示 -->
                    <template #loosing>
                        <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
                    </template>
                    
                    <!-- 加载提示 -->
                    <template #loading>
                        <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
                    </template>
                    <div class="wrapper">刷新次数:{{ count }}</div>
                </van-pull-refresh>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    name: 'pullrefresh',
    data: function () {
        return {
            isLoading: false,
            count: 0
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
        // 下拉刷新时触发
        onRefresh: function () {
            setTimeout(() => {
                this.isLoading = false
                this.count += 1
                this.$notify({
                    type: 'warning',
                    message: '刷线成功'
                })
            }, 3000)
        }
    }
}
</script>

<style scoped>
.wrapper {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 812px;
}

.doge {
    width: 140px;
    height: 72px;
    margin-top: 4px;
    border-radius: 4px;
}
</style>