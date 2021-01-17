<template>
    <div>
        <p>基础用法</p>
        <van-button type="primary" text="基础用法" block @click="show1 = true" />
        <van-sku
            v-model="show1"
            :sku="sku1" 
            :goods="goods1"
            :hide-stock="sku1.hide_stock"
            :start-sale-num="sku1.start_sale_num"
            :quota="sku1.quota"
            :properties="properties"
        />
    </div>
</template>

<script>
const sku1 = {
    tree: [
        {
            k: '颜色',
            k_s: 's1',
            v: [
                {
                    id: '1',
                    name: '粉色',
                    imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
                    previewImgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-1.png'
                },
                {
                    id: '2',
                    name: '黄色',
                    imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-2.png',
                    previewImgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-2.png'
                },
                {
                    id: '3',
                    name: '蓝色',
                    imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-3.png',
                    previewImgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-3.png'
                }
            ],
            largeImageMode: false
        },
        {
            k: '尺寸',
            k_s: 's2',
            v: [
                {
                    id: '11',
                    name: '大'
                },
                {
                    id: '22',
                    name: '小'
                }
            ]
        }
    ],

    list: [
        {
            id: 1111,
            s1: '1',
            s2: '11',
            price: 100,
            stock_num: 110
        },
        {
            id: 1112,
            s1: '1',
            s2: '22',
            price: 112,
            stock_num: 90
        },
        {
            id: 1113,
            s1: '2',
            s2: '11',
            price: 111,
            stock_num: 122
        },
        {
            id: 1114,
            s1: '2',
            s2: '22',
            price: 189,
            stock_num: 119
        }
    ],
    price: 1.12,
    stock_num: 90,
    collection_id: 1112,
    start_sale_num: 2,
    quota: 5,
    hide_stock: false,
    none_sku: false,
    messages: [
        {
            name: '留言1',
            type: 'text',
            required: 1,
            multiple: '0',
            placeholder: '商品留言'
        },
        {
            name: '留言2',
            type: 'id_no',
            required: '0',
            placeholder: '请填写身份证号'
        },
        {
            name: '留言3',
            type: 'file',
            accept: 'image/*'
        },
        {
            name: '留言4',
            type: 'text',
            required: '0',
            multiple: '1',
            placeholder: '请填写留言'
        },
        {
            name: '数字',
            type: 'number',
            required: '0',
            placeholder: '请填写数字'
        },
        {
            name: '邮件',
            type: 'email',
            required: '0',
            placeholder: '请填写邮件'
        },
        {
            name: '日期',
            type: 'date',
            required: '0',
            placeholder: '请选择日期'
        },
        {
            name: '时间',
            type: 'time',
            required: '0',
            placehoder: '请选择时间',
            datetime: '0'
        }
    ]
}

const goods1 = {
    picture: 'https://b.yzcdn.cn/vant/sku/shoes-1.png'
}

const properties = [
    {
        k_id: 2111,
        k: '加料',
        is_multiple: true,
        v: [
            {
                id: 2222,
                name: '珍珠',
                price: 1
            },
            {
                id: 2223,
                name: '波霸',
                price: 100
            },
            {
                id: 2224,
                name: '布丁',
                price: 2
            }
        ]
    }
]

export default {
    name: 'sku',
    data: function () {
        return {
            show1: false,
            sku1,
            goods1,
            properties
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
        console.log('munted')
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

<style scoped>
p {
    padding: 0 25px;
    text-align: left;
}
</style>