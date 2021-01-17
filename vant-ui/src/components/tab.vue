<template>
    <div>
        <p>基础用法</p>
        <van-tabs v-model="active1" @click="onClick" @change="onChange">  
            <van-tab name="tab1" title="标签1"><div class="content">内容1</div></van-tab>
            <van-tab name="tab2" title="标签2"><div class="content">内容2</div></van-tab>
            <van-tab name="tab3" title="标签3"><div class="content">内容3</div></van-tab>
            <van-tab name="tab4" title="标签4"><div class="content">内容4</div></van-tab>
        </van-tabs>

        <p>通过名称匹配</p>
        <van-tabs v-model="active2" @click="onClick">
            <van-tab name="tab1" title="标签1"><div class="content">内容1</div></van-tab>
            <van-tab name="tab2" title="标签2"><div class="content">内容2</div></van-tab>
            <van-tab name="tab3" title="标签3"><div class="content">内容3</div></van-tab>
        </van-tabs>

        <p>标签栏滚动</p>
        <van-tabs v-model="active3" @click="onClick">
            <van-tab v-for="index in 8" :key="index" :title="`标签${index}`"><div class="content">内容{{ index }}</div></van-tab>
        </van-tabs>

        <p>禁用标签</p>
        <van-tabs v-model="active4" @click="onClick" @disabled="onDisabled">
            <van-tab name="tab1" title="标签1"><div class="content">内容1</div></van-tab>
            <van-tab name="tab2" title="标签2" disabled><div class="content">内容2</div></van-tab>
            <van-tab name="tab3" title="标签3"><div class="content">内容3</div></van-tab>
        </van-tabs>

        <p>样式风格</p>
        <van-tabs v-model="active5" type="card" @click="onClick">
            <van-tab name="tab1" title="标签1"><div class="content">内容1</div></van-tab>
            <van-tab name="tab2" title="标签2"><div class="content">内容2</div></van-tab>
            <van-tab name="tab3" title="标签3"><div class="content">内容3</div></van-tab>
        </van-tabs>

        <p>点击事件</p>
        <van-tabs v-model="active6" @click="onClick">
            <van-tab v-for="index in 5" :key="index" :name="`tab${index}`" :title="`标签${index}`"><div class="content">内容{{ index }}</div></van-tab>
        </van-tabs>

        <p>粘性布局</p>
        <van-tabs v-model="active7" sticky @click="onClick">
            <van-tab v-for="index in 8" :key="index" :name="`tab${index}`" :title="`标签${index}`"><div class="content">内容{{ index }}</div></van-tab>
        </van-tabs>

        <p>自定义标签</p>
        <van-tabs v-model="active8" @click="onClick">
            <van-tab v-for="index in 8" :key="index" :name="`tab${index}`">
                <template #title>
                    <van-icon name="more-o" /> 标签{{ index }}
                </template>
                <div class="content">内容{{ index }}</div>
            </van-tab>
        </van-tabs>

        <p>切换动画</p>
        <van-tabs v-model="active9" animated @click="onClick">
            <van-tab v-for="index in 8" :key="index" :name="`tab${index}`" :title="`标签${index}`"><div class="content">内容{{ index }}</div></van-tab>
        </van-tabs>

        <p>滑动切换</p>
        <van-tabs v-model="active10" swipeable @click="onClick">
            <van-tab v-for="index in 8" :key="index" :name="`tab${index}`" :title="`标签${index}`"><div class="content">内容{{ index }}</div></van-tab>
        </van-tabs> 

        <p>滚动切换</p>
        <van-tabs v-model="active11" scrollspy sticky @click="onClick">
            <van-tab v-for="index in 8" :key="index" :name="`tab${index}`" :title="`标签${index}`"><div class="content">内容{{ index }}</div></van-tab>
        </van-tabs>

       <p>异步切换</p>
       <van-tabs v-model="active12" :before-change="beforeChange">
           <van-tab v-for="index in 4" :key="index" :name="`tab${index}`" :title="`标签${index}`"><div class="content">内容{{ index }}</div></van-tab>
       </van-tabs>

    </div>
</template>

<script>
export default {
    name: 'tab',
    data: function () {
        return {
            active1: 2,
            active2: 'tab2',
            active3: 1,
            active4: 2,
            active5: 0,
            active6: 0,
            active7: 1,
            active8: 2,
            active9: 1,
            active10: 1,
            active11: 1,
            active12: 0
        }
    },

    methods: {
        // 点击标签时触发
        onClick: function (name, title) {
            this.$notify({
                type: 'success',
                message: `name: ${name}, title: ${title}`
            })
        },

        // 当前激活的标签改变时触发
        onChange: function (name, title) {
            this.$notify({
                type: 'warning',
                message: `name: ${name}, title: ${title}`
            })
        },

        // 点击被禁用的标签时触发
        onDisabled: function (name, title) {
            this.$notify({
                type: 'danger',
                message: `标签${title}被禁用`
            })
        },

        // 切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise
        beforeChange: function (name) {
            this.$notify(`name:${name}`)
            // 返回 false 表示阻止此次切换
            if (name === 'tab1') {
                return false
            }
            
            // 返回 Promise 来执行异步逻辑
            return new Promise((resolve) => {
                resolve(name != 'tab3')
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

.content {
    background-color: white;
    padding: 30px;
}
</style>

