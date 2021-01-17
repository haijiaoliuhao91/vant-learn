<template>
    <div>
        <p>{{ title }}</p>
        <van-button type="info" text="按钮" @click="itemClick" />
    </div>
</template>

<script>
export default {
    name: 'Hello',
    props: [ 'title', 'itemClick' ],
    data: function () {
        return {

        }
    },

    // 计算属性
    computed: {

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

    }
}
</script>

<style lang="less" scoped>
@default-text-color: green;
@default-font-size: 18px;

.border(@width: 2px, @style: solid, @color: red) {
    border: @arguments;
}

.border-radius {
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

p {
    color: @default-text-color;
    font-size: @default-font-size;
    .border(1px, dashed, green);
    .border-radius();
}

</style>