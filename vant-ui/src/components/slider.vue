<template>
    <div class="wrapper">
        <p>基础用法</p>
        <van-slider v-model="value1" @change="change" />

        <p>双滑块</p>
        <van-slider v-model="value2" range @change="change" />

        <p>指定选择范围</p>
        <van-slider v-model="value3" :min="min" :max="max" @change="change" />

        <p>禁用</p>
        <van-slider v-model="value4" disabled />

        <p>指定步长</p>
        <van-slider v-model="value5" step="10" @change="change" />

        <p>自定义样式</p>
        <van-slider v-model="value6" active-color="#ee0a24" bar-height="4px" @change="change" />

        <p>自定义按钮</p>
        <van-slider v-model="value7" @change="change">
            <template #button>
                <div class="custom-button">{{ value7 }}</div>
            </template>
        </van-slider>

        <p>垂直方向</p>
        <div style="height: 150px;">
            <van-slider v-model="value8" vertical @change="change" />
        </div>

        <div style="height: 150px;margin-top: 50px;">
            <van-slider v-model="value9" range vertical @change="change" />
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'slider',
    data: function () {
        return {
            value1: 10,
            value2: [ 20, 66 ],
            value3: 0,
            min: -50,
            max: 50,
            value4: 60,
            value5: 10,
            value6: 20,
            value7: 10,
            value8: 8,
            value9: [ 20, 40 ]
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
        // 进度变化且结束拖动后触发
        change: function (value) {
            this.$notify({
                type: 'danger',
                message: '当前滑块的值:' + JSON.stringify(value)
            })
            console.log(value)
        }
    }
}   
</script>

<style scoped>
.wrapper {
    padding: 0 25px;
}

p {
    font-size: .875rem;
    text-align: left;
}

.custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 10px;
}
</style>