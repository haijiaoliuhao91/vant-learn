<template>
    <div>
        <p>{{ tip }}</p>
        <p>基础用法</p>
        <van-picker 
            title="标题"
            cancel-button-text="取消"
            confirm-button-text="确认"
            show-toolbar
            :columns="columns1"
            @confirm="onConfirm"
            @change="onChange"
            @cancel="onCancel"
        />
        <p>默认选中项</p>
        <van-picker 
            title="标题"
            show-toolbar
            :columns="columns1"
            :default-index="2"
            @confirm="onConfirm"
            @change="onChange"
            @cancel="onCancel"
        />
        <p>多列选项</p>
        <van-picker 
            show-toolbar
            title="标题"
            :columns="columns2"
            @confirm="onConfirm"
            @change="onChange"
            @cancel="onCancel"
        />
        <p>级联选择</p>
        <van-picker 
            show-toolbar
            title="标题"
            :columns="columns3"
            @confirm="onConfirm"
            @change="onChange"
            @cancel="onCancel"
        />
        <p>禁用选项</p>
        <van-picker 
            show-toolbar
            title="标题"
            :columns="columns4"
        />
        <p>动态设置选项</p>
        <van-picker 
            title="标题"
            show-toolbar
            :columns="columns5"
            @confirm="onConfirm"
            @change="onChange1"
            @cancel="onCancel"
        />
        <p>加载状态</p>
        <van-picker 
            show-toolbar
            title="标题"
            :columns="columns5"
            :loading="true"
            @confirm="onConfirm"
            @change="onChange1"
            @cancel="onCancel"
        />
        <p>搭配弹出层使用</p>
        <van-field 
            readonly
            clickable
            label="城市"
            placeholder="选择城市"
            :value="value"
            @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom" round>
            <van-picker 
                show-toolbar
                title="标题"
                :columns="columns1"
                @cancel="showPicker = false"
                @confirm="onConfirm1"
            />
        </van-popup> 
    </div>
</template>

<script>
const cities = {
    浙江: [ '杭州', '宁波', '温州', '嘉兴', '湖州' ],
    福建: [ '福州', '厦门', '莆田', '三明', '泉州' ]
}
console.log(cities)
export default {
    name: 'picker',
    data: function () {
        return {
            tip: 'picker',
            columns1: [ '杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州' ],
            columns2: [
                {
                    values: [ '周一', '周二', '周三', '周四', '周五' ],
                    defaultIndex: 2
                },
                {
                    values: [ '上午', '下午', '晚上' ],
                    defaultIndex: 1
                }
            ],
            columns3: [
                {
                    text: '浙江',
                    children: [
                        {
                            text: '杭州',
                            children: [ { text: '西湖区' }, { text: '余杭区' } ]
                        },
                        {
                            text: '温州',
                            children: [ { text: '鹿城区' }, { text: '瓯海区' } ]
                        }
                    ]
                },
                {
                    text: '福建',
                    children: [
                        {
                            text: '福州',
                            children: [ { text: '鼓楼区' }, { text: '台江区' } ]
                        },
                        {
                            text: '厦门',
                            children: [ { text: '思明区' }, { text: '海沧区' } ]
                        }
                    ]
                }
            ],
            columns4: [
                {
                    text: '杭州',
                    disabled: true
                },
                {
                    text: '宁波'
                },
                {
                    text: '温州'
                }
            ],
            columns5: [ { values: Object.keys(cities) }, { values: cities['浙江'] } ],
            value: '',
            showPicker: false
        }
    },
    
    methods: {
        // 点击完成按钮时触发
        onConfirm: function (value, index) {
            this.$toast(`当前值：${value}, 当前索引：${index}`)
        },

        // 选项改变时触发
        onChange: function (picker, value, index) {
            this.$toast(`当前值：${value}, 当前索引：${index}`)
        },

        onChange1: function (picker, values) {
            console.log(values)
            picker.setColumnValues(1, cities[values[0]])
        },

        // 点击取消时触发
        onCancel: function () {
            this.$toast('取消')
        },

        onConfirm1: function (value) {
            this.value = value
            this.showPicker = false
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