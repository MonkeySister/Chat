<template>
  <div class="header">
    <Row class="headerCon"
      type="flex"
      align="middle"
      justify="space-between">
      <div class="logo">
        <img src="https://5km2019.oss-cn-hangzhou.aliyuncs.com/TrongGo/companyLogo.png"
          alt="">
      </div>
      <Avatar shape="square"
        icon="ios-person"
        size="large" />

    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          label: 'JavaScript',
          value: '/js',
        },
        {
          label: 'Html',
          value: '/html'
        },
        {
          label: 'vuePages',
          value: '/vuePages'
        },
        {
          label: 'Css',
          value: '/css'
        }
      ],
      showMenu: false
    }
  },

  methods: {
  }
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 60px;
  // background: rgba(255, 255, 255, 0.5);
  // backdrop-filter: blur(1px);
  // box-shadow: 0 5px 10px 0 rgba(255, 255, 255, 0.3);
  position: fixed;
}
.headerCon {
  width: 100%;
  padding: 0 4%;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.logo {
  img {
    width: 60px;
    height: auto;
    display: block;
  }
}
</style>