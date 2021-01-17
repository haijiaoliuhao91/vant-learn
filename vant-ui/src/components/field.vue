<template>
    <div>
        <van-cell-group title="基础用法">
            <van-field type="text" v-model="value" label="文本" placeholder="请输入文本" clearable />
        </van-cell-group>

        <van-cell-group title="自定义类型">
            <van-field type="text" v-model="value" label="文本" placeholder="请输入文本" clearable />
            <van-field type="tel" v-model="tel" label="手机号" placeholder="请输入手机号" clearable />
            <van-field type="digit" v-model="digit" label="整数" placeholder="请输入整数" clearable />
            <van-field type="number" v-model="number" label="数字" placeholder="请输入数字（支持小数）" clearable />
            <van-field type="password" v-model="password" label="密码" placeholder="请输入密码" clearable />
        </van-cell-group>

        <van-cell-group title="禁用输入框">
            <van-field type="text" label="文本" value="输入框只读" readonly />
            <van-field type="text" label="文本" value="禁用输入框" disabled />
        </van-cell-group>

        <van-cell-group title="显示图标">
            <van-field type="text" v-model="value1" label="文本" left-icon="smile-o" right-icon="warning-o" placeholder="显示图标" clearable />
            <van-field type="text" v-model="value2" label="文本" left-icon="music-o" clearable />
        </van-cell-group>

        <van-cell-group title="错误提示">
            <van-field type="text" v-model="value3" label="用户名" placeholder="请输入用户名" error clearable required />
            <van-field type="tel" v-model="tel1" label="手机号" placeholder="请输入手机号" clearable required error-message="手机号格式错误" error-message-align="left" />
        </van-cell-group>

        <van-cell-group title="插入按钮">
            <van-field type="text" v-model="sms" label="短信验证码" placeholder="请输入短信验证码" clearable center>
                <template #button>
                    <van-button type="primary">发送验证码</van-button>
                </template>
            </van-field>
        </van-cell-group>

        <van-cell-group title="格式化输入内容">
            <van-field type="text" v-model="value4" label="文本" placeholder="在输入时执行格式化" clearable :formatter="formatter" format-trigger="onChange" />
            <van-field type="text" v-model="value5" label="文本" placeholder="在失焦时执行格式化" clearable :formatter="formatter" format-trigger="onBlur" />
        </van-cell-group>

        <van-cell-group title="高度自适应">
            <van-field  type="textarea" v-model="value6" label="留言" placeholder="请输入留言" clearable autosize rows="1" />
        </van-cell-group>

        <van-cell-group title="显示字数统计">
            <van-field type="textarea" v-model="message" label="留言" placeholder="请输入留言" maxlength="50" clearable autosize show-word-limit center />
        </van-cell-group>

        <van-cell-group title="输入框内容对齐">
            <van-field type="text" v-model="value7" label="文本" placeholder="输入框文本右对齐" input-align="right" clearable />
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'field',
    data: function () {
        return {
            tip: 'field',
            value: '',
            tel: '',
            digit: '',
            number: '',
            password: '',
            value1: '',
            value2: '123',
            value3: '',
            tel1: '123',
            sms: '',
            value4: '',
            value5: '',
            value6: '',
            message: '',
            value7: ''
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
        formatter: function (value) {
            return value.replace(/\d/g, '')
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
</style>