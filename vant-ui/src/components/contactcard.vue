<template>
    <div>
        <p>添加联系人</p>
        <van-contact-card 
            type="add"
            @click="onAdd"
        />

        <p>编辑联系人</p>
        <van-contact-card
            type="edit"
            :name="currentContact.name"
            :tel="currentContact.tel"
            @click="onEdit"
        />

        <p>不可编译</p>
        <van-contact-card
            type="edit"
            :name="currentContact.name"
            :tel="currentContact.tel"
            :editable="false" 
        />

    </div>
</template>

<script>
export default {
    name: 'contactcard',
    data: function () {
        return {
            currentContact: {
                name: '张三',
                tel: '1387387438'
            }
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
        // 点击时触发
        onAdd: function () {
            this.$notify({
                type: 'success',
                message: '添加联系人'
            })
        },

        onEdit: function () {
            this.$notify({
                type: 'warning',
                message: '编辑联系人'
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
