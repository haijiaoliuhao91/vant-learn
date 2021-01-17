<template>
  <div class="container">
    <van-cell-group title="基础用法" :border="true">
      <van-cell value="文字提示" is-link @click="toast1" />
      <van-cell value="加载提示" is-link @click="toast2" />
      <van-cell value="成功提示" is-link @click="toast3" />
      <van-cell value="失败提示" is-link @click="toast4" />
    </van-cell-group>

    <van-cell-group title="自定义图标" :border="false">
      <van-cell value="自定义图标" is-link @click="toast5" />
      <van-cell value="自定义图片" is-link @click="toast6" />
      <van-cell value=自定义加载图标 is-link @click="toast7" />
    </van-cell-group>

    <van-cell-group title="自定义位置">
      <van-cell value="顶部展示" is-link @click="toast8" />
      <van-cell value="底部展示" is-link @click="toast9" />
    </van-cell-group>

    <van-cell-group title="动态更新提示">
      <van-cell value="动态更新提示" is-link @click="toast10" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "toast",
  data: function () {
    return {
      tip: "toast学习",
    };
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
    toast1: function () {
      this.$toast('展示内容')
    },

    toast2: function () {
      this.$toast({
        type: 'loading',
        message: '加载中...'
      })
    },

    toast3: function () {
      this.$toast({
        type: 'success',
        message: '成功文案'
      })
    },

    toast4: function () {
      this.$toast({
        type: 'fail',
        message: '失败文案'
      })
    },

    toast5: function () {
      this.$toast({
        icon: 'like-o',
        message: '自定义图标'
      })
    },

    toast6: function () {
      this.$toast({
        icon: 'https://img.yzcdn.cn/vant/logo.png',
        message: '自定义图片'
      })
    },

    toast7: function () {
      this.$toast({
        type: 'loading',
        loadingType: 'spinner',
        message: '自定义加载图标'
      })
    },

    toast8: function () {
      this.$toast({
        position: 'top',
        message: '顶部展示'
      })
    },

    toast9: function () {
      this.$toast({
        position: 'bottom',
        message: '底部展示'
      })
    },

    toast10: function () {
      const toast = this.$toast({
        message: '倒计时 3 秒',
        duration: 0,
        overlay: true,
        
        // 完全展示后的回调函数
        onOpened: function () {
          console.log('完全展示后的回调函数')
        },

        // 关闭时的回调函数
        onClose: function () {
          console.log('关闭时的回调函数')
        }
      })
      
      let second = 3
      const timer = setInterval(() => {
        second--
        if (second > 0) {
          toast.message = `倒计时 ${second} 秒`
        } else {
          clearInterval(timer)
          toast.clear()
        }
      }, 1000)
    }
  }
};
</script>
<style scoped>
.container {
  margin: 0 10px;
}
</style>