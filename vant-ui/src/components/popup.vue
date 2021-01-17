<template>
  <div class="container">
    <div>
      <p>基础用法</p>
      <van-cell value="展示弹出层" is-link @click="showPopup" style="background-color: white;border-radius: 5px;" />
      <van-popup 
        v-model="show" 
        round 
        duration="0.3"
        closeable
        close-icon="close"
        close-icon-position="bottom-right"
        :position="position" 
        style="height: 200px;" 
      >内容</van-popup>
      <p>弹出位置</p>
      <van-cell-group >
        <van-cell title="顶部弹出" is-link @click="topPopup" />
        <van-cell title="底部弹出" is-link @click="bottomPopup" />
        <van-cell title="左侧弹出" is-link @click="leftPopup"/>
        <van-cell title="右侧弹出" is-link @click="rightPopup" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  data: function () {
    return {
      msg: 'popup',
      show: false,
      position: 'center'
    }
  },

  // 生命周期钩子


  methods: {
    showPopup: function () {
      this.show = true
    },

    topPopup: function () {
      this.show = true
      this.position = 'top'
    },

    bottomPopup: function () {
      this.show = true
      this.position = 'bottom'
    },

    leftPopup: function () {
      this.show = true
      this.position = 'left'
    },

    rightPopup: function () {
      this.show = true
      this.position = 'right'
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 10px;
}

p {
  color: gray;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
</style>