<template>
    <div>
        <p>基础用法</p>
        <van-swipe-cell>
            <template #left>
                <van-button square type="primary" text="选择" />
            </template>
            <van-cell title="单元格" value="内容" />
            <template #right>
                <van-button square type="danger" text="删除" />
                <van-button square type="primary" text="收藏" />
            </template>
        </van-swipe-cell>

        <p>自定义内容</p>
        <van-swipe-cell>
            <van-card 
                num="2"
                price="2.00"
                title="商品标题"
                desc="描述信息"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                class="goods-card"
            />
            <template #right>
                <Van-button type="danger" square text="删除" class="delete-button" />
            </template>
        </van-swipe-cell>

        <p>异步关闭</p>
        <van-swipe-cell @click="click" :before-close="beforeClose">
            <template #left>
                <van-button type="primary" square text="选择" />
            </template>
            <van-cell title="单元格" value="内容" />
            <template #right>
                <van-button type="danger" square text="删除" />
            </template>
        </van-swipe-cell>

    </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
    name: 'swipecell',
    data: function () {
        return {

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
        click: function (position) {
            this.$notify({
                type: 'success',
                message: position
            })
        },

        // 关闭前的回调函数
        beforeClose: function ({ position, instance }) {
            switch (position) {
                case 'left':
                case 'cell':
                case 'outside':
                    instance.close()
                    break;
                case 'right':
                    Dialog.confirm({
                        message: '确定要删除吗?'
                    }).then(() => {
                        instance.close()
                    }).catch(() => {
                        
                    })
                    break;
            }
        }
    }
}
</script>

<style scoped>
p {
    font-size: 14px;
    color: rgb(153, 153, 153);
    padding: 0 25px;
    text-align: left;
}

.goods-card {
    margin: 0;
    background-color: #fff;
}

.delete-button {
    height: 100%;
}
</style>