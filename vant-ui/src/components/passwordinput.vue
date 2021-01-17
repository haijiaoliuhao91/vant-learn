<template>
    <div>
        <p>{{ tip }}</p>
        <p>基础用法</p>
        <!-- 密码输入框 -->
        <van-password-input 
            :value="value"
            :focused="showKeyboard"
            @focus="showKeyboard = true"
        />
        <p>自定义长度</p>
        <!-- 密码输入框 -->
        <van-password-input 
            :value="value"
            :focused="showKeyboard"
            length="4"
            @focus="showKeyboard = true"
        />
        <p>格子间距</p>
        <!-- 密码输入框 -->
        <van-password-input 
            :value="value"
            :focused="showKeyboard"
            gutter="10px"
            @focus="showKeyboard = true"
        />
        <p>明文展示</p>
        <!-- 密码输入框 -->
        <van-password-input
            :value="value"
            :focused="showKeyboard"
            :mask="false"
            @focus="showKeyboard = true"
        />
        <p>提示信息</p>
        <van-password-input 
            :value="value"
            :focused="showKeyboard"
            info="密码为6为数字"
            @focus="showKeyboard = true"
        />
        <!-- 数字键盘 -->
        <van-number-keyboard 
            v-model="value"
            :show="showKeyboard"
            @blur="showKeyboard = false"
        />
    </div>
</template>

<script>
export default {
    name: 'passwordinput',
    data: function () {
        return {
            tip: 'passwordinput',
            value: '123',
            showKeyboard: false
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