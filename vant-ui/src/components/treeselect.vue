<template>
  <div>
    <p>
        单选模式
        <van-button type="primary" @click="singleCommit">提交</van-button>
    </p>
    <van-tree-select
      :items="items"
      :active-id.sync="activeId1"
      :main-active-index.sync="mainActiveIndex1"
      @click-nav="clickNav"
      @click-item="clickItem"
    />

    <p>
        多选模式
        <van-button type="primary" @click="multiCommit">提交</van-button>
    </p>
    <van-tree-select
        :items="items" 
        :active-id.sync="activeIds"
        :main-active-index.sync="mainActiveIndex2"
        @click-nav="clickNav"
        @click-item="clickItem"
    />

    <p>自定义内容</p>
    <van-tree-select
        :items="items1"
        :main-active-index.sync="mainActiveIndex3" 
    >
        <template #content>
            <van-image v-if="mainActiveIndex3 === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            <van-image v-if="mainActiveIndex3 === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        </template>
    </van-tree-select>

    <p>徽标提示</p>
    <van-tree-select 
        :items="items2"
        :main-active-index.sync="mainActiveIndex4"
        :active-id.sync="activeId2"
    />

  </div>
</template>

<script>
const items = [
  {
    text: "浙江",
    children: [
      {
        text: "杭州",
        id: 1,
      },
      {
        text: "温州",
        id: 2,
      },
      {
          text: '宁波',
          id: 3,
          disabled: true
      },
      {
          text: '义乌',
          id: 4
      }
    ],
  },
  {
    text: "江苏",
    children: [
      {
        text: "南京",
        id: 5,
      },
      {
        text: "无锡",
        id: 6,
      },
      {
          text: '徐州',
          id: 7
      },
      {
          text: '苏州',
          id: 8
      }
    ],
  },
  {
      text: '福建',
      disabled: true
  }
]

const items1 = [
    {
        text: '分组1'
    },
    {
        text: '分组2'
    }
]

const items2 = [
    {
        text: '浙江',
        dot: true,
        children: [
            {
                text: '杭州',
                id: 1
            },
            {
                text: '温州',
                id: 2
            },
            {
                text: '宁波',
                id: 3,
                disabled: true
            },
            {
                text: '义乌',
                id: 4
            }
        ]
    },
    {
        text: '江苏',
        badge: 5,
        children: [
            {
                text: '南京',
                id: 5
            },
            {
                text: '无锡',
                id: 6
            },
            {
                text: '徐州',
                id: 7
            },
            {
                text: '苏州',
                id: 8
            }
        ]
    }
]


export default {
  name: "treeselect",
  data: function () {
    return {
      mainActiveIndex1: 0,
      activeId1: 1,
      mainActiveIndex2: 0,
      activeIds: [ 1 ],
      mainActiveIndex3: 0,
      items,
      items1,
      items2,
      mainActiveIndex4: 0,
      activeId2: 2
    };
  },

  // 生命周期钩子
  beforeCreate: function () {
    console.log("beforeCreate");
  },

  created: function () {
    console.log("created");
  },

  beforeMount: function () {
    console.log("beforeMount");
  },

  mounted: function () {
    console.log("mounted");
  },

  beforeUpdate: function () {
    console.log("beforeUpdate");
  },

  updated: function () {
    console.log("updated");
  },

  activated: function () {
    console.log("activated");
  },

  deactivated: function () {
    console.log("deactivated");
  },

  beforeDestroy: function () {
    console.log("beforeDestroy");
  },

  destroyed: function () {
    console.log("destroyed");
  },

  errorCaptured: function () {
    console.log("errorCaptured");
  },

  methods: {
      // 点击左侧导航时触发
      clickNav: function (index) {
          this.$notify({
              type: 'success',
              message: `${index}`
          })
      },

      // 点击右侧选择项时触发
      clickItem: function (item) {
          this.$notify({
              type: 'success',
              message: JSON.stringify(item)
          })
      },

      singleCommit: function () {
          this.$notify({
              type: 'warning',
              message: JSON.stringify(this.activeId1)
          })
      },

      multiCommit: function () {
          this.$notify({
              type: 'danger',
              message: JSON.stringify(this.activeIds)
          })
      }
  },
};
</script>

<style scoped>
p {
  padding: 0 25px;
  text-align: left;
}
</style>