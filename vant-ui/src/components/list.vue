<template>
    <div>
        <van-tabs swipeable sticky>
            <van-tab title="基础用法">
                <van-list
                    v-model="loading1"
                    :finished="finished1"
                    finished-text="没有更多了"
                    @load="onLoad1"
                >
                    <van-cell v-for="item in lists1" :key="item" :title="item" />
                </van-list>
            </van-tab>
            <van-tab title="错误提示">
                <van-list
                    v-model="loading2"
                    :finished="finished2"
                    :error.sync="error"
                    error-text="加载失败，请重试"
                    finished-text="没有更多了"
                    @load="onLoad2"
                >
                    <van-cell v-for="item in lists2" :key="item" :title="item" />
                </van-list>
            </van-tab>
            <van-tab title="下拉刷新">
                <van-pull-refresh
                    v-model="refreshing"
                    @refresh="onRefresh"
                >
                    <van-list
                        v-model="loading3"
                        :finished="finished3"
                        finished-text="没有更多了"
                        @load="onLoad3"
                    >
                        <van-cell v-for="item in lists3" :key="item" :title="item" />
                    </van-list>
                </van-pull-refresh>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    name: 'list',
    data: function () {
        return {
            loading1: false,
            finished1: false,
            lists1: [],
            loading2: false,
            finished2: false,
            error: false,
            lists2: [],
            refreshing: false,
            loading3: false,
            finished3: false,
            lists3: []
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
        for (let i = 0; i < 10; i++) {
            this.lists2.push(this.lists2.length + 1)
        }
        this.error = true
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
        onLoad1: function () {
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.lists1.push(this.lists1.length + 1)
                }
                this.loading1 = false

                if (this.lists1.length >= 60) {
                    this.finished1 = true
                }
            }, 3000)
        },

        onLoad2: function () {
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.lists2.push(this.lists2.length + 1)
                }
                this.loading2 = false

                if (this.lists2.length >= 60) {
                    this.finished2 = true
                }
            }, 3000)
        },

        onRefresh: function () {
            this.finished3 = false

            this.loading3 = true
            this.onLoad3()
        },

        onLoad3: function () {
            setTimeout(() => {
                if (this.refreshing) {
                    this.$notify('refreshing')
                    this.lists3 = []
                    this.refreshing = false
                }
                for (let i = 0; i < 10; i++) {
                    this.lists3.push(this.lists3.length + 1)
                }
                this.loading3 = false

                if (this.lists3.length >= 60) {
                    this.finished3 = true
                }
            }, 3000)
        }
    }

}
</script>

<style scoped>

</style>