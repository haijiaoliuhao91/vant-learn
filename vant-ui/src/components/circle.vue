<template>
    <div>
        <p>基础用法</p>
        <van-circle v-model="currentRate" :rate="rate" :speed="100" :text="text" />

        <p>样式定制</p>
        <van-circle v-model="currentRate" :rate="rate" :speed="100" :stroke-width="60" text="宽度定制" />
        <br />
        <van-circle v-model="currentRate" :rate="rate" :speed="100" layer-color="#ebedf0" color="red" text="颜色定制" />
        <br />
        <van-circle v-model="currentRate" :rate="rate" :speed="100" text="渐变色" /> 
        <br />
        <van-circle v-model="currentRate" :rate="rate" :speed="100" :clockwise="false" color="green" text="逆时针" />
        <br />
        <van-circle v-model="currentRate" :rate="rate" :speed="100" color="#fe4b52" size="120px" stroke-width="60" text="大小定制" />

        <div>
            <van-button type="primary" @click="increase">增加</van-button>
            <van-button type="danger" @click="decrease">减少</van-button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Circle1',
    data: function () {
        return {
            currentRate: 0,
            rate: 30,
            gradiendColor: {
                '0%': '#1989fa',
                '100%': '#fe4b52'
            }
        }
    },

    // 计算属性
    computed: {
        text: function () {
            return this.currentRate.toFixed(0) + '%'
        }
    },

    // 生命周期钩子

    methods: {
       increase: function () {
           this.rate += 20
           if (this.rate > 100) {
               this.rate = 100
           }
           console.log(this.rate)
       },

       decrease: function () {
           this.rate -= 20
           if (this.rate <= 0) {
               this.rate = 0
           }
           console.log(this.rate)
       }
    }
}
</script>

<style scoped>

</style>