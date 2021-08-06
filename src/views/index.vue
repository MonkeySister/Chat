<template>
  <section class="pageCon">
    <Header></Header>

    <Layout class="main">
      <Sider hide-trigger
        width="250"
        style="min-height:100vh;overflow:auto;">
        <Menu theme="light"
          width="250px"
          style="min-height: 100%;">
          <MenuItem v-for="(list,index) in users"
            :key="index"
            :name="list.uuid">
          <div @click="chatUser(list)"
            class="animated bounce">用户{{index}}</div>
          </MenuItem>
        </Menu>
      </Sider>
      <Content>
        <keep-alive>
          <chatCom @sendMsg="sendMsg"
            :chatMsgs="chatMsgs"
            v-if="uuid">
          </chatCom>
        </keep-alive>
      </Content>
    </Layout>
  </section>
</template>

<script>
import { Layout, Menu } from 'view-design'
import chatCom from '@/views/chatCom/index.vue'

export default {
  components: {
    Layout,
    Sider: Layout.Sider,
    Content: Layout.Content,
    Menu,
    MenuItem: Menu.Item,
    chatCom,
  },
  data() {
    return {
      ws: null,

      users: [],
      uuid: 0,
      chatMsgs: [],
      timer: null
    }
  },
  created() {
    this.setWs()
  },
  methods: {

    //选择用户聊天
    chatUser(user) {
      this.chatMsgs = []
      this.uuid = user.uuid
      this.chatMsgs = user.msg

    },

    setWs() {
      this.timer = window.setInterval(() => {
        if (this.users.length < 3) {
          this.users.push({
            uuid: Math.floor(Math.random(0, 1) * 100000),
            msg: [Math.floor(Math.random(0, 1) * 100000)]
          })
          console.log(this.users);
        } else {
          window.clearInterval(this.timer)
        }
      }, 1500)



      // try {
      //   this.ws = new WebSocket('ws://192.168.1.115:8080/websocket/' + this.chatMsg)
      //   this.ws.onopen = function (e) {
      //     console.log('建立了聊天!');
      //   }
      //   this.ws.onmessage = function (e) {
      //     console.log('收到消息：' + e.data);
      //   }
      //   this.ws.onclose = function (e) {
      //     console.log('与服务器断开');
      //   }
      //   this.ws.onError = function (e) {
      //     console.log('链接异常');
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
    },

    sendMsg(chatMsg) {
      this.ws.send(chatMsg)
    }
  }
}
</script>

<style lang="less" scoped>
.pageCon {
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, #3fbfff 30%, #962dd0);
  overflow: hidden;
}
.main {
  width: 100%;
  height: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  background: transparent;
}
</style>