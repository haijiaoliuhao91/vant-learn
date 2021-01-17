<template>
    <div class="container">
        <p>选择年月日</p>
        <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate" 
            @change="change"
            @cancel="cancel"
            @confirm="confirm"
        />
        <p>选择年月</p>
        <van-datetime-picker
            v-model="currentDate"
            type="year-month" 
            title="选择年月"
            :min-date="minDate"
            :max-date="maxDate"
            :formatter="formatter"
        />
        <p>选择月日</p>
        <van-datetime-picker
            v-model="currentDate"
            type="month-day"
            title="选择月日"
            :formatter="formatter"
        />
        <p>选择时间</p>
        <van-datetime-picker
            v-model="currentTime"
            type="time"
            title="选择时间"
            :min-hour="minHour"
            :max-hour="maxHour"
            :min-minute="minMinute"
            :max-minute="maxMinute"
        />
        <p>选择完整时间</p>
        <van-datetime-picker
            v-model="currentDate"
            type="datetime" 
            title="选择完整时间"
            :min-date="minDate"
            :max-date="maxDate"
        />
        <p>选择年月日小时</p>
        <van-datetime-picker 
            v-model="currentDate"
            type="datehour"
            title="选择年月日小时"
            :min-date="minDate"
            :max-date="maxDate"
        />
        <p>选项过滤器</p>
        <van-datetime-picker
            v-model="currentTime"
            type="time"
            title="选项过滤器"
            :filter="filter"
        />
        <p>自定义排序</p>
        <van-datetime-picker
            v-model="currentDate"
            type="date" 
            :min-date="minDate"
            :max-date="maxDate"
            :columns-order="['month', 'day', 'year']"
            :formatter="formatter"
        />
    </div>
</template>

<script>
export default {
    name: 'datetimepicker',
    data: function () {
        return {
            tip: 'datetimepicker',
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(),
            currentTime: '12:04',
            minHour: '10',
            maxHour: '22',
            minMinute: '10',
            maxMinute: '59'
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
        console.log('beforeUpdate')
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
        // 当值变化时触发的事件
        change: function (picker) {
            console.log(picker)
        },

        // 点击取消按钮时触发的事件
        cancel: function () {
            console.log('点击取消按钮时触发的事件')
        },

        // 点击完成按钮时触发的事件
        confirm: function (value) {
            console.log(value)
        },

        // 选项格式化函数
        formatter: function (type, val) {
            if (type === 'year') {
                return val + '年'
            }

            if (type === 'month') {
                return val + '月'
            }

            if (type === 'day') {
                return val + '日'
            }
        },

        // 选项过滤函数
        filter: function (type, vals) {
            console.log(type)
            console.log(vals)
            if (type === 'minute') {
                return vals.filter(val => val % 5 == 0)
            }
            return vals
        }
    }
}
</script>

<style scoped>
.container {
    margin: 20px;
}

p {
    color: gray;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
}
</style>