<template>
    <div>
        <p>{{ tip }}</p>
        <p>基础用法</p>
        <van-address-list 
            v-model="choosenAddressId"
            :list="list"
            :disabled-list="disabledList"
            disabled-text="以下地址超出配送范围"
            default-tag-text="默认"
            @add="add"
            @edit="edit"
            @select="select"
            @edit-disabled="editDisabled"
            @select-disabled="selectDisabled"
            @click-item="clickItem"
        />
    </div>
</template>

<script>
export default {
    name: 'addressList',
    data: function () {
        return {
            tip: 'addressList',
            choosenAddressId: '1',
            list: [
                {
                    id: '1',
                    name: '张三',
                    tel: '18838197439',
                    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7楼501室',
                    isDefault: true
                },
                {
                    id: '2',
                    name: '李四',
                    tel: '18521336529',
                    address: '浙江省杭州市拱墅区莫干山路 50 号'
                }
            ],
            disabledList: [
                {
                    id: '3',
                    name: '王五',
                    tel: '18823131831',
                    address: '浙江省杭州市滨江区江南大道 15 号'
                },
                {
                    id: '4',
                    name: '武大郎',
                    tel: '13873874381',
                    address: '上海市闵行区宜山路1618号'
                }
            ]
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

    methods: {
        // 点击新增按钮时触发
        add: function (item, index) {
            console.log(item)
            console.log(index)
            this.$toast('新增地址')
        },

        // 点击编辑按钮时触发
        edit: function (item, index) {
            console.log(item)
            console.log(index)
            this.$toast('编辑')
        },

        // 切换选中的地址时触发
        select: function (item, index) {
            console.log(item)
            console.log(index)
            this.$toast('切换')
        },

        // 编辑不可配送的地址时触发
        editDisabled: function (item, index) {
            console.log(item)
            console.log(index)
            this.$toast('编辑不可配送的地址')
        },

        // 选中不可配送的地址时触发
        selectDisabled: function (item, index) {
            console.log(item)
            console.log(index)
            this.$toast('选中不可配送的地址时触发')
        },

        // 点击任意地址时触发
        clickItem: function (item, index) {
            console.log(item)
            console.log(index)
            this.$toast('点击任意地址时触发')
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