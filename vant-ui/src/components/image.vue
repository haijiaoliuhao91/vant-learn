<template>
  <div>
      <div>
          <p>基础用法</p>
          <van-image width="100px" height="100px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <p>填充模式</p>
      <div> 
          <van-image class="img" width="10rem" height="10rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <br />
          <van-image class="img" width="10rem" height="10rem" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <br />
          <van-image class="img" width="10rem" height="10rem" fit="fill" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <br />
          <van-image class="img" width="10rem" height="10rem" fit="none" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <br />
          <van-image class="img" width="10rem" height="10rem" fit="scale-down" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <p>圆形图片</p>
      <div>
          <van-image class="img" width="10rem" height="10rem" fit="contain" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <br />
          <van-image class="img" width="10rem" height="10rem" fit="cover" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <br />
          <van-image class="img" width="10rem" height="10rem" fit="fill" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <br />
          <van-image class="img" width="10rem" height="10rem" fit="none" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <br />
          <van-image class="img" width="10rem" height="10rem" fit="scale-down" round src="https://img.yzcdn.cn/vant/cat.jpeg" /> 
      </div>
      <p>加载中提示</p>
      <div>
          <van-image width="10rem" height="10rem">
              <template v-slot:default>
                  <span>默认提示</span>
              </template>
          </van-image>
          <van-image width="10rem" height="10rem">
            <template #loading>
                <van-loading type="spinner" size="20" />
            </template>
            <template #default>
                <span>自定义提示</span>
            </template>
          </van-image>
      </div>
      <p>加载失败提示</p>
      <div>
          <van-image width="10rem" height="10rem" show-error src="" />
      </div>
      <div>
          <van-image width="10rem" height="10rem" src="">
              <template #error>
                  <span>加载失败</span>
              </template>
              <template v-slot:default>
                  <span>加载失败提示</span>
              </template>
          </van-image>
      </div>
  </div>
</template>

<script>
export default {
    name: 'image'
}
</script>

<style scoped>
.img {
    background-color: yellow;
}
</style>