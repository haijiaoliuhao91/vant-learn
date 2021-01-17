<template>
  <div id="app">
    <form1 title="1112" :item-click="itemClick" />
  </div>
</template>

<script>
import form1 from './components/field'
export default {
  name: 'App',
  components: {
    form1
  },

  methods: {
    itemClick: function () {
      this.$notify({
        type: 'success',
        message: '点了我'
      })
    }
  }
}
</script>

<style >
body {
  /* background-color: rgb(245, 245, 245); */
  background-color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
