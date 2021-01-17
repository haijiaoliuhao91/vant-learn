<template>
    <div class="container">
        <p>基础用法</p>
        <van-checkbox v-model="checked1">复选框</van-checkbox>
        <p>禁用状态</p>
        <van-checkbox v-model="checked2" disabled>复选框</van-checkbox>
        <van-checkbox v-model="checked3" disabled>复选框</van-checkbox>
        <p>自定义形状</p>
        <van-checkbox v-model="checked4" shape="squre">自定义形状</van-checkbox>
        <p>自定义颜色</p>
        <van-checkbox v-model="checked5" checked-color="red">自定义颜色</van-checkbox>
        <p>自定义大小</p>
        <van-checkbox v-model="checked6" icon-size="30px">自定义大小</van-checkbox>
        <p>自定义图标</p>
        <van-checkbox v-model="checked7">
            自定义图标
            <template #icon>
                <img class="img-icon" :src="checked7 ? activeIcon : inactiveIcon" />
            </template>
        </van-checkbox>
        <p>禁用文本点击</p>
        <van-checkbox v-model="checked8" label-disabled>禁用文本点击</van-checkbox>
        <p>复选框组</p>
        <van-checkbox-group v-model="result">
            <van-checkbox name="a">复选框a</van-checkbox>
            <van-checkbox name="b">复选框b</van-checkbox>
        </van-checkbox-group>
        <p>水平排列</p>
        <van-checkbox-group v-model="result1"  direction="horizontal">
            <van-checkbox name="a">复选框a</van-checkbox>
            <van-checkbox name="b">复选框b</van-checkbox>
        </van-checkbox-group>
        <p>限制最大可选数</p>
        <van-checkbox-group v-model="result2" max="2">
            <van-checkbox name="a">复选框a</van-checkbox>
            <van-checkbox name="b">复选框b</van-checkbox>
            <van-checkbox name="c">复选框c</van-checkbox>
        </van-checkbox-group>
        <p>全选与反选</p>
        <van-checkbox-group v-model="result3" ref="checkboxGroup">
            <van-checkbox name="a">复选框a</van-checkbox>
            <van-checkbox name="b">复选框b</van-checkbox>
            <van-checkbox name="c">复选框c</van-checkbox>
        </van-checkbox-group>
        <p>
            <van-button type="primary" @click="checkAll">全选</van-button>
            <van-button type="info" @click="toggleAll">反选</van-button>
        </p>
        <van-checkbox-group v-model="result4">
            <van-cell-group title="搭配单元格组件使用">
                <van-cell
                    v-for="(item, index) in lists"
                    clickable
                    :key="item"
                    :value="`复选框 ${item}`"
                    @click="toggle(index)"
                >
                    <template #right-icon>
                        <van-checkbox :name="item" ref="checkboxes" />
                    </template>
                </van-cell>
        </van-cell-group>
        </van-checkbox-group>
    </div>
</template>

<script>
export default {
    name: 'checkbox',
    data: function () {
        return {
            tip: 'checkbox',
            checked1: false,
            checked2: false,
            checked3: true,
            checked4: false,
            checked5: false,
            checked6: false,
            checked7: false,
            activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
            inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
            checked8: false,
            result: [],
            result1: [],
            result2: [],
            result3: [],
            result4: [],
            lists: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
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
        checkAll: function () {
            this.$refs.checkboxGroup.toggleAll(true)
        },

        toggleAll: function () {
            this.$refs.checkboxGroup.toggleAll()
        },

        toggle: function (index) {
            this.$refs.checkboxes[index].toggle()
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
    font-size: 16px;
    font-weight: bold;
    text-align: left;
}

.img-icon {
    height: 20px;
}
</style>