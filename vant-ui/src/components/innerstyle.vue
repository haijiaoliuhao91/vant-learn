<template>
  <div>
    <span>文字省略</span>
    <p class="van-ellipsis">这是一段最多显示一行的文字，多余的多余的内容会被会被省略</p>
    <p class="van-multi-ellipsis--l2">这是一个最多显示两行的文字，多余的内容会被省略</p>
    <p class="van-multi-ellipsis--l3">这是一个最多会显示三行的文字，多余的内容会被省略,这是一个最多会显示三行的文字，多余的内容会被省略</p>

    <p class="van-hairline--top" style="height: 50px;line-height: 50px;">top</p>
    <br />
    <p class="van-hairline--bottom" style="height: 50px;line-height: 50px;">bottom</p>
    <br />
    <p class="van-hairline--left" style="height: 50px;line-height: 50px;">left</p>
    <br />
    <p class="van-hairline--right" style="height: 50px;line-height: 50px;">right</p>
    <br />
    <p class="van-hairline--top-bottom" style="height: 50px;line-height: 50px;">top-bottom</p>
    <br />
    <p class="van-hairline--surround" style="height: 50px;line-height: 50px;">surround</p>
    <br />

    <p>动画</p>
    <transition :name="type">
      <div v-show="show" style="width: 100px;height: 100px;background-color: blue;border-radius: 10px;position: fixed;top: 100px;left: 100px;"></div>
    </transition>
    <van-cell-group>
      <van-cell title="Fade" is-link :border='true' @click="fade" />
      <van-cell title="Slide Up" is-link @click="slideUp" />
      <van-cell title="Slide Down" is-link @click="slideDown" />
      <van-cell title="Slide Left" is-link @click="slideLeft" />
      <van-cell title="Slide Right" is-link @click="slideRight" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'innerstyle',
  data: function () {
    return {
      show: false,
      type: 'van-fade'
    }
  },

  // 生命周期钩子

  methods: {
    fade: function () {
      this.show = true
      this.type = 'van-fade'
      setTimeout(() => {
        this.show = false
      }, 3000);
    },

    slideUp: function () {
      this.show = true
      this.type = 'van-slide-up'
      setTimeout(() => {
        this.show = false
      }, 3000)
    },

    slideDown: function () {
      this.show = true
      this.type = 'van-slide-down'
      setTimeout(() => {
        this.show = false
      }, 3000)
    },

    slideLeft: function () {
      this.show = true
      this.type = 'van-slide-left'
      setTimeout(() => {
        this.show = false
      }, 3000)
    },

    slideRight: function () {
      this.show = true
      this.type = 'van-slide-right'
      setTimeout(() => {
        this.show = false
      }, 3000)
    }
  }
}
</script>

<style>
div {
  margin: 0 20px;
}
</style>