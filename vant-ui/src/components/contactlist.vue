<template>
    <div>
        <p>基础用法</p>
        <van-contact-list
            v-model="addressId" 
            :list="list"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
            @select="onSelect"
        />
    </div>
</template>

<script>
export default {
    name: 'contactlist',
    data: function () {
        return {
            addressId: '2',
            list: [
                {
                    id: '1',
                    name: '张三',
                    tel: '18838197429',
                    isDefault: false
                },
                {
                    id: '2',
                    name: '李四',
                    tel: '1387387438',
                    isDefault: true
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
        console.log('beforeUpdate')
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
        // 点击新增按钮时触发
        onAdd: function () {
            this.$notify({
                type: 'success',
                message: '点击了新增按钮'
            })
        },

        // 点击编辑按钮时触发
        onEdit: function (contact, index) {
            this.$notify({
                type: 'warning',
                message: '点击了编辑按钮:' + JSON.stringify(contact) + '-' + index
            })
        },

        // 切换选中的联系人时触发
        onSelect: function (contact, index) {
            this.$notify({
                type: 'danger',
                message: '切换选中的联系人时触发:' + JSON.stringify(contact) + '-' + index
            })
        }
    }
}
</script>

<style scoped>
p {
    padding: 0 25px;
    text-align: left;
}
</style>