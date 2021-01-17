<template>
    <div>
        <van-tabs v-model="active" swipeable sticky>
            <van-tab title="基础用法">
                <van-index-bar :sticky-offset-top="44">
                    <div v-for="letter in letters" :key="letter">
                        <van-index-anchor :index="letter">{{ letter }}</van-index-anchor>
                        <van-cell v-for="index in 3" :key="index" title="文本" />
                    </div>
                </van-index-bar>
            </van-tab>
            <van-tab title="自定义索引列表">
                <van-index-bar :index-list="indexList" :sticky-offset-top="44">
                    <div v-for="index in indexList" :key="index">
                        <van-index-anchor :index="index">标题{{ index }}</van-index-anchor>
                        <van-cell v-for="value in 3" :key="value" :title="`文本${value}`" />
                    </div>
                </van-index-bar>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    name: 'indexbar',
    data: function () {
        return {
            active: 0,
            letters: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ],
            indexList: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
        }
    }
}
</script>

<style scoped>

</style>