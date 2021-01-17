<template>
    <div>
        <p>基础用法</p>
        <van-form @submit="submit" @failed="failed">
            <van-field
                v-model="username"
                type="text"
                name='username'
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field 
                v-model="password"
                type="text"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[ { required: true, message: '请填写密码' } ]"
            />

            <div style="margin: 16px;">
                <van-button type="info" text="提交" round block native-type="submit" />
            </div>
        </van-form>

        <p>校验规则</p>
        <van-form @submit="submit">
            <van-field 
                v-model="value1"
                type="number"
                name="pattern"
                label="文本"
                placeholder="正则校验"
                :rules="[ { pattern, message: '请输入正确内容' } ]"
            />

            <van-field 
                v-model="value2"
                type="text"
                name="validator"
                label="文本"
                placeholder="函数校验"
                :rules="[ { validator, message: '请输入正确内容' } ]"
            />

            <van-field 
                v-model="value3"
                type="text"
                name="asyncValidator"
                label="文本"
                placeholder="异步函数校验"
                :rules="[ { validator: asyncValidator, message: '请输入正确内容' } ]"
            />

            <div style="margin: 16px;">
                <van-button type="info" text="提交" round block native-type="submit" />
            </div>
        </van-form>

        <p>表单项类型</p>
        <van-form @submit="submit" @failed="failed">
            <van-field name="switch" label="开关">
                <template #input>
                    <van-switch v-model="checked" size="20px" />
                </template>
            </van-field>

            <van-field name="checkbox" label="复选框">
                <template #input>
                    <van-checkbox v-model="checkbox" shape="square" />
                </template>
            </van-field>

            <van-field name="checkboxGroup" label="复选框组">
                <template #input>
                    <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
                        <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
                        <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
                    </van-checkbox-group>
                </template>
            </van-field>

            <van-field name="radio" label="单元框">
                <template #input>
                    <van-radio-group v-model="radio" direction="horizontal">
                        <van-radio name="1">单元框 1</van-radio>
                        <van-radio name="2">单元框 2</van-radio>
                    </van-radio-group>
                </template>
            </van-field>

            <van-field name="stepper" label="步进器">
                <template #input>
                    <van-stepper v-model="stepper" theme="round" />
                </template>
            </van-field>

            <van-field name="rate" label="评分">
                <template #input>
                    <van-rate v-model="rate" allow-half />
                </template>
            </van-field>

            <van-field name="slider" label="滑块">
                <template #input>
                    <van-slider v-model="slider" />
                </template>
            </van-field>

            <van-field name="uploader" label="文件上传">
                <template #input>
                    <van-uploader v-model="uploader" :after-read="afterRead" />
                </template>
            </van-field>

            <van-field 
                name="picker" 
                label="选择器"
                :value="value4"
                readonly
                clickable
                placeholder="点击选择城市"
                @click="showPicker = true"
            />
            <van-popup v-model="showPicker" position="bottom">
                <van-picker 
                    show-toolbar
                    :columns="columns"
                    @confirm="confirm"
                    @cancel="showPicker = false"
                />
            </van-popup>
    
            <van-field
                name="time"
                label="时间选择" 
                :value="time"
                readonly
                placeholder="点击选择时间"
                @click="showTime = true"
            />
            <van-popup v-model="showTime" position="bottom">
                <van-datetime-picker 
                    type="time"
                    @confirm="timeConfirm"
                    @cancel="showTime = false"
                />
            </van-popup>

            <van-field
                name="area"
                label="地区选择" 
                :value="area"
                readonly
                clickable
                placeholder="点击选择省市区"
                @click="showArea = true"
            />
            <van-popup v-model="showArea" position="bottom" round>
                <van-area
                    :area-list="areaList"
                    @confirm="areaConfirm"
                    @cancel="showArea = false"
                />
            </van-popup>

            <van-field 
                name="calendar"
                label="日历"
                :value="calendar"
                clickable
                readonly
                placeholder="点击选择日期"
                @click="showCalendar = true"
            />
            <van-calendar v-model="showCalendar" position="right" @confirm="calendarConfirm" />

            <div style="margin: 16px;">
                <van-button type="info" text="提交" round block native-type="submit" />
            </div>
        </van-form>

    </div>
</template>

<script>

import { Toast } from 'vant'

import areaList from '../assets/js/area'

export default {
    name: 'form1',
    data: function () {
        return {
            username: '',
            password: '',
            value1: '',
            value2: '',
            value3: '',
            pattern: /\d{6}/,
            checked: false,
            checkbox: false,
            checkboxGroup: [],
            radio: '',
            stepper: '',
            rate: 2,
            slider: 20,
            uploader: [ 
                
            ],
            value4: '',
            columns: [ '杭州', '宁波', '温州', '嘉兴', '湖州' ],
            showPicker: false,
            time: '',
            showTime: false,
            showArea: false,
            area: '',
            areaList,
            calendar: '',
            showCalendar: false
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
        // 提交表单且验证通过时触发
        submit: function (values) {
            this.$notify({
                type: 'success',
                message: '表单数据：' + JSON.stringify(values)
            })
            console.log(values)
        },

        // 提交表单且验证失败时触发
        failed: function (errorInfo) {
            this.$notify({
                type: 'warning',
                message: '表单验证失败:' + JSON.stringify(errorInfo)
            })
        },
    
        // 通过函数进行校验
        validator: function (value) {
            return /1\d{10}/.test(value)
        },

        // 异步函数校验
        asyncValidator: function (value) {
            return new Promise(resolve => {
                Toast.loading({
                    duration: 0,
                    message: '校验中...'
                })

                setTimeout(() => {
                    Toast.clear()
                    resolve(/\d{6}/.test(value))
                }, 3000)
            })
        },

        // 点击完成按钮时触发
        confirm: function (value) {
            this.value4 = value
            this.showPicker = false
        },

        timeConfirm: function (value) {
            this.time = value
            this.showTime = false
        },

        areaConfirm: function (items) {
            this.showArea = false
            this.area = items.filter(item => !!item).map((item) => item.name).join('/')
        },

        formatterDate: function (date) {
            return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
        },

        calendarConfirm: function (date) {
            this.calendar = this.formatterDate(date)
            this.showCalendar = false
        },

        // 文件上传后的回调函数
        afterRead: function (file, detail) {
            console.log(detail)
            file.status = 'uploading'
            file.message = '上传中...'

            setTimeout(() => {
                file.status = 'done'
            }, 3000)
        }

    }
}
</script>

<style scoped>
p {
    padding: 0 25px;
    color: rgb(153, 153, 153);
    text-align: left;
}
</style>