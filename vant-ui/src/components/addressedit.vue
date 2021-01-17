<template>
    <div>
        <p>基础用法</p>
        <van-address-edit 
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :area-columns-placeholder="[ '请选择', '请选择', '请选择' ]"
            :search-result="searchResult"
            @save="onSave"
            @focus="onFocus"
            @delete="onDelete"
            @cancel-delete="onCancelDelete"
            @select-search="onSelectSearch"
            @click-area="onClickArea"
            @change-area="onChangeArea"
            @change-detail="onChangeDetail"
            @change-default="onChangeDefault"
        />
    </div>
</template>

<script>

import areaList from '../assets/js/area'

export default {
    name: 'addressedit',
    data: function () {
        return {
            areaList,
            searchResult: []
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
                type: 'danger',
                message: '点击了保存按钮:' + JSON.stringify(content)
            })
        },

        // 输入框聚焦时触发
        onFocus: function (key) {
            this.$notify({
                type: 'success',
                message: '输入框聚焦时触发:' + key
            })
        },

        // 确认删除地址时触发
        onDelete: function (content) {
            this.$notify({
                type: 'warning',
                message: '确认删除地址时触发:' + JSON.stringify(content)
            })
        },

        // 取消删除地址时触发
        onCancelDelete: function (content) {
            this.$notify({
                type: 'success',
                message: '取消删除地址时触发:' + JSON.stringify(content)
            })
        },

        // 选中搜索结果时触发
        onSelectSearch: function (value) {
            this.$notify({
                type: 'success',
                message: '选中搜索结果时触发'
            })
            console.log(`选中搜索结果时触发${ JSON.stringify(value) }`)
        },

        // 点击收件地区时触发
        onClickArea: function () {
            this.$notify({
                type: 'success',
                message: '点击收件地区时触发'
            })
        },

        // 修改收件地区时触发
        onChangeArea: function (value) {
            this.$notify({
                type: 'danger',
                message: '修改收件地区时触发:' + JSON.stringify(value)
            })
        },

        // 修改详细地址时触发
        onChangeDetail: function (value) {
            this.$notify({
                type: 'success',
                message: '修改详细地址时触发:' + JSON.stringify(value) 
            })

            if (value) {
                this.searchResult = [
                    {
                        name: '新意城C座',
                        address: '上海市闵行区宜山路1618号'
                    },
                    {
                        name: '新意城A座',
                        address: '上海市闵行区宜山路1618号'
                    },
                    {
                        name: '九城湖滨',
                        address: '上海市松江区九亭镇'
                    }
                ]
            } else {
                this.searchResult = []
            }
        },

        // 切换是否使用默认地址时触发
        onChangeDefault: function () {
            this.$notify({
                type: 'danger',
                message: '切换是否使用默认地址时触发'
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