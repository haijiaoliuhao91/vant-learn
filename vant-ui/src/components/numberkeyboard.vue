<template>
    <div class="container">
        <p>{{ tip }}</p>
        <van-number-keyboard :show="show1" @blur="show1 = false" @input="onInput" @delete="onDelete" @close="onClose" :hide-on-click-outside="true" />
        <van-number-keyboard :show="show2" @blur="show2 = false" @input="onInput" @delete="onDelete" @close="onClose" extra-key="." theme="custom" close-button-text="完成" />
        <van-number-keyboard :show="show3" @blur="show3 = false" @input="onInput" @delete="onDelete" @close="onClose" extra-key="X" close-button-text="完成" />
        <van-number-keyboard :show="show4" @blur="show4 = false" @input="onInput" @delete="onDelete" @close="onClose" close-button-text="完成" title="键盘标题" />
        <van-number-keyboard :show="show5" @blur="show5 = false" @input="onInput" @delete="onDelete" @close="onClose" theme="custom" close-button-text="完成" :extra-key="['00', '.']" />
        <van-number-keyboard :show="show6" @blur="show6 = false" @input="onInput" @delete="onDelete" @close="onClose" v-model="value" extra-key="." theme="custom" close-button-text="完成" />
        <van-cell-group :border="true">
            <van-cell value="弹出默认键盘" is-link @touchstart.native.stop="show1 = true" />
            <van-cell value="弹出带右侧栏的键盘" is-link @touchstart.native.stop="show2 = true" />
            <van-cell value="弹出身份证号键盘" is-link @touchstart.native.stop="show3 = true" />
            <van-cell value="弹出带标题的键盘" is-link @touchstart.native.stop="show4 = true" />
            <van-cell value="弹出配置多个按键的键盘" is-link @touchstart.native.stop="show5 = true" />
            <van-field type="text" label="双向绑定" placeholder="点此输入" :value="value" readonly @touchstart.native.stop="show6 = true" />
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'numberkeyboard',
    data: function () {
        return {
            tip: 'numberkeyboard',
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false,
            value: ''
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
        // 点击按键时触发
        onInput: function (value) {
            this.$toast(value)
        },

        // 点击删除键时触发
        onDelete: function () {
            this.$toast('删除')
        },

        // 点击关闭按钮时触发
        onClose: function () {
            this.$toast('点击关闭按钮')
        }
    }
}
</script>

<style scoped>
.container {
    background-color: yellow;
    height: 812px;
}

p {
    color: red;
    font-size: 18px;
    font-weight: bold;
}
</style>