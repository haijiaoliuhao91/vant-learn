<template>
    <div>
        <p>基础用法</p>
        <div class="container">
            <van-cell-group>
                <van-cell title="单元格" value="内容" />
                <van-cell title="单元格" value="内容" label="描述信息" />
            </van-cell-group>
        </div>
        <p>单元格大小</p>
        <div class="container">
            <van-cell title="单元格" value="内容" size="large" />
            <van-cell title="单元格" value="内容" label="描述信息" size="large" />
        </div>
        <p>展示图标</p>
        <div>
            <van-cell title="单元格" value="内容" icon="location-o" />
        </div>
        <p>只设置value</p>
        <div>
            <van-cell value="内容" />
        </div>
        <p>展示箭头</p>
        <div>
            <van-cell title="单元格" is-link />
            <van-cell title="单元格" value="内容" is-link />
            <van-cell title="单元格" value="内容" is-link arrow-direction="down" />
        </div>
        <p>页面导航</p>
        <div>
            <van-cell title="URL跳转" is-link url="https://www.baidu.com" />
            <van-cell title="路由跳转" is-link to="/button" />
        </div>
        <p>分组标题</p>
        <div>
            <van-cell-group title="分组1">
                <van-cell title="单元格" value="内容" />
            </van-cell-group>
            <van-cell-group title="分组2">
                <van-cell title="单元格" value="内容" />
            </van-cell-group>
        </div>
        <p>使用插槽</p>
        <div>
            <van-cell value="内容" is-link>
                <template #title>
                    <span class="custom-title">单元格</span>
                    <van-tag type="danger">标签</van-tag>
                </template>
            </van-cell>
            <van-cell title="单元格" icon="shop-o">
                <template #right-icon>
                    <Van-icon name="search" class="search-icon" />
                </template>
            </van-cell>
        </div>
        <p>垂直居中</p>
        <div>
            <van-cell title="单元格" value="内容" label="描述信息" center />
        </div>
    </div>
</template>

<script>
export default {
    name: 'cell'
}
</script>

<style scoped>
p {
    color: gray;
    text-align: left;
    margin: 0 10px;
    height: 40px;
    line-height: 40px;
}

.custom-title {
    margin-right: 4px;
    vertical-align: middle;
}

.search-icon {
    font-size: 16px;
    line-height: inherit;
}
</style>
