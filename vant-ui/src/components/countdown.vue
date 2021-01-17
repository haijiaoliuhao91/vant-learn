<template>
    <div>
        <p>基础用法</p>
        <van-count-down :time="time" />
        <p>自定义格式</p>
        <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
        <p>毫秒级渲染</p>
        <van-count-down :time="time" millisecond format="HH:mm:ss:SSS" />
        <p>自定义样式</p>
        <van-count-down :time="time">
            <template #default="timeData">
                <span class="block">{{ timeData.days }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
            </template>
        </van-count-down>

        <p>手动控制</p>
        <van-count-down ref="countdown" :time="countdown" :auto-start="false" millisecond format="ss:SSS" @finish="finish" />
        <van-grid column-num="3" :border="false">
            <van-grid-item text="开始" icon="play-circle-o" @click="start" />
            <van-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
            <van-grid-item text="重置" icon="replay" @click="reset" />
        </van-grid>
    </div>
</template>

<script>
export default {
    name: 'countdown',
    data: function () {
        return {
            time: 30 * 60 * 60 * 1000,
            countdown: 3 * 1000
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
        // 倒计时结束时触发
        finish: function () {
            this.$notify({
                type: 'success',
                message: '倒计时结束'
            })
            // 倒计时结束的时候重置倒计时
            this.reset()
        },

        // 开始倒计时
        start: function () {
            this.$refs.countdown.start()
        },

        // 暂停倒计时
        pause: function () {
            this.$refs.countdown.pause()
        },

        // 重置倒计时
        reset: function () {
            this.$refs.countdown.reset()
        }
   }
}
</script>

<style scoped>
p {
    padding: 0 25px;
    text-align: left;
}

.block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 3px;
}

.colon {
    display: inline-block;
    color: #ee0a24;
    margin: 0 4px;
}
</style>