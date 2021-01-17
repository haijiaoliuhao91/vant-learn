<template>
    <div>
        <p>基础用法</p>
        <van-dropdown-menu direction="down">
            <van-dropdown-item v-model="value1" :options="options1" @change="change" />
            <van-dropdown-item v-model="value2" :options="options2" @change="change" />
        </van-dropdown-menu>

        <p>自定义菜单内容</p>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="options1" @change="change" />
            <van-dropdown-item title="筛选" ref="item">
                <van-cell value="包邮">
                    <template #right-icon>
                        <van-switch v-model="switch1" size="24px" active-color="#ee0a24" />
                    </template>
                </van-cell>
                <van-cell value="团购">
                    <template #right-icon>
                        <van-switch v-model="switch2" size="24px" active-color="#ee0a24" />
                    </template>
                </van-cell>
                <div style="padding: 5px 16px;">
                    <van-button type="danger" block round @click="click">确认</van-button>
                </div>
            </van-dropdown-item>
        </van-dropdown-menu>

        <p>自定义选中的颜色</p>
        <van-dropdown-menu active-color="#1989fa">
            <van-dropdown-item v-model="value3" :options="options1" @change="change" />
            <van-dropdown-item v-model="value4" :options="options2" @change="change" />
        </van-dropdown-menu>

        <p>向上展开</p>
        <van-dropdown-menu direction="up">
            <van-dropdown-item v-model="value5" :options="options1" @change="change" />
            <van-dropdown-item v-model="value6" :options="options2" @change="change" />
        </van-dropdown-menu>

        <p>禁用菜单</p>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value7" :options="options1" disabled @change="change" />
            <van-dropdown-item v-model="value8" :options="options2" @change="change" />
        </van-dropdown-menu>
    </div>
</template>

<script>
export default {
    name: 'dropdownmenu',
    data: function () {
        return {
            value1: 0,
            value2: 'a',
            options1: [
                {
                    text: '全部商品',
                    value: 0
                },
                {
                    text: '新款商品',
                    value: 1
                },
                {
                    text: '活动商品',
                    value: 2
                }
            ],
            options2: [
                {
                    text: '默认排序',
                    value: 'a'
                },
                {
                    text: '好评排序',
                    value: 'b'
                },
                {
                    text: '销量排序',
                    value: 'c'
                }
            ],
            switch1: false,
            switch2: false,
            value3: 1,
            value4: 'a',
            value5: 2,
            value6: 'b',
            value7: 1,
            value8: 'a'
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
        // 点击选项导致 value 变化时触发
        change: function (value) {
            this.$notify({
                type: 'success',
                message: JSON.stringify(value)
            })
        },

        click: function () {
            const message = this.switch1 ? (this.switch2 ? '选择了包邮和团购' : '只选择了包邮') : (this.switch2 ? '只选择了团购' : '什么也没选择') 
            this.$notify({
                type: 'warning',
                message: message
            })
            this.$refs.item.toggle()
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