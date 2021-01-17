<template>
    <div>
        <!-- 优惠券单元格 -->
        <van-cell-group title="基础用法">
            <van-coupon-cell
                :chosen-coupon="chosenCoupon"
                :coupons="coupons"
                :border="false"
                @click="showList = true"
            />
        </van-cell-group>

        <!-- 优惠券列表 -->
        <van-popup
            v-model="showList"
            round
            position="bottom"
            style="height: 90%;padding-top: 4px;"
        >
            <van-coupon-list
                v-model="code"
                :coupons="coupons" 
                :disabled-coupons="disabledCoupons"
                :chosen-coupon="chosenCoupon"
                @change="change"
                @exchange="exchange"
            />
        </van-popup>
    </div>
</template>

<script>
const coupons = [
    {
        id: 1,
        name: '优惠券名称',
        condition: '无使用门槛\n最多优惠12元',
        startAt: 1608777538,
        endAt: 1609295938,
        description: '描述信息',
        value: 150,
        valueDesc: '1.5',
        unitDesc: '元',
    },
    {
        id: 2,
        name: '优惠券名称',
        condition: '无使用门槛\n最多优惠12元',
        startAt: 1609295938,
        endAt: 1611196738,
        description: '描述信息',
        value: 12,
        valueDesc: '8.8',
        unitDesc: '折'
    }
]

const disabledCoupons = [
    {
        id: 3,
        name: '优惠券名称',
        condition: '无使用门槛\n最多优惠12元',
        startAt: 1609295938,
        endAt: 1611196738,
        reason: '优惠券不可用原因',
        value: 150,
        valueDesc: '1.5',
        unitDesc: '元'
    },
    {
        id: 4,
        name: '优惠券名称',
        condition: '无使用门槛\n可叠加使用',
        startAt: 1609295938,
        endAt: 1611196738,
        reason: '优惠券不可用原因',
        value: 240,
        valueDesc: '1',
        unitDesc: '折'
    }
]

export default {
    name: 'coupon',
    data: function () {
        return {
            chosenCoupon: -1,
            showList: false,
            code: '',
            coupons,
            disabledCoupons
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
        // 优惠券切换回调
        change: function (index) {
            this.$notify({
                type: 'danger',
                message: '选中优惠券的索引:' + index
            })
            this.chosenCoupon = index
            this.showList = false
        },

        // 优惠券兑换回调
        exchange: function (code) {
            this.$notify({
                type: 'warning',
                message: '兑换码是:' + code
            })
        }
    }
}
</script>

<style scoped>

</style>