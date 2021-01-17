<template>
  <div class="container">
    <van-calendar type="single" v-model="show1" @confirm="onConfirm1" />
    <van-calendar type="multiple" v-model="show2" @confirm="onConfirm2" />
    <van-calendar type="range" v-model="show3" @confirm="onConfirm3"  />
    <van-calendar type="single" v-model="show4" @confirm="onConfirm4" :show-confirm="false" />
    <van-calendar type="range" v-model="show5" @confirm="onConfirm5" :show-confirm="false" />
    <van-calendar type="range" color="#1989fa" v-model="show6" @confirm="onConfirm6" />
    <van-calendar type="single" v-model="show7" :min-date="minDate" :max-date="maxDate" @confirm="onConfirm7" />
    <van-calendar type="range" v-model="show8" confirm-text="完成" confirm-disabled-text="请选择结束时间" @confirm="onConfirm8" />
    <van-calendar type="range" v-model="show9" :min-date="minDate" :max-date="maxDate" :formatter="formatter" max-range="3" range-prompt="选择天数最多为3天" :allow-same-day="true" @confirm="onConfirm9" />
    <van-calendar type="range" v-model="show10" position="bottom" :round="true" :formatter="formatter" @confirm="onConfirm10" />
    <van-calendar type="range" v-model="show11" max-range="4" range-prompt="选择天数不能超过4天" @confirm="onConfirm11" />
    <van-calendar type="range" v-model="show12" first-day-of-week="1" @confirm="onConfirm12" />

    <van-cell-group title="基础用法" :border="true">
      <van-cell title="选择单个日期" :value="date1" is-link @click="calendar1" />
      <van-cell title="选择多个日期" :value="date2" is-link @click="calendar2" />
      <van-cell title="选择日期区间" :value="date3" is-link @click="calendar3" />
    </van-cell-group>

    <van-cell-group title="快捷选择">
      <van-cell title="选择单个日期" :value="date4" is-link @click="calendar4" />
      <van-cell title="选择日期区间" :value="date5" is-link @click="calendar5" />
    </van-cell-group>

    <van-cell-group title="自定义日历">
      <van-cell title="自定义颜色" :value="date6" is-link @click="calendar6" />
      <van-cell title="自定义日期范围" :value="date7" is-link @click="calendar7" />
      <van-cell title="自定义按钮文字" :value="date8" is-link @click="calendar8" />
      <van-cell title="自定义日期文案" :value="date9" is-link @click="calendar9" />
      <van-cell title="自定义弹出位置" :value="date10" is-link @click="calendar10" />
      <van-cell title="日期区间最大范围" :value="date11" is-link @click="calendar11" />
      <van-cell title="自定义周起始日" :value="date12" is-link @click="calendar12" />
    </van-cell-group> 

    <van-cell-group title="平铺展示">
      <van-calendar title="日历" :poppable="false" :show-confirm="false" style="height: 500px;" />
    </van-cell-group>

  </div>
</template>

<script>
export default {
  name: 'calendar',
  data: function () {
    return {
      tip: '日历组件',
      date1: '',
      date2: '',
      date3: '',
      date4: '',
      date5: '',
      date6: '',
      date7: '',
      date8: '',
      date9: '',
      date10: '',
      date11: '',
      date12: '',
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false,
      show12: false,
      minDate: new Date(2010, 4, 1),
      maxDate: new Date(2010, 4, 31)
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
    console.log('beforeDestroyed')
  },

  errorCaptured: function () {
    console.log('errorCaptured')
  },

  methods: {
    calendar1: function () {
      this.show1 = true
    },

    calendar2: function () {
      this.show2 = true
    },

    calendar3: function () {
      this.show3 = true
    },

    calendar4: function () {
      this.show4 = true
    },

    calendar5: function () {
      this.show5 = true
    },

    calendar6: function () {
      this.show6 = true
    },

    calendar7: function () {
      this.show7 = true
    },

    calendar8: function () {
      this.show8 = true
    },

    calendar9: function () {
      this.show9 = true
    },
    
    calendar10: function () {
      this.show10 = true
    },

    calendar11: function () {
      this.show11 = true
    },

    calendar12: function () {
      this.show12 = true
    },

    formatDate: function (date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    },

    formatter: function (day) {
      const month = day.date.getMonth() + 1
      const date = day.date.getDate()
      if (month === 5) {
        if (date === 1) {
          day.topInfo = '劳动节'
        } else if (date === 4) {
          day.topInfo = '青年节'
        } else if (date === 11) {
          day.text = "今天"
        }
      }

      if (day.type === 'start') {
        day.bottomInfo = '入住'
      } else if (day.type === 'end') {
        day.bottomInfo = '离店'
      }

      return day
    },

    onConfirm1: function (date) {
      this.show1 = false
      this.date1 = this.formatDate(date)
    },

    onConfirm2: function (date) {
      this.show2 = false
      this.date2 = `选择了${date.length}个日期`
    },

    onConfirm3: function (date) {
      this.show3 = false
      const [ start, end ] = date
      this.date3 = `${this.formatDate(start)}-${this.formatDate(end)}`
    },

    onConfirm4: function (date) {
      this.show4 = false
      this.date4 = this.formatDate(date)
    },

    onConfirm5: function (date) {
      const [ start, end ] = date
      this.show5 = false
      this.date5 = `${this.formatDate(start)}-${this.formatDate(end)}`
    },

    onConfirm6: function (date) {
      const [ start, end ] = date
      this.show6 = false
      this.date6 = `${this.formatDate(start)}-${this.formatDate(end)}`
    },

    onConfirm7: function (date) {
      this.show7 = false
      this.date7 = this.formatDate(date)
    },

    onConfirm8: function (date) {
      const [ start, end ] = date
      this.show8 = false
      this.date8 = `${this.formatDate(start)}-${this.formatDate(end)}`
    },

    onConfirm9: function (date) {
      const [ start, end ] = date
      this.show9 = false
      this.date9 = `${this.formatDate(start)}-${this.formatDate(end)}`
    },

    onConfirm10: function (date) {
      const [ start, end ] = date
      this.show10 = false
      this.date10 = `${this.formatDate(start)}-${this.formatDate(end)}`
    },

    onConfirm11: function (date) {
      const [ start, end ] = date
      this.show11 = false
      this.date11 = `${this.formatDate(start)}-${this.formatDate(end)}`
    },

    onConfirm12: function (date) {
      const [ start, end ] = date
      this.show12 = false
      this.date12 = `${this.formatDate(start)}-${this.formatDate(end)}`
    }
  }
}
</script>

<style scoped>
p {
  color: red;
  font-size: 18px;
  font-weight: bold;
}

.container {
  margin: 0 10px;
}
</style>