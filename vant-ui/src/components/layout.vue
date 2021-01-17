<template>
    <div>
        <div>
            <p>基础用法</p>
            <van-row @click="rowClick">
                <van-col span="8" style="height: 40px;background-color: red;color: white;line-height: 40px;">span:8</van-col>
                <van-col span="8" style="height: 40px;background-color: blue;color: white;line-height: 40px;">span:8</van-col>
                <van-col span="8" style="height: 40px;background-color: green;color: white;line-height: 40px;">span:8</van-col>
            </van-row>
            <van-row>
                <van-col span="4" style="height: 40px;background-color: red;color: white;line-height: 40px;" @click="colClick">span:4</van-col>
                <van-col offset="4" span="10" style="height: 40px;background-color: green;color: white;line-height: 40px;">offset:4,span:10</van-col>
            </van-row>
            <van-row>
                <van-col offset="12" span="12" style="height: 40px;background-color: cyan;color: white;line-height: 40px;">offset:12,span:12</van-col>
            </van-row>
        </div>
        <div>
            <p>在元素之间增加间距</p>
            <van-row gutter="20">
                <van-col span="8" style="height: 40px;color: white;line-height: 40px;">
                    <div style="background-color: red;">span:8</div>
                </van-col>
                <van-col span="8" style="height: 40px;color: white;line-height: 40px;">
                    <div style="background-color: green;">span:8</div>
                </van-col>
                <van-col span="8" style="height: 40px;color: white;line-height: 40px;">
                    <div style="background-color: blue;">span:8</div>
                </van-col>
            </van-row>
        </div>
        <div>
            <p>Flex布局</p>
            <van-row type="flex">
                <van-col span="6" style="height: 40px;color: white;line-height: 40px;">
                    <div style="background-color: green;">span:6</div>
                </van-col>
                <van-col span="6" style="height: 40px;color: white;line-height: 40px;">
                    <div style="background-color: blue;">span:6</div>
                </van-col>
                <van-col span="6" style="height: 40px;color: white;line-height: 40px;">
                    <div style="background-color: green;">span:6</div>
                </van-col>
            </van-row>

            <van-row type="flex" justify="center">
                <van-col span="6" style="height: 40px;line-height: 40px;color: white"><div style="background-color: red;">span:6</div></van-col>
                <van-col span="6" style="height: 40px;line-height: 40px;color: white"><div style="background-color: green;">span:6</div></van-col>
                <van-col span="6" style="height: 40px;line-height: 40px;color: white"><div style="background-color: blue;">span:6</div></van-col>
            </van-row>

            <van-row type="flex" justify="end">
                <van-col span="6" style="height: 40px;line-height: 40px;color: white"><div style="background-color: red;">span:6</div></van-col>
                <van-col span="6" style="height: 40px;line-height: 40px;color: white"><div style="background-color: green;">span:6</div></van-col>
                <van-col span="6" style="height: 40px;line-height: 40px;color: white"><div style="background-color: blue;">span:6</div></van-col>
            </van-row>

            <van-row type="flex" justify="space-around">
                <van-col span="6" style="height: 40px;line-height: 40px;color: white"><div style="background-color: red;">span:6</div></van-col>
                <van-col span="6" style="height: 40px;line-height: 40px;color: white"><div style="background-color: green;">span:6</div></van-col>
                <van-col span="6" style="height: 40px;line-height: 40px;color: white"><div style="background-color: blue;">span:6</div></van-col>
            </van-row>

            <van-row type="flex" justify="space-between">
                <van-col span="6" style="height: 40px;line-height: 40px;color: white"><div style="background-color: red;">span:6</div></van-col>
                <van-col span="6" style="height: 40px;line-height: 40px;color: white"><div style="background-color: green;">span:6</div></van-col>
                <van-col span="6" style="height: 40px;line-height: 40px;color: white"><div style="background-color: blue;">span:6</div></van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'layout',
    data: function () {
        return {
            msg: 'Layout'
        }
    },

    methods: {
        rowClick: function (e) {
            console.log('点击了行', e)
        },

        colClick: function (e) {
            console.log('点击了列', e)
        }
    }
}
</script>

<style scoped>
</style>