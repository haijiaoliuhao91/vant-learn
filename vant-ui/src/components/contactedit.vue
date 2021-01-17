<template>
    <div>
        <p>基础用法</p>
        <van-contact-edit
            :contact-info="contactInfo"
            show-set-default
            is-edit
            :is-saving="issaving"
            :is-deleting="isdeleting"
            set-default-label="设为默认联系人" 
            @save="onSave"
            @delete="onDelete"
        />

    </div>
</template>

<script>
export default {
    name: 'contactedit',
    data: function () {
        return {
            contactInfo: {
                name: '张三',
                tel: '18838197429'
            },
            issaving: false,
            isdeleting: false
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
        // 点击保存按钮时触发
        onSave: function (content) {
            this.$notify({
                type: 'success',
                message: '点击保存按钮时触发:' + JSON.stringify(content)
            })
            this.issaving = true
            setTimeout(() => {
                this.issaving = false
            }, 3000)
        },

        // 点击删除按钮时触发
        onDelete: function (content) {
            this.$notify({
                type: 'warning',
                message: '点击删除按钮时触发:' + JSON.stringify(content)
            })
            this.isdeleting = true
            setTimeout(() => {
                this.isdeleting = false
            }, 3000)
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