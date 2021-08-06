<template>
  <div class="content">
    <div class="chatDetail">
      <div class="chatDetailCon">
        <div class="chatItem animated fadeInLeft"
          v-for="(list,index) in msg"
          :key="index">
          <div class="chatAvator">
            <img src="https://5km2019.oss-cn-hangzhou.aliyuncs.com/TrongGo/companyLogo.png"
              alt="">
          </div>
          <div class="chatMsg">
            {{list}}
          </div>
        </div>
      </div>
    </div>
    <div class="chatInsert">
      <div class="chatInsertTop">
        <div></div>
        <button @click="sendMsg">发送</button>
      </div>
      <textarea class="chatText"
        v-model="chatMsg"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chatCom',
  data() {
    return {
      msg: ['创狗云官方客服，请问有什么可以帮助您的？'],
      chatMsg: '',
    }
  },
  methods: {
    // 发送消息
    sendMsg() {
      if (!this.chatMsg) return alert("不能发空空消息！")
      try {
        this.$emit('sendMsg', this.chatMsg)
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1px);
  box-shadow: 0 5px 10px 0 rgba(255, 255, 255, 0.3);
}

.chatDetail,
.chatInsert {
  width: 100%;
}
.chatDetail {
  height: 60%;
  overflow: hidden;
}
.chatDetailCon {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0 17px 0 5px;
}
.chatItem {
  width: 100%;
  padding-top: 10px;
  margin: 10px quto;
  display: flex;
}
.chatAvator {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-right: 10px;
  background-color: #fff;
  img {
    width: 100%;
    height: auto;
  }
}
.chatMsg {
  width: auto;
  max-width: 60%;
  word-wrap: break-word;
  padding: 8px;
  background-color: #fff;
  border-radius: 5px;
  color: #000;
  text-align: left;
  position: relative;
}

.chatInsert {
  height: 30%;
  background-color: #fff;
  padding: 3% 1%;
  box-sizing: border-box;
}
.chatInsertTop {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  button {
    width: 60px;
    height: 30px;
    border: 0;
    background-color: #458ee7;
    color: #fff;
    border-radius: 5px;
  }
}
.chatText {
  width: 100%;
  height: 90%;
  text-align: left;
  padding: 5px;
  box-sizing: border-box;
}
</style>